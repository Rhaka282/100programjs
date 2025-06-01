document.getElementById("semua").addEventListener("change", function () {
  document.querySelectorAll(".cek").forEach(cb => cb.checked = this.checked);
});
