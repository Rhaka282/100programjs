function acak() {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let karakter = charset[Math.floor(Math.random() * charset.length)];
  document.getElementById("hasil").textContent = karakter;
}
