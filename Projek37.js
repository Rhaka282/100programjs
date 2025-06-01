setInterval(() => {
  const sekarang = new Date();
  document.getElementById("jam").textContent = sekarang.toLocaleTimeString();
}, 1000);
