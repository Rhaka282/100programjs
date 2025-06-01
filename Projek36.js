let detik = 0, interval;
function mulai() {
  if (!interval) {
    interval = setInterval(() => {
      detik++;
      document.getElementById("waktu").textContent = `${detik} detik`;
    }, 1000);
  }
}
function berhenti() {
  clearInterval(interval);
  interval = null;
}
