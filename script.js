const year = new Date().getFullYear() + 1;
const newYears = '1 Jan ' + year.toString();

const daysNY = $("#days");
const hoursNY = $("#hours");
const minutesNY = $("#minutes");
const secondsNY = $("#seconds");

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysNY.html(days);
  hoursNY.html(hours);
  minutesNY.html(minutes);
  secondsNY.html(seconds);
}

//initialize the call
countdown();

setInterval(countdown, 1000);
