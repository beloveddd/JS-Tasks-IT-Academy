//model
function Clock(gmt) {

  let arrAngles = []; // объект для углов

  // методы модели часов
    let myView = null;
    let timerId;

    this.init = function(view) {
      myView = view;
    };

    this.updateView = function() {
      // расчет углов
      let angle = 30; // 360/12
      let angleRadians;

      for (i = 1; i <= 12; i++) {
        angleRadians = parseFloat(angle)/180 * Math.PI;
        arrAngles.push(angleRadians);
        angle += 30;
      }

      if (!myView) {
        console.error("Нет данных об View!");
        return;
      }

      myView.createClock(arrAngles);

      this.goClock();
    };
    
    this.goClock = function() {
      isRun = true;
      myView.check(isRun); // проверка кнопок
    
      timerId = setInterval(() => {
        let day = new Date();
        let hours = day.getUTCHours();
        let hh = (hours + gmt) * 30;
        let mm = day.getMinutes() * 6;
        let ss = day.getSeconds() * 6;
        
        myView.goArrows(hh,mm,ss, arrAngles);
      });

    }

    this.stopClock = function() {
      isRun = false;
      myView.check(isRun);
      clearInterval(timerId);
    };

}

//controller
function Controller() {
  let myModel = null; // с какой моделью работаем
  let myField = null; // внутри какого элемента DOM наша вёрстка

  this.init = function(model, container) {
  myModel = model;
  myField = container;

  let start = myField.querySelector("#start");
  start.addEventListener("click", myModel.goClock);

  let stop = myField.querySelector("#stop");
  stop.addEventListener("click", myModel.stopClock);
  }
}

//view
function ClockViewDOM() {
    // константы для визуализации часов
    const width = 250;
    const height = 250;
    const radiusNumbers = width/20; // радиус кругов с цифрами
    const radiusForNumbers = width/2.3; // радиус расположения кругов с цифрами
    const fontSize = radiusNumbers; // размер шрифта для цифр
  
    // размеры стрелок
    const widthHr = width/50;
    const heightHr = width/4.1;
    const widthMn = width/100;
    const heightMn = width/3.7;
    const widthSc = width/200;
    const heightSc = width/3;
  
    let centerX = width/2;
    let centerY = height/2;
  
    //view

    let myField = null; // внутри какого элемента DOM наша вёрстка
    let myCity;
    let myGMT;

    this.init = function(container, city, gmt) {
      myField = container;
      myCity = city;
      myGMT = gmt;
    }

    this.createClock = function(arrAngles) {
        const body = myField;
        const newClockContainer = document.createElement('div');
        newClockContainer.classList.add("clockDOM");
        newClockContainer.id = "clockDOM";

        const btnContainer = document.createElement('div');
        btnContainer.classList.add("buttons");
        btnContainer.textContent = `${myCity} (GMT${myGMT})`;
        
        const stopBtn = document.createElement('button');
        stopBtn.id = "stop";
        stopBtn.textContent = "стоп";
        btnContainer.prepend(stopBtn);

        const startBtn = document.createElement('button');
        startBtn.id = "start";
        startBtn.textContent = "старт";
        btnContainer.prepend(startBtn);

        // создаем div с часами
        const clock = document.createElement('div');
        clock.classList.add("clock");
        clock.id = "clock";
        clock.style.width = width + "px";
        clock.style.height = height + "px";

        // рисуем стрелки
        const hrY = centerY - heightHr;
        const hrX = centerX - widthHr/2;
        const mnY = centerY - heightMn;
        const mnX = centerX - widthMn/2;
        const scY = centerY - heightSc;
        const scX = centerX - widthSc/2;

        const hrDiv = document.createElement('div');
        hrDiv.classList.add("hr");
        hrDiv.id = "hr";
        hrDiv.style.width = widthHr + "px";
        hrDiv.style.height = heightHr + "px";
        hrDiv.style.top = hrY + "px";
        hrDiv.style.left = hrX + "px";
        hrDiv.style.transformOrigin = "100% 100%";
        clock.append(hrDiv);

        const mnDiv = document.createElement('div');
        mnDiv.classList.add("mn");
        mnDiv.id = "mn";
        mnDiv.style.width = widthMn + "px";
        mnDiv.style.height = heightMn + "px";
        mnDiv.style.top = mnY + "px";
        mnDiv.style.left = mnX + "px";
        mnDiv.style.transformOrigin = "100% 100%";
        clock.append(mnDiv);

        const scDiv = document.createElement('div');
        scDiv.classList.add("sc");
        scDiv.id = "sc";
        scDiv.style.width = widthSc + "px";
        scDiv.style.height = heightSc + "px";
        scDiv.style.top = scY + "px";
        scDiv.style.left = scX + "px";
        scDiv.style.transformOrigin = "100% 100%";
        clock.append(scDiv);

        const clockCenter = document.createElement('div');
        clockCenter.classList.add("center");
        clockCenter.style.width = width/15 + "px";
        clockCenter.style.height = height/15 + "px";
        clock.append(clockCenter);

        // рисуем круги и цифры
        for (i = 1; i <= 12; i++) {
          let hours = document.createElement('div');
          hours.classList = "numbers";
          hours.textContent = i;
          hours.style.width = radiusNumbers*2 + "px";
          hours.style.height = radiusNumbers*2+ "px";
          hours.style.fontSize = fontSize + "px";
          clock.append(hours);

          // для DOM
          let numberCenterX = centerX + radiusForNumbers * Math.sin(arrAngles[i-1]);
          let numberCenterY = centerY - radiusForNumbers * Math.cos(arrAngles[i-1]);
          
          let left = Math.round(numberCenterX - radiusNumbers);
          let top = Math.round(numberCenterY - radiusNumbers);
      
          hours.style.left = left + "px";
          hours.style.top = top + "px";
      
        }
    
        newClockContainer.append(btnContainer);
        newClockContainer.append(clock);

        body.prepend(newClockContainer);
            
    }

    this.goArrows = function(hh,mm,ss) {

        const hr = myField.querySelector('#hr');
        const mn = myField.querySelector('#mn');
        const sc = myField.querySelector('#sc');

        hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;

    }

    this.check = function(isRun) {

        let startB = myField.querySelector('#start');
        let stopB = myField.querySelector('#stop');

        if (isRun) {
          startB.disabled = true;
          stopB.disabled = false;
        } else if (!isRun) {
          stopB.disabled = true;
          startB.disabled = false;
        }

    }

}

// создание 1-х часов на DOM
const clockDOMmodel = new Clock(3);
const clockDOMview = new ClockViewDOM();
const clockDOMcontroller = new Controller();
// связываем компоненты друг с другом, указывая в каком контейнере/поле им работать
const DOMContainer = document.getElementById("allDOM-1");
clockDOMmodel.init(clockDOMview);
clockDOMview.init(DOMContainer, "Moscow", "+3");
clockDOMmodel.updateView(); 
clockDOMcontroller.init(clockDOMmodel, DOMContainer); 

// создание 2-x часов на DOM
const clockDOMmodelSec = new Clock(-5);
const clockDOMviewSec = new ClockViewDOM();
const clockDOMcontrollerSec = new Controller();
// связываем компоненты друг с другом, указывая в каком контейнере/поле им работать
const DOMContainerSec = document.getElementById("allDOM-2");
clockDOMmodelSec.init(clockDOMviewSec);
clockDOMviewSec.init(DOMContainerSec, "New York", "-5");
clockDOMmodelSec.updateView();
clockDOMcontrollerSec.init(clockDOMmodelSec, DOMContainerSec);



function ClockViewSVG() {
  // константы для визуализации часов
  const width = 250;
  const height = 250;
  const radiusNumbers = width/20; // радиус кругов с цифрами
  const radiusForNumbers = width/2.3; // радиус расположения кругов с цифрами
  const fontSize = radiusNumbers; // размер шрифта для цифр

  // размеры стрелок
  const widthHr = width/50;
  const heightHr = width/4.1;
  const widthMn = width/100;
  const heightMn = width/3.7;
  const widthSc = width/200;
  const heightSc = width/3;

  let centerX = width/2;
  let centerY = height/2;

  let myField = null; // внутри какого элемента DOM наша вёрстка
  let myCity;
  let myGMT;

  this.init = function(container, city, gmt) {
    myField = container;
    myCity = city;
    myGMT = gmt;
  }

  this.createClock = function(arrAngles) {

    // создание контейнера с кнопками
    const btnContainer = document.createElement('div');
    btnContainer.classList.add("buttons");
    btnContainer.textContent = `${myCity} (GMT${myGMT})`;
    
    const stopBtn = document.createElement('button');
    stopBtn.id = "stop";
    stopBtn.textContent = "стоп";
    btnContainer.prepend(stopBtn);

    const startBtn = document.createElement('button');
    startBtn.id = "start";
    startBtn.textContent = "старт";
    btnContainer.prepend(startBtn);

    myField.append(btnContainer);

    // создание часов
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    
    svg.setAttributeNS(null, "width", width);
    svg.setAttributeNS(null, "height", height);
    svg.setAttributeNS(null, "id", "svg");
    svg.setAttributeNS(null, "display", "flex");
    svg.setAttributeNS(null, "justify-content", "center");
    svg.setAttributeNS(null, "align-items", "center");
    myField.append(svg);

    const circle = document.createElementNS(svgNS,"circle");

    circle.setAttributeNS(null, 'cx', '50%');
    circle.setAttributeNS(null, 'cy', '50%');
    circle.setAttributeNS(null, 'r', width/2);
    circle.setAttributeNS(null, 'fill', 'rgb(227, 227, 227)');
    svg.append(circle);

    // создание стрелок

    
    const hr = document.createElementNS(svgNS,"line");
    hr.setAttributeNS(null, 'x1', '50%');
    hr.setAttributeNS(null, 'y1', '50%');
    hr.setAttributeNS(null, 'x2', '50%');
    hr.setAttributeNS(null, 'y2', centerY - heightHr);
    hr.setAttributeNS(null, 'stroke', 'rgb(36, 36, 36)');
    hr.setAttributeNS(null, 'stroke-width', widthHr);
    hr.setAttributeNS(null, "id", "hour");
    hr.setAttributeNS(null, "transform-origin", "center center");
    hr.setAttributeNS(null, "stroke-linecap", "round");
    svg.append(hr);

    const mn = document.createElementNS(svgNS,"line");
    mn.setAttributeNS(null, 'x1', '50%');
    mn.setAttributeNS(null, 'y1', '50%');
    mn.setAttributeNS(null, 'x2', '50%');
    mn.setAttributeNS(null, 'y2', centerY - heightMn);
    mn.setAttributeNS(null, 'stroke', 'white');
    mn.setAttributeNS(null, 'stroke-width', widthMn);
    mn.setAttributeNS(null, "id", "min");
    mn.setAttributeNS(null, "transform-origin", "center center");
    mn.setAttributeNS(null, "stroke-linecap", "round");
    svg.append(mn);

    const sc = document.createElementNS(svgNS,"line");
    sc.setAttributeNS(null, 'x1', '50%');
    sc.setAttributeNS(null, 'y1', '50%');
    sc.setAttributeNS(null, 'x2', '50%');
    sc.setAttributeNS(null, 'y2', centerY - heightSc);
    sc.setAttributeNS(null, 'stroke', 'red');
    sc.setAttributeNS(null, 'stroke-width', widthSc);
    sc.setAttributeNS(null, "id", "sec");
    sc.setAttributeNS(null, "transform-origin", "center center");
    sc.setAttributeNS(null, "stroke-linecap", "round");
    svg.append(sc);

    // рисуем круги и цифры
    for (i = 1; i <= 12; i++) {
      // для кругов SVG и Canvas
      let cx = centerX + radiusForNumbers * Math.sin(arrAngles[i-1]);
      let cy = centerY - radiusForNumbers * Math.cos(arrAngles[i-1]);

      let numbersCircle = document.createElementNS(svgNS,"circle");
      numbersCircle.setAttributeNS(null, 'cx', cx + "px");
      numbersCircle.setAttributeNS(null, 'cy', cy + "px");
      numbersCircle.setAttributeNS(null, 'r', radiusNumbers);
      numbersCircle.setAttributeNS(null, 'fill', 'rgb(255, 255, 255)');
      svg.append(numbersCircle);

      let textCircle = document.createElementNS(svgNS,"text");
      textCircle.textContent = i;
      textCircle.setAttributeNS(null, 'font-size', fontSize);
      textCircle.setAttributeNS(null, 'font-weight', "bold");
      textCircle.classList = "numb";
      svg.append(textCircle);
      

      if (i <= 5) {
        textCircle.setAttributeNS(null, 'x', cx * 0.99 + "px");
        textCircle.setAttributeNS(null, 'y', cy * 1.04 + "px");
      } else if (i === 6 || i === 7 ) {
        textCircle.setAttributeNS(null, 'x', cx * 0.97 + "px");
        textCircle.setAttributeNS(null, 'y', cy * 1.04 + "px");
      } else if (i === 8 || i === 9 ) {
        textCircle.setAttributeNS(null, 'x', cx * 0.87 + "px");
        textCircle.setAttributeNS(null, 'y', cy * 1.04 + "px");
      } else if (i === 10) {
          textCircle.setAttributeNS(null, 'x', cx * 0.78 + "px");
          textCircle.setAttributeNS(null, 'y', cy * 1.04 + "px");
      } else if (i === 11) {
        textCircle.setAttributeNS(null, 'x', cx * 0.9 + "px");
        textCircle.setAttributeNS(null, 'y', cy * 1.04 + "px");
      } else if (i === 12) {
          textCircle.setAttributeNS(null, 'x', cx * 0.94 + "px");
          textCircle.setAttributeNS(null, 'y', cy * 1.04 + "px");
      }
       
  }

    const circleCenter = document.createElementNS(svgNS,"circle");
    circleCenter.setAttributeNS(null, 'cx', '50%');
    circleCenter.setAttributeNS(null, 'cy', '50%');
    circleCenter.setAttributeNS(null, 'r', width/15/2);
    circleCenter.setAttributeNS(null, 'fill', 'white');
    svg.append(circleCenter);
          
  }

  this.goArrows = function(hh,mm,ss) {

      const hr = myField.querySelector('#hour');
      const mn = myField.querySelector('#min');
      const sc = myField.querySelector('#sec');
     
      hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;

  }

  this.check = function(isRun) {

    let startB = myField.querySelector('#start');
    let stopB = myField.querySelector('#stop');

    if (isRun) {
      startB.disabled = true;
      stopB.disabled = false;
    } else if (!isRun) {
      stopB.disabled = true;
      startB.disabled = false;
    }

}
    
}

// создание 1-х часов на SVG
const clockSVGmodel = new Clock(0);
const clockSVGview = new ClockViewSVG();
const clockSVGcontroller = new Controller();
// связываем компоненты друг с другом, указывая в каком контейнере/поле им работать
const SVGContainer = document.getElementById("allSVG-1");
clockSVGmodel.init(clockSVGview);
clockSVGview.init(SVGContainer, "London", "");
clockSVGmodel.updateView(); 
clockSVGcontroller.init(clockSVGmodel, SVGContainer); 

// создание 2-х часов на SVG
const clockSVGmodelSec = new Clock(8);
const clockSVGviewSec = new ClockViewSVG();
const clockSVGcontrollerSec = new Controller();
// связываем компоненты друг с другом, указывая в каком контейнере/поле им работать
const SVGContainerSec = document.getElementById("allSVG-2");
clockSVGmodelSec.init(clockSVGviewSec);
clockSVGviewSec.init(SVGContainerSec, "Tokio", "+9");
clockSVGmodelSec.updateView(); 
clockSVGcontrollerSec.init(clockSVGmodelSec, SVGContainerSec);

function ClockViewCanvas() {
  // константы для визуализации часов
  const width = 250;
  const height = 250;
  const radiusNumbers = width/20; // радиус кругов с цифрами
  const radiusForNumbers = width/2.3; // радиус расположения кругов с цифрами
  const fontSize = radiusNumbers; // размер шрифта для цифр

  // размеры стрелок
  const widthHr = width/50;
  const heightHr = width/4.1;
  const widthMn = width/100;
  const heightMn = width/3.7;
  const widthSc = width/200;
  const heightSc = width/3;

  let centerX = width/2;
  let centerY = height/2;

  let myField = null; // внутри какого элемента DOM наша вёрстка
  let myCity;
  let myGMT;
  let ctx;
  let canvasClock;

  this.init = function(container, city, gmt) {
    myField = container;
    myCity = city;
    myGMT = gmt;
  }

  this.createClock = function(modelData) {
    // создание контейнера с кнопками
    const btnContainer = document.createElement('div');
    btnContainer.classList.add("buttons");
    btnContainer.textContent = `${myCity} (GMT${myGMT})`;
    
    const stopBtn = document.createElement('button');
    stopBtn.id = "stop";
    stopBtn.textContent = "стоп";
    btnContainer.prepend(stopBtn);

    const startBtn = document.createElement('button');
    startBtn.id = "start";
    startBtn.textContent = "старт";
    btnContainer.prepend(startBtn);

    myField.prepend(btnContainer);

    // создание канваса
    const canvasId = myField.lastElementChild.id;
    canvasClock = document.getElementById(canvasId);
    canvasClock.parentElement.style.display = "block";
    canvasClock.width = width;
    canvasClock.height = height;

      if (canvasClock && canvasClock.getContext("2d")) {
        ctx = canvasClock.getContext("2d");
      }
  }

  this.createClockField = function(arrAngles) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvasClock.width, canvasClock.height);
    
    // Координаты центра и радиуса часов
    const radiusClock = width/2;

    ctx.fillStyle = "rgb(227, 227, 227)";
    
    // Рисуем круг часов
    ctx.beginPath();
    ctx.arc(centerX, centerY, radiusClock, 0, 2*Math.PI);
    ctx.fill();

    

    // Рисуем круги и числа
    for (i = 1; i <= 12; i++) {

      ctx.fillStyle = "rgb(255, 255, 255)";
      // для кругов SVG и Canvas
      let x = centerX + radiusForNumbers * Math.sin(arrAngles[i-1]);
      let y = centerY - radiusForNumbers * Math.cos(arrAngles[i-1]);

      // Рисуем круги для чисел
      ctx.beginPath();
      ctx.arc(x, y, radiusNumbers, 0, 2*Math.PI);
      ctx.fill();

      // Рисуем цифры
      ctx.fillStyle = "black";
      let theString = `${i}`;
      ctx.font = `600 ${fontSize + "px"} Trebuchet MS`;

      if (i <= 5) {
        ctx.fillText(theString, x*0.98, y*1.03);
      } else if (i === 6 || i === 7 ) {
        ctx.fillText(theString, x*0.97, y*1.03);
      } else if (i === 8 || i === 9 ) {
        ctx.fillText(theString, x*0.9, y*1.03);
      } else if (i === 10) {
        ctx.fillText(theString, x*0.78, y*1.03);
      } else if (i === 11) {
        ctx.fillText(theString, x*0.88, y*1.03);
      } else if (i === 12) {
        ctx.fillText(theString, x*0.94, y*1.03);
      }

    }
      
  }

  this.goArrows = function(hh,mm,ss,arrAngles) {
      this.createClockField(arrAngles);
     
      // Рисуем стрелку часов
      ctx.lineCap = "round";
      ctx.strokeStyle = "rgb(36, 36, 36)";
      ctx.lineWidth = widthHr;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + heightHr*Math.cos( Math.PI / 2 - hh * (Math.PI / 180) - mm/12 * (Math.PI / 180) ), 
      centerY - heightHr*Math.sin( Math.PI / 2 - hh * (Math.PI / 180) - mm/12 * (Math.PI / 180)));
      ctx.stroke();

      // Рисуем стрелку минут     
      ctx.lineCap = "round";
      ctx.strokeStyle = "white";
      ctx.lineWidth = widthMn;
      ctx.beginPath();
      ctx.moveTo (centerX, centerY);
      ctx.lineTo (centerX + heightMn*Math.cos( Math.PI / 2 - mm * (Math.PI / 180) ), 
     centerY- heightMn*Math.sin( Math.PI / 2 - mm * (Math.PI / 180) ));
      ctx.stroke();
      
      // Рисуем стрелку секунд
      ctx.lineCap = "round";
      ctx.strokeStyle = "red";
      ctx.lineWidth = widthSc;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo( centerX + heightSc*Math.cos( Math.PI / 2 - ss * (Math.PI / 180) ), 
      centerY- heightSc*Math.sin( Math.PI / 2 - ss * (Math.PI / 180) ) );
      ctx.stroke();

      // Рисуем круг для стрелок
      let radiusCenter = width/15/2;
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc (centerX, centerY, radiusCenter, 0, 2*Math.PI);
      ctx.fill();

  }

  this.check = function(isRun) {

    let startB = myField.querySelector('#start');
    let stopB = myField.querySelector('#stop');

    if (isRun) {
      startB.disabled = true;
      stopB.disabled = false;
    } else if (!isRun) {
      stopB.disabled = true;
      startB.disabled = false;
    }

  }

}

// создание 1-х часов на Canvas
const clockCanvasModel = new Clock(+1);
const clockCanvasView = new ClockViewCanvas();
const clockCanvasController = new Controller();
// связываем компоненты друг с другом, указывая в каком контейнере/поле им работать
const CanvasContainer = document.getElementById("containerCanvas-1");
clockCanvasModel.init(clockCanvasView);
clockCanvasView.init(CanvasContainer, "Berlin", "+1");
clockCanvasModel.updateView();
clockCanvasController.init(clockCanvasModel, CanvasContainer); 

// создание 2-х часов на Canvas
const clockCanvasModelSec = new Clock(+10);
const clockCanvasViewSec = new ClockViewCanvas();
const clockCanvasControllerSec = new Controller();
// связываем компоненты друг с другом, указывая в каком контейнере/поле им работать
const CanvasContainerSec = document.getElementById("containerCanvas-2");
clockCanvasModelSec.init(clockCanvasViewSec);
clockCanvasViewSec.init(CanvasContainerSec, "Vladivostok", "+10");
clockCanvasModelSec.updateView(); 
clockCanvasControllerSec.init(clockCanvasModelSec, CanvasContainerSec);



