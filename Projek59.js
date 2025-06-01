function tampilkan() {
  const maks = parseInt(document.getElementById("maks").value);
  const hasil = [];
  for (let i = 2; i <= maks; i += 2) hasil.push(i);
  document.getElementById("hasil").textContent = hasil.join(", ");
}
