var TimeSlider = function() {

    var self = {},
        data = [2010, 2011, 2012, 2013, 2014];

    /** Track active data point */
    self.activeDataPoint = data[0];

    /** Mix Backbone.Events module into self object to trigger custom events */
    if (_ && Backbone) {
       _.extend(self, Backbone.Events);
    }

    /** Bind a callback function to self object with '.on'; change event is later invoked with 'self.trigger' */
    self.on('change');

    /** Draw slider based on data */
    self.create = function() {
        /** Only draw if there is more than one year of data */
        if( (d3.min(data)) !== (d3.max(data)) ) {

            var tooltip = $('<div id="tooltip"><div/>');
            
            /** Create the slider */
            $("#slider").slider({
                orientation: 'horizontal', //or 'vertical'
                value: d3.max(data), //handle start value
                min: d3.min(data),
                max: d3.max(data),
                step: 1, //snap-to increments
                slide: function(event, ui) {
                    tooltip.text(ui.value);
                                    
                    /** Check if this is equal to previous active data point. If yes, trigger custom change event */
                    if (ui.value !== self.activeDataPoint) {
                       if (self.trigger) {
                           self.trigger('change');
                       }
                    }

                    /* Set current active data point to slider handle value */
                    self.activeDataPoint = ui.value;
                }
            });

            /** Show tooltip text before first slide event activated */
            $("#slider").find(".ui-slider-handle")
                .append(tooltip.text($("#slider").slider('value')))
                .show();
        
        } else {
            $("#slider").hide();
        }
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

var ts = TimeSlider(); //invoke function

ts.create();

/** 
 * (Configure and call this event on the instance of ts, decoupling it from the TimeSlider function and maintaining module pattern)
 * When active data value changes, change the div color
 * @param {string} rgb - current background color
 * @returns {string} rgb - spectrum color opposite of current color
 */
ts.on('change', function(rgb) {
    $("#box").css('background-color', function() {
        var currentColor = $("#box").css('background-color'), //.css() method returns 'rgb(r, g, b)' format
            colorSpectrum = [ 'rgb(157, 51, 132)', 'rgb(109, 119, 192)' ];
        if ( currentColor == colorSpectrum[0] ) {
            return colorSpectrum[1];
        } else {
            return colorSpectrum[0];
        }
    })
});

// console.log(ts); //'ts.activeDataPoint()' logs current data value
// ts.update();
// ts.destroy();