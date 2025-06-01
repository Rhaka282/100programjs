function tambah() {
  const teks = document.getElementById("item").value;
  if (teks.trim() === "") return;
  const li = document.createElement("li");
  li.textContent = teks;
  document.getElementById("list").appendChild(li);
  document.getElementById("item").value = "";
}
