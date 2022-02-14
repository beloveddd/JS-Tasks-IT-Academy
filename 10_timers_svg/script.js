const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

let hours;
let angle = 30;
let angleRadians;
const width = 400 + 'px';
const height = 400 + 'px';

const clock = document.getElementById("clock");
clock.style.width = width;
clock.style.height = height;

let widthHeight = clock.offsetHeight;
let radius = widthHeight/2.3;
let widthNumbers = widthHeight/10;

let centerX = clock.offsetWidth/2;
let centerY = clock.offsetHeight/2;

hr.style.height = widthHeight/4.1 + 'px';
hr.style.width = widthHeight/50 + 'px';
hr.style.top = centerY - hr.offsetHeight +'px';
hr.style.left = centerX - hr.offsetWidth +'px';
hr.style.transformOrigin = "100% 100%";

mn.style.height = widthHeight/3.7 + 'px';
mn.style.width = widthHeight/100 + 'px';
mn.style.top = centerY - mn.offsetHeight +'px';
mn.style.transformOrigin = "100% 100%";

sc.style.height = widthHeight/3 + 'px';
sc.style.width = widthHeight/200 + 'px';
sc.style.top = centerY - sc.offsetHeight +'px';
sc.style.transformOrigin = "100% 100%";


for (i = 1; i <= 12; i++) {
    hours = document.createElement('div');
    hours.classList = "numbers";
    hours.textContent = i;
    hours.style.width = widthNumbers + 'px';
    hours.style.height = widthNumbers + 'px';
    hours.style.fontSize = widthNumbers/2 + 'px';
    clock.append(hours);

    let widthHeightNumbers = hours.offsetHeight;

    angleRadians = parseFloat(angle)/180 * Math.PI;

    let numberCenterX = centerX + radius * Math.sin(angleRadians);
    let numberCenterY = centerY - radius * Math.cos(angleRadians);

    hours.style.left = Math.round(numberCenterX - widthHeightNumbers/2) + "px";
    hours.style.top = Math.round(numberCenterY - widthHeightNumbers/2) + "px";

    angle += 30;

}

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
});

