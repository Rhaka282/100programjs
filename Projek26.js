function deteksi() {
  const angka = parseFloat(document.getElementById("angka").value);
  let hasil = angka > 0 ? "Positif" : angka < 0 ? "Negatif" : "Nol";
  document.getElementById("hasil").textContent = `Angka ini ${hasil}`;
}
