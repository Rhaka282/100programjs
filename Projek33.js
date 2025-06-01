function acak() {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);
  const hasil = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("hasil").textContent = "Angka acak: " + hasil;
}
