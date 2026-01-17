let is24Hour = false;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "";

  // Date & Day
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  document.getElementById("dateDay").innerText =
    `${days[now.getDay()]} | ${date}/${month}/${year}`;

  if (!is24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  document.getElementById("ampm").innerText = is24Hour ? "" : ampm;
}

function toggleFormat() {
  is24Hour = !is24Hour;
  document.querySelector(".toggle-btn").innerText =
    is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
  updateClock();
}

setInterval(updateClock, 1000);
updateClock();