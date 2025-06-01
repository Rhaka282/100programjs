function cekUmur() {
  const tahun = parseInt(document.getElementById("tahun").value);
  const umur = new Date().getFullYear() - tahun;
  document.getElementById("hasil").textContent = "Umur kamu: " + umur + " tahun";
}
