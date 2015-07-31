# slider-widget

A JavaScript module that renders [jQuery UI's slider widget](https://jqueryui.com/slider/) and attaches [Backbone's events module](http://backbonejs.org/#Events). Backbone decouples our event system and handles event start-up and tear down, making for neat integration into a single page app.

## Usage

Set options and invoke the module.

	var slider = Slider({
		// options list
	});

Draw the slider.

	slider.create();

Define your custom change event through a callback function. Using Backbone, we bind the event to our object, listen for changes to the active data point, and then trigger the event in the instance of slider.on().

	slider.on('change', function() {
		// your custom event
	});

Check out sample code here `examples/change-color.js`