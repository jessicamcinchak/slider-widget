# slider-widget

slider-widget is a JavaScript module that uses jQuery UI's slider together with Backbone's event system to track active data points and trigger custom change events.

# Usage

Set your data by defining an array within the Slider module. For example:

	var data = [2010, 2011, 2012, 2013, 2014];

Invoke the module and draw the slider.

	var slider = Slider();
	slider.create();

Define your custom change event through a callback function. Using Backbone, we bind our event to our module, listen for changes to the active data point, and trigger an event we define in the instance of slider.on(). This example changes the color of a div as the slider steps through multiple years.

	slider.on('change', function(rgb) {
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

#Dependencies

* jQuery v2.1.1
* jQuery-UI v1.11.4
* Backbone v1.2.1
* Underscore v1.8.3
* D3 v3.5.6
