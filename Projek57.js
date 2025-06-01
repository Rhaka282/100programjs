function tampilkan() {
  const angka = parseInt(document.getElementById("bulan").value);
  const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
                 "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  document.getElementById("hasil").textContent =
    angka >= 1 && angka <= 12 ? bulan[angka - 1] : "Bulan tidak valid";
}
