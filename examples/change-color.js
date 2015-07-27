var slider = Slider({
    orientation: 'adsgufadkgas',
    tooltipId: "tooltip",
    id: "slider",
    activeDataPoint: 2010,
    min: 10,
    max: 20,
    step: 2,
    subdivisions: 5
}); //invoke function

slider.create();

/** 
 * (Configure and call this event on the instance of slider, decoupling it from the Slider function and maintaining module pattern)
 * When active data value changes, change the div color
 * @param {string} rgb - current background color
 * @returns {string} rgb - spectrum color opposite of current color
 */
slider.on('change', function(newValue) {
    console.log(newValue);
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

// console.log(slider); //'slider.activeDataPoint()' logs current data value
// slider.update();
// slider.destroy();