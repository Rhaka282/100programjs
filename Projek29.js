function cekVokal() {
  const h = document.getElementById("huruf").value.toLowerCase();
  const vokal = ['a', 'i', 'u', 'e', 'o'];
  const hasil = vokal.includes(h) ? "vokal" : "bukan vokal";
  document.getElementById("hasil").textContent = `${h} adalah ${hasil}`;
}
