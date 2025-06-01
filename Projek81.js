function cek() {
  const h = document.getElementById("huruf").value.toLowerCase();
  const vokal = 'aiueo'.includes(h);
  document.getElementById("hasil").textContent = vokal ? "Huruf vokal" : "Bukan huruf vokal";
}
