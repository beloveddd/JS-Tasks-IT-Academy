/*
Session storage представляет временное хранилище информации, которая удаляется после закрытия браузера.
Local storage представляет хранилище для данных на постоянной основе. Данные из local storage автоматически не удаляются и не имеют срока действия. Эти данные не передаются на сервер в запросе HTTP. Кроме того, объем local storage составляет в Chrome и Firefox 5 Mб для домена, а в IE - 10 Mб.
Все данные в web storage представляют набор пар ключ-значение. То есть каждый объект имеет уникальное имя-ключ и определенное значение.
Для работы с local storage в javascript используется объект localStorage, а для работы с session storage - объект sessionStorage.
*/

window.localStorage.setItem("login", "test@gmail.com");

console.log(window.localStorage.getItem("login"));

window.localStorage.removeItem("login");
window.localStorage.clear(); // никогда не используйте, если на то нет веской причины

const user = {
    name: "Ivan",
    age: 23,
    job: "QA"
};

window.localStorage.setItem("user", user);
let savedUser = window.localStorage.getItem("user");
console.log(savedUser); //[object Object]
console.log(savedUser.name); // undefined - savedUser - строка, а не объект

window.localStorage.setItem("user2", JSON.stringify(user));
var savedUser2 = JSON.parse(window.localStorage.getItem("user2"));
console.log(savedUser2.name + " " + savedUser2.age +" " + savedUser2.job); // Ivan 23 false

window.addEventListener("storage", (e) => console.log(`Событие onStorage от ${e.url}!`));


/*    cookies     */
/*
Одну из возможностей сохранения данных в javascript представляет использование куки.
Для работы с куками в объекте document предназначено свойство cookie.
Для установки куков достаточно свойству document.cookie присвоить строку с куками
*/

document.cookie = "login=Ivan;";

console.log(navigator.cookieEnabled);

var expire = new Date();
expire.setHours(expire.getHours() + 4);
document.cookie = "login=Ivan;expires=" + expire.toUTCString() + ";secure=true;";
document.cookie = "country=Belarus;expires=" + expire.toUTCString() + ";";

console.log(document.cookie);

var cookies = document.cookie.split(";");
for(var i=0; i<cookies.length; i++){

    var parts = cookies[i].split("="),
        name = parts[0],
        value = parts[1];
    console.log("Куки: " + name + " = " + value);
}
var dateDelete = new Date(0);
document.cookie = "country=Belarus;expires="+ dateDelete.toUTCString(); + ";";
