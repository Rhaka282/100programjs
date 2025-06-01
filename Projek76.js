function cek() {
  const kalimat = document.getElementById("kalimat").value;
  const angka = kalimat.match(/\d+/g);
  document.getElementById("hasil").textContent = angka ? `Angka: ${angka.join(', ')}` : "Tidak ada angka.";
}
