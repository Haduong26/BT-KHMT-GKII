let colorIndicator = document.getElementById('color-indicator');
let colorIndicator2 = document.getElementById('color-indicator2');
let colorIndicator3 = document.getElementById('color-indicator3');
let colorIndicator4 = document.getElementById('color-indicator4');
let colorNumber = document.getElementById('color-number');
let colorNumber2 = document.getElementById('color-number2');
let colorNumber3 = document.getElementById('color-number3');
let colorNumber4 = document.getElementById('color-number4');

const colorPicker = new iro.ColorPicker("#color-picker", {
    width: 180, color: '#fff'
});

colorPicker.on('color:change', function(color){
    colorIndicator.style.backgroundColor = color.hexString;
    colorNumber.innerHTML = color.hexString;
    colorNumber2.innerHTML = getTetraidc(color.hexString);
    colorNumber3.innerHTML = getTetraidc2(color.hexString);
    colorNumber4.innerHTML = getTetraidc3(color.hexString);
    colorIndicator2.style.backgroundColor = getTetraidc(color.hexString);
    colorIndicator3.style.backgroundColor = getTetraidc2(color.hexString);
    colorIndicator4.style.backgroundColor = getTetraidc3(color.hexString);
});

function getTetraidc(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    var colorInHSL = 'hsl(' + h +(h + 90) + ', ' + s + '%, ' + l + '%)';
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + (h+90) / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');  
    };
    return `#${f(0)}${f(8)}${f(4)}`;

}

function getTetraidc2(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    var colorInHSL = 'hsl(' + h +(h + 180) + ', ' + s + '%, ' + l + '%)';
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + (h+180) / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');  
    };
    return `#${f(0)}${f(8)}${f(4)}`;

}

function getTetraidc3(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);

    var colorInHSL = 'hsl(' + h +(h + 270) + ', ' + s + '%, ' + l + '%)';
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + (h+270) / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');  
    };
    return `#${f(0)}${f(8)}${f(4)}`;

}
