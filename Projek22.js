let timer;
function mulai() {
  let sisa = parseInt(document.getElementById("detik").value);
  clearInterval(timer);
  timer = setInterval(() => {
    document.getElementById("waktu").textContent = sisa + " detik";
    sisa--;
    if (sisa < 0) {
      clearInterval(timer);
      document.getElementById("waktu").textContent = "Waktu Habis!";
    }
  }, 1000);
}
