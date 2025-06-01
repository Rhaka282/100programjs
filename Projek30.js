function konversi() {
  let s = parseInt(document.getElementById("detik").value);
  const h = Math.floor(s / 3600);
  s %= 3600;
  const m = Math.floor(s / 60);
  s = s % 60;
  document.getElementById("hasil").textContent = `${h}j ${m}m ${s}d`;
}
