// кнопка месяц

const monthSelect = ["Выбрать месяц","Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь",
"Ноябрь","Декабрь"];

monthSelect.forEach( function(item, i) { 
  let opt = document.createElement("option");
  opt.textContent = item;
  opt.value = i;
  document.getElementById("monthSelect").appendChild(opt);
});

// кнопка год

function generateArrayOfYears() {
  let max = new Date().getFullYear();
  let min = max - 41;
  let years = [];

  for (let i = max; i >= min; i--) {
    years.push(i);
  }
  years.unshift("Выбрать год");

  return years;
}

const yearSelect = generateArrayOfYears();

yearSelect.forEach( function(item, i) { 
  let opt = document.createElement("option");
  opt.textContent = item;
  opt.value = item;
  document.getElementById("yearSelect").appendChild(opt);
});

// кнопка создать
const date = new Date();
let YY;
let MM;

const createBtn = document.getElementById("create");

const eventSelects = document.getElementById('selects');
eventSelects.addEventListener("click", getValueSelects);

function getValueSelects() {
    let optValY = document.getElementById('yearSelect').value;
    let optValM = document.getElementById('monthSelect').value;
    if (optValY != 0 && optValM != 0) {
        createBtn.disabled = false;
    }

}

createBtn.addEventListener("click", getValue);

function getValue(YY,MM) {
  YY = document.getElementById("yearSelect").value;
  MM = document.getElementById("monthSelect").value;
  setYearMonth(YY,MM);
  let divCollection = document.getElementsByClassName("calendar");
    
    if (divCollection.length > 0) {
        deleteBtn.disabled = false;
    } 

    // let divCollection = document.getElementsByClassName("calendar");

    let numOfCalendar = divCollection.length;

    if (numOfCalendar === divCollection.length) {

  
        const highliteDate = document.getElementsByClassName('days');
        let newHighliteDate = highliteDate[numOfCalendar-1];
        
        newHighliteDate.addEventListener("mouseover", highlite);

        newHighliteDate.addEventListener("click", highliteOnClick);
        let selectedDiv;

        function highlite(event) {
        ev = event.target;
        if (ev.classList.contains('dateDays') === false) return;

            if (selectedDiv) { 
                selectedDiv.classList.remove('red');
            }

            selectedDiv = ev;
            selectedDiv.classList.add('red');

        }

        let selectedDivClick;

        function highliteOnClick(event) {
            ev = event.target;
            if (ev.classList.contains('dateDays') === false) return;

              // if (currentEv.classList.contains('red2')) return;

            if (selectedDivClick) {
                console.log(selectedDivClick);
                selectedDivClick.classList.add('weekend');
                // selectedDivClick.removeEventListener("click", highliteOnClick);
            } else {
                selectedDivClick = ev;
                selectedDivClick.classList.add('red2');
            }

            



            // console.log(newHighliteDate);
            // let newHighliteDateChildren = newHighliteDate.children;
            // console.log(newHighliteDateChildren);
            // [].forEach.call(newHighliteDateChildren, ((element) => {
            //     console.log(element);
            //     if (element.classList.contains('red2')) return;

            //   }));
        }

    }

    
    // if (ev.parentElement === ev) return; 
    // ev.classList.add("touch");
    // if (ev.classList.contains('touch') === false ) return; 
    // ev.classList.toggle('red');
}
  

// кнопка удалить

const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener("click", deleteCalendar);

function deleteCalendar() {
    let divCollection = document.getElementsByClassName("calendar");
    let orderOfCalendar = divCollection[0];
    orderOfCalendar.remove();

    if (divCollection.length === 0) {
        deleteBtn.disabled = true;
    }

}

// подсветка даты

// const highliteDate = document.getElementById('days');
// console.log(highliteDate);
// highliteDate.addEventListener("mouseover", highlite);

// function highlite(event) {
//     ev = event.target;
//     console.log(ev);
// }

// реализация календаря


function getDayOfWeek(date) { 
  let dayOfWeek = date.getDay();
  if (dayOfWeek === 0) dayOfWeek = 7;
  return dayOfWeek - 1;
}

function setYearMonth(YY, MM) {
  date.setMonth(MM-1);
  date.setFullYear(YY);
  createCalendarDiv();
}

function createCalendar() {
  date.setDate(1);
  
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex;

  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь",
   "Ноябрь","Декабрь"];

  let days = "";

  const dayOfWeek = getDayOfWeek(date);
  let i = dayOfWeek;

  for (i; i > 0; i--) {
    days += `<div class="prev-date dateDays">${prevLastDay - i + 1}</div>`;
  }

  for (let j = 1; j <= lastDayOfMonth; j++) {
    if ( j === new Date().getDate() ) {
      days += `<div class="today dateDays">${j}</div>`;
    } else {
      days += `<div class="dateDays">${j}</div>`;
    }
  }

  for (k = 1; k <= nextDays; k++) {
    days += `<div class="next-date dateDays">${k}</div>`;
  }

  let divCollection = document.getElementsByClassName("calendar");

  let numOfCalendar = divCollection.length;

    let newH1 = evParentParent.children[0].children[2].children[0];
    newH1.innerHTML = months[date.getMonth()];

    let newP = evParentParent.children[0].children[2].children[1];
    newP.innerHTML = date.getFullYear();

    let newDaysDiv = evParentParent.children[2];
    newDaysDiv.innerHTML = days;

}

function createCalendarDiv() {
  date.setDate(1);

  // рисование календаря
  
  let divCalendar = document.createElement("div");
  divCalendar.classList = "calendar";
  let divCalendarContainer = document.getElementsByClassName('calendarContainer');
  
  let calendarContainer = divCalendarContainer[0];
  calendarContainer.appendChild(divCalendar);

  let divMonth = document.createElement("div");
  divMonth.classList = "month";
  divCalendar.appendChild(divMonth);

  //arrows

  let arrowPrevYear = document.createElement("i");
  arrowPrevYear.classList = "fas fa-angle-double-left prevYear";
  divMonth.appendChild(arrowPrevYear);

  let arrowPrevMonth = document.createElement("i");
  arrowPrevMonth.classList = "fas fa-angle-left prev";
  divMonth.appendChild(arrowPrevMonth);
  // month, year

  let divDate = document.createElement("div");
  divDate.classList = "date";
  divMonth.appendChild(divDate);

  let divNameMonth = document.createElement("h1");
  divDate.appendChild(divNameMonth);

  let divNameYear = document.createElement("p");
  divDate.appendChild(divNameYear);
  // arrows

  let arrowNextMonth = document.createElement("i");
  arrowNextMonth.classList = "fas fa-angle-right next";
  divMonth.appendChild(arrowNextMonth);

  let arrowNextYear = document.createElement("i");
  arrowNextYear.classList = "fas fa-angle-double-right nextYear";
  divMonth.appendChild(arrowNextYear);

  // weekdays, days

  let divWeekDays = document.createElement("div");
  divWeekDays.classList = "weekdays";
  divCalendar.appendChild(divWeekDays);

  let divDays = document.createElement("div");
  divDays.classList = "days";
  divDays.id = "days";
  divCalendar.appendChild(divDays);
  
  
  // рассчет значений кадендаря
  
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex;


  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь",
   "Ноябрь","Декабрь",];

  const daysWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС",];

  let days = "";

  const dayOfWeek = getDayOfWeek(date);
  let i = dayOfWeek;

  for (i; i > 0; i--) {
    days += `<div class="prev-date dateDays">${prevLastDay - i + 1}</div>`;
  }

  for (let j = 1; j <= lastDayOfMonth; j++) {
    if ( j === new Date().getDate() ) {
      days += `<div class="today dateDays">${j}</div>`;
    } else {
      days += `<div class="dateDays">${j}</div>`;
    }
  }

  for (let k = 1; k <= nextDays; k++) {
    days += `<div class="next-date dateDays">${k}</div>`;
  }

  // впушиваем значения в нужный кадендарь

  let divCollection = document.getElementsByClassName("calendar");

  let numOfCalendar = divCollection.length;

  if (numOfCalendar === divCollection.length) {
    daysWeek.forEach( function(item) { 
      let div = document.createElement("div");
      div.textContent = item;
      let week = document.getElementsByClassName("weekdays");
      let newWeek = week[numOfCalendar-1];
      newWeek.appendChild(div);
    });

    let h1 = document.getElementsByTagName("h1");
    let newH1 = h1[numOfCalendar-1];
    newH1.innerHTML = months[date.getMonth()];

    let p = document.getElementsByTagName("p");
    let newP = p[numOfCalendar-1];
    newP.innerHTML = date.getFullYear();

    let daysDiv = document.getElementsByClassName("days");
    let newDaysDiv = daysDiv[numOfCalendar-1];
    newDaysDiv.innerHTML = days;

    let prev = document.getElementsByClassName("prev");
    let newPrev = prev[numOfCalendar-1];
    newPrev.addEventListener("click", (event) => {
      ev = event.target;
      evParent = ev.parentElement;
      evParentParent = evParent.parentElement; // div calendar
      date.setMonth(date.getMonth() - 1);

      createCalendar(evParentParent);
      });

    // реализация стрелок

    let next = document.getElementsByClassName("next");
        let newNext = next[numOfCalendar-1];
        newNext.addEventListener("click", (event) => {
            ev = event.target;
            evParent = ev.parentElement;
            evParentParent = evParent.parentElement; 
            date.setMonth(date.getMonth() + 1);
            createCalendar(evParentParent);
    });

    let prevYear = document.getElementsByClassName("prevYear");
        let newPrevYear = prevYear[numOfCalendar-1];
        newPrevYear.addEventListener("click", (event) => {
        ev = event.target;
        evParent = ev.parentElement;
        evParentParent = evParent.parentElement;     
        date.setFullYear(date.getFullYear() - 1);
        createCalendar(evParentParent);
    });

    let nextYear = document.getElementsByClassName("nextYear");
        let newNextYear = nextYear[numOfCalendar-1];
        newNextYear.addEventListener("click", (event) => {
        ev = event.target;
        evParent = ev.parentElement;
        evParentParent = evParent.parentElement; 
        date.setFullYear(date.getFullYear() + 1);
        createCalendar(evParentParent);
    });

  }

}






