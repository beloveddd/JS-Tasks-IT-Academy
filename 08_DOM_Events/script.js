const date = new Date();
const YY = +prompt('Введите год');
const MM = +prompt('Введите номер месяца');

function getDayOfWeek(date) { 
    let dayOfWeek = date.getDay();
    if (dayOfWeek === 0) dayOfWeek = 7;
    return dayOfWeek - 1;
}

function setYearMonth(YY, MM) {
    date.setMonth(MM - 1);
    date.setFullYear(YY);
    createCalendar();
}

function createCalendar() {
  date.setDate(1);
  
  const daysOfMonth = document.querySelector(".days");
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
    days += `<div class="prev-date">${prevLastDay - i + 1}</div>`;
  }

  for (let j = 1; j <= lastDayOfMonth; j++) {
    if ( j === new Date().getDate() ) {
      days += `<div class="today">${j}</div>`;
    } else {
      days += `<div>${j}</div>`;
    }
  }

  for (k = 1; k <= nextDays; k++) {
    days += `<div class="next-date">${k}</div>`;
  }

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = date.getFullYear();
  daysOfMonth.innerHTML = days;

}

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  createCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  createCalendar();
});

document.querySelector(".prevYear").addEventListener("click", () => {
  date.setFullYear(date.getFullYear() - 1);
  createCalendar();
});

document.querySelector(".nextYear").addEventListener("click", () => {
  date.setFullYear(date.getFullYear() + 1);
  createCalendar();
});


setYearMonth(YY, MM);



