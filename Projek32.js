document.querySelectorAll(".cek").forEach(cb => {
  cb.addEventListener("change", () => {
    const total = document.querySelectorAll(".cek:checked").length;
    document.getElementById("hasil").textContent = `Dipilih: ${total}`;
  });
});
