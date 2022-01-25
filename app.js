let colorIndicator = document.getElementById('color-indicator');
let colorIndicator2 = document.getElementById('color-indicator2');
let colorNumber = document.getElementById('color-number');
let colorNumber2 = document.getElementById('color-number2');

const colorPicker = new iro.ColorPicker("#color-picker", {
    width: 180, color: '#fff'
});

colorPicker.on('color:change', function(color){
    colorIndicator.style.backgroundColor = color.hexString;
    colorNumber.innerHTML = `Chosen color: ${color.hexString}`;
    colorNumber2.innerHTML = getComplementaryColor(color.hexString);
    colorIndicator2.style.backgroundColor = getComplementaryColor(color.hexString)
});

const getComplementaryColor = (color = '') => {
    const colorPart = color.slice(1);
    const ind = parseInt(colorPart, 16);
    let iter = ((1 << 4 * colorPart.length) - 1 - ind).toString(16);
    while (iter.length < colorPart.length) {
       iter = '0' + iter;
    };
    return '#' + iter;
 };


