function cek() {
  const kata = document.getElementById("teks").value.toLowerCase();
  const blacklist = ["bodoh", "jelek", "malas","anjing","goblok"];
  const ada = blacklist.some(k => kata.includes(k));
  document.getElementById("hasil").textContent = ada ? "Terdapat kata kasar!" : "Kalimat aman.";
}
