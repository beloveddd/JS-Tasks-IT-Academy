if (!window.indexedDB) {
  alert("Ваш браузер не поддерживат стабильную версию IndexedDB. Функции работы с indexedDB будут недоступны или работать нестабильно.");
}

const customerData = [
  { id: "1", name: "Ivan", age: 35, email: "ioann@company.name" },
  { id: "2", name: "Belladonna", age: 32, email: "donna@company.name" },
  { id: "3", name: "Vasya", age: 32, email: "vasya@company.name" },
];

const myDB = "myNewDB";
let request = indexedDB.open(myDB, 1);// Открываем базу данных 

console.log("Our request:");
console.log(request);

request.onupgradeneeded = function(event) { // записываем данные в БД
  const db = event.target.result;

  // Создаем objectStore для хранения инфы о заказчиках. Будем использовать "id" как уникальный ключ
  const objectStore = db.createObjectStore("customers", { keyPath: "id" });

  // Создаем запись по имени (уникальность ключа не важна)
  objectStore.createIndex("name", "name", { unique: false });

  // Создаем запись по емейлу (уникальность ключа не важна)
  objectStore.createIndex("email", "email", { unique: true });

  // Сохраняем объект в исходном массиве/объекте
  for (let i in customerData) {
    objectStore.add(customerData[i]);
  }
};

request.onerror = function(event) { //если база не открылась
  console.log("Database error: " + event.target.errorCode);
};

request.onsuccess = function(event) { //если база открылась и все в порядке
  const db = event.target.result;

    let objectStore = db.transaction(["customers"], "readwrite").objectStore("customers")
    console.log(objectStore);

    objectStore.openCursor().onsuccess = function(event) {
      let cursor = event.target.result;
      if (cursor) {
        console.log(cursor.key + ") user: " + cursor.value.name + ", email: " + cursor.value.email);
        cursor.continue();
      }
      else {
        console.log("больше записей нет");
      }
    };
};

let request2 = indexedDB.open(myDB, 1);// Открываем базу данных 

request2.onerror = function(event) { //если база не открылась
  console.log("Database error: " + event.target.errorCode);
};

request2.onsuccess = function(event) { //если база открылась и все в порядке
  const db = event.target.result;

    let objectStore = db.transaction(["customers"], "readwrite").objectStore("customers")

    objectStore.delete("1"); //удаляем первую запись

    objectStore.openCursor().onsuccess = function(event) {
      let cursor = event.target.result;
      if (cursor) {
        console.log(cursor.key + ") user: " + cursor.value.name + ", email: " + cursor.value.email);
        cursor.continue();
      }
      else {
        console.log("больше записей нет");
      }
    };
};


