setInterval(() => {
  const t = new Date();
  const jam = String(t.getHours()).padStart(2, '0');
  const mnt = String(t.getMinutes()).padStart(2, '0');
  const dtk = String(t.getSeconds()).padStart(2, '0');
  document.getElementById("jam").textContent = `${jam}:${mnt}:${dtk}`;
}, 1000);
