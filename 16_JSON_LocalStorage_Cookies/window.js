let popup = window.open("https://www.it-academy.by/", "Образовательный центр Парка высоких технологий", "width=400, height=400, resizable=yes");
/*
width: ширина окна в пикселях. Например, width=640
height: высота окна в пикселях. Например, height=480
left: координата X относительно начала экрана в пикселях. Например, left=0
top: координата Y относительно начала экрана в пикселях. Например, top=0
titlebar: будет ли окно иметь строку с заголовком. Например, titlebar=no
menubar: будет ли окно иметь панель меню. Например, menubar=yes
toolbar: будет ли окно иметь панели инструментов. Например, toolbar=yes
location: будет ли окно иметь адресную строку. Например, location=no
scrollbars: допускается ли наличие полос прокрутки. Например, scrollbars=yes
status: наличие статусной строки. Например, status=yes
resizable: может ли окно изменять размеры. Например, resizable=no
*/

let popup2 = window.open("https://www.it-academy.by/", "Образовательный центр Парка высоких технологий", "width=400, height=400, resizable=yes");
function closeWindow(){
    popup2.moveTo(50,50);
    popup2.resizeTo(500,350);
    setTimeout(() => popup2.close(), 5000);
}
setTimeout(closeWindow, 3000);

console.log("В истории " + window.history.length + " страниц");
window.history.back();
window.history.go(-2);

console.log("Строка запроса: " + location.href);
console.log("Путь к ресурсу: " + location.pathname);
console.log("Схема: " + location.origin);
console.log("Протокол: " + location.protocol);
console.log("Порт: " + location.port);
console.log("Хост: " + location.host);
console.log("Имя хоста: " + location.hostname);
console.log("Хэш: " + location.hash);
console.log("Поиск: " + location.search);


location = "http://google.com";
// аналогично
// location.href = "http://google.com";  //заменяет location
// location.assign("http://google.com"); //загружает ресурс, который находится по пути url

location.replace("index.html"); //Переход на другой локальный ресурс

console.log(navigator); //информация об браузере и служебной инфе
console.log(navigator.userAgent);

let sBrowser = "Хрень неведомая!";
const userAgent = navigator.userAgent;

if (userAgent.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
  sBrowser = "Opera";
  //"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
} else if (userAgent.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
  // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (userAgent.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge (not chromium)";
  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (userAgent.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
  // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (userAgent.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
  // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
}

console.log("Вы используете " + sBrowser);
