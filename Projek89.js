function hitungUmur() {
  const lahir = new Date(document.getElementById("lahir").value);
  const hariIni = new Date();
  let umur = hariIni.getFullYear() - lahir.getFullYear();
  const belumUltah = hariIni < new Date(hariIni.getFullYear(), lahir.getMonth(), lahir.getDate());
  if (belumUltah) umur--;
  document.getElementById("hasil").textContent = "Umur Anda: " + umur + " tahun";
}
