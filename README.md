# slider-widget

A JavaScript module that renders [jQuery UI's slider widget](https://jqueryui.com/slider/) and attaches [Backbone's events module](http://backbonejs.org/#Events). Backbone decouples our event system and handles event start-up and tear down, making for neat integration into a single page app.

## Usage

Set options, invoke the module, and draw the slider.

	var slider = Slider({
		// options list
	});
	slider.create();

Define your custom change event through a callback function. Using Backbone, we bind the event to our object, listen for changes to the active data point, and then trigger the event in the instance of slider.on().

	slider.on('change', function() {
		// your custom event
	});

Update and tear down the slider without having to refresh your page.

	slider.update({
		// update paramater and new value
	});
	slider.destroy();

Find a simple code example here `examples/change-color.js`