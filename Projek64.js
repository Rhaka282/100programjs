function simpan() {
  const val = document.getElementById("data").value;
  localStorage.setItem("dataku", val);
}
function ambil() {
  const val = localStorage.getItem("dataku");
  document.getElementById("hasil").textContent = "Data: " + (val || "Kosong");
}
