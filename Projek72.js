setInterval(() => {
  const now = new Date();
  const jam = now.toLocaleTimeString();
  document.getElementById("jam").textContent = jam;
}, 1000);
