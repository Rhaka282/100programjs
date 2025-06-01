function tebak() {
  const jawaban = Math.floor(Math.random() * 10) + 1;
  const tebakan = parseInt(prompt("Tebak angka antara 1-10:"));
  if (tebakan === jawaban) {
    alert("Benar!");
  } else {
    alert("Salah. Jawaban: " + jawaban);
  }
}
