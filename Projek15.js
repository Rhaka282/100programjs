function hitung() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const op = document.getElementById("op").value;
  let hasil;
  switch (op) {
    case '+': hasil = a + b; break;
    case '-': hasil = a - b; break;
    case '*': hasil = a * b; break;
    case '/': hasil = b !== 0 ? a / b : 'Tak terdefinisi'; break;
    default: hasil = 'Operator tidak valid';
  }
  document.getElementById("hasil").textContent = "Hasil: " + hasil;
}
