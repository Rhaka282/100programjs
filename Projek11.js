function updateJam() {
  const jam = new Date();
  document.getElementById("jam").textContent = jam.toLocaleTimeString();
}
setInterval(updateJam, 1000);
updateJam();
