let detik = 0;
setInterval(() => {
  detik++;
  document.getElementById("waktu").textContent = detik + " detik berlalu";
}, 1000);
