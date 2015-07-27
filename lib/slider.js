var Slider = function(options) {

    var self = {};

    /** Set active data point */
    self.activeDataPoint = options.activeDataPoint || options.min;

    /** Mix Backbone.Events module into self object to trigger custom events */
    if (_ && Backbone) {
       _.extend(self, Backbone.Events);
    }

    var setOrientation = function() {
        if (['horizontal', 'vertical'].indexOf(options.orientation) > -1) {
            self.orientation = options.orientation;
        } else {
            self.orientation = 'horizontal'; 
        }
    };

    setOrientation();

    /** Draw slider based on data */
    self.create = function() {
        var tooltip = $('<div id="tooltip"><div/>');
        
        /** Create the slider */
        $("#slider").slider({
            orientation: self.orientation, //or 'vertical'
            value: options.activeDataPoint || options.min, //handle start value
            min: options.min,
            max: options.max,
            step: options.step, //snap-to increments
            slide: function(event, ui) {
                tooltip.text(ui.value);
                                
                /** Check if this is equal to previous active data point. If yes, trigger custom change event */
                if (ui.value !== self.activeDataPoint) {
                    self.trigger('change', ui.value);
                }
                /* Set current active data point to slider handle value */
                self.activeDataPoint = ui.value;
            }
        });
        /** Show tooltip text before first slide event activated */
        $("#slider").find(".ui-slider-handle")
            .append(tooltip.text($("#slider").slider('value')))
            .show();
    };

    /** Update slider value for a specific param and adjust subdivisions */
    self.update = function() {
        $("#slider").slider( 'option', 'min', 2008);
    };

    /** Wipe out event listeners and take off dom elements */
    self.destroy = function() {
        $("#slider").unbind().remove();
        $("#box").unbind().remove();
    };

    self.setData = function(newData) {
    	data = newData;
    	//call update
    };

    return self;
};