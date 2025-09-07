document.addEventListener("DOMContentLoaded", () => {
  const hoursEl = document.getElementById("clock-hours");
  const minutesEl = document.getElementById("clock-minutes");
  const secondsEl = document.getElementById("clock-seconds");

  const formatTime = (num) => String(num).padStart(2, "0");

  function updateClock() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());

    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
  }

  updateClock(); // run immediately
  setInterval(updateClock, 1000);
});
