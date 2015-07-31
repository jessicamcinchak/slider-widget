/** Set options and invoke the function */
var slider = Slider({
    selector: "#slider",
    tooltipId: "tooltip",
    orientation: 'horizontal',
    value: 2020, //handle start value, defaults to options.max
    min: 2010,
    max: 2020,
    step: 1 //snap-to increments
});

/** Draw the slider */
slider.create();

/** 
 * (Configure and call custom event on the instance of slider, decoupling it from the Slider function and maintaining module pattern)
 * When active data value changes, change the div color
 * @param {value} newValue - active data point
 * @returns {string} rgb - spectrum color opposite of current color
 */
slider.on('change', function(newValue) {
    // console.log(newValue);
    $("#box").css('background-color', function() {
        var currentColor = $("#box").css('background-color'),
            colorSpectrum = [ 'rgb(157, 51, 132)', 'rgb(109, 119, 192)' ];
        if ( currentColor == colorSpectrum[0] ) {
            return colorSpectrum[1];
        } else {
            return colorSpectrum[0];
        }
    })
});

/** Update slider after it has been rendered, set new parameter and new value */
slider.update({
    updateParam: 'step', //value, min, max, or step only.
    updateValue: 2
});

/** Todo: Rewrite update with more intuitive format, like 'slider.update({ step: 4, min: 1990 });' */

/** Destroy the slider and box div, unbind event listeners */
// slider.destroy();