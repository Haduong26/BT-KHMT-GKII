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
    colorNumber.innerHTML = color.hexString;
    colorNumber2.innerHTML = getTriadic1(color.hexString);
    colorNumber3.innerHTML = getTriadic2(color.hexString);
    colorIndicator2.style.backgroundColor = getTriadic1(color.hexString)
    colorIndicator3.style.backgroundColor = getTriadic2(color.hexString)
});

function getTriadic1(hex){
    // strip the leading # if it's there
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result){
        var r= parseInt(result[1], 16);
        var g= parseInt(result[2], 16);
        var b= parseInt(result[3], 16);
        return "#" + ((1 << 24) + (g << 16) + (b << 8) + r).toString(16).slice(1);
    } 
}

function getTriadic2(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if(result){
        var r= parseInt(result[1], 16);
        var g= parseInt(result[2], 16);
        var b= parseInt(result[3], 16);
        return "#" + ((1 << 24) + (b << 16) + (r << 8) + g).toString(16).slice(1);
    } 
}
