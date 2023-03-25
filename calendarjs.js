const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const monthLbl = document.getElementById('month');
const daysContainer = document.querySelector('.days');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

renderCalendar();

prevBtn.addEventListener('click', () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  renderCalendar();
});

nextBtn.addEventListener('click', () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  renderCalendar();
});

function renderCalendar() {
  let firstDay = new Date(year, month, 1);
  let lastDay = new Date(year, month + 1, 0);
  let days = '';

  for (let i = 0; i < firstDay.getDay(); i++) {
    days += '<div></div>';
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    let className = '';
    if (i === date.getDate() && year === date.getFullYear() && month === date.getMonth()) {
      className = 'current-day';
    }
    days += <div class="${className}">${i
