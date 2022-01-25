
let colorIndicator = document.getElementById('color-indicator');
let colorIndicator2 = document.getElementById('color-indicator2');
let colorIndicator3 = document.getElementById('color-indicator3');
let colorNumber = document.getElementById('color-number');
let colorNumber2 = document.getElementById('color-number2');
let colorNumber3 = document.getElementById('color-number3');

const colorPicker = new iro.ColorPicker("#color-picker", {
    width: 180, color: '#fff'
});

colorPicker.on('color:change', function(color){
    colorIndicator.style.backgroundColor = color.hexString;
    colorNumber.innerHTML = `Chosen color: ${color.hexString}`;
    colorNumber2.innerHTML = increase_brightness(color.hexString, 40);
    colorNumber3.innerHTML = increase_brightness(color.hexString, 70);
    colorIndicator2.style.backgroundColor = increase_brightness(color.hexString, 40);
    console.log(colorIndicator2.style.backgroundColor);
    colorIndicator3.style.backgroundColor = increase_brightness(color.hexString, 70);

});

function increase_brightness(hex, percent){
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, '');

    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if(hex.length == 3){
        hex = hex.replace(/(.)/g, '$1$1');
    }

    var r = parseInt(hex.substr(0, 2), 16),
        g = parseInt(hex.substr(2, 2), 16),
        b = parseInt(hex.substr(4, 2), 16);

    return '#' +
       ((0|(1<<8) + r + (256 - r) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + g + (256 - g) * percent / 100).toString(16)).substr(1) +
       ((0|(1<<8) + b + (256 - b) * percent / 100).toString(16)).substr(1);
}



