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

  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь",
   "Ноябрь","Декабрь"];

  let days = "";

  const dayOfWeek = getDayOfWeek(date);
  let i = dayOfWeek;

  for (i; i > 0; i--) {
    days += `<div></div>`;
  }

  for (let j = 1; j <= lastDayOfMonth; j++) {
    days += `<div>${j}</div>`;
  }

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  document.querySelector(".date p").innerHTML = date.getFullYear();
  daysOfMonth.innerHTML = days;

}

setYearMonth(YY, MM);



