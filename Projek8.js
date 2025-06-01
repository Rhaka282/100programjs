function cek() {
  const angka = parseInt(document.getElementById("angka").value);
  const hasil = angka % 2 === 0 ? "Genap" : "Ganjil";
  document.getElementById("hasil").textContent = angka + " adalah " + hasil;
}
