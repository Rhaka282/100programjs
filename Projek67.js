function cek() {
  const n = parseInt(document.getElementById("angka").value);
  document.getElementById("hasil").textContent = n % 2 === 0 ? "Genap" : "Ganjil";
}
