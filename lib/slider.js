var Slider = function(options) {

    var self = {};

    /** Set active data point */
    self.activeDataPoint = options.value || options.max;

    /** Mix Backbone.Events module into self object to trigger custom events */
    if (_ && Backbone) {
       _.extend(self, Backbone.Events);
    }

    /** Check that slider orientation is set to one of two allowed options, if not default to horizontal */
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
            orientation: self.orientation,
            value: options.value || options.max,
            min: options.min,
            max: options.max,
            step: options.step,
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

    /** Check that update paramaters are set to allowed options, if not set to null and don't update */
    /** TODO: add additional checks. Exs: if I set a new min, is it less than current min? If I set a new step for increments of 2, but my start value is on an odd-number year, default to max. */
    var setUpdateParam = function() {
        if(['value', 'min', 'max', 'step'].indexOf(options.updateParam) > -1) {
            self.updateParam = options.updateParam;
            self.updateValue = options.updateValue;
        } else {
            self.updateParam = null;
            self.updateValue = null;
        }
    };

    setUpdateParam();

    /** Update slider value for a specific param and adjust subdivisions */
    self.update = function(options) {
        $("#slider").slider( 'option', options.updateParam, options.updateValue);
    };

    /** Wipe out event listeners and take off dom elements */
    self.destroy = function() {
        $("#slider").unbind().remove();
        $("#box").unbind().remove();
    };

    return self;
};