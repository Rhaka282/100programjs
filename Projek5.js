// Array soal quiz
const quizData = [
  {
    question: "Apa ibukota Indonesia?",
    a: "Jakarta",
    b: "Bandung",
    c: "Surabaya",
    d: "Medan",
    correct: "a"
  },
  {
    question: "Siapa presiden pertama Indonesia?",
    a: "Soeharto",
    b: "Joko Widodo",
    c: "Soekarno",
    d: "BJ Habibie",
    correct: "c"
  },
  {
    question: "Berapa jumlah provinsi di Indonesia saat ini?",
    a: "34",
    b: "32",
    c: "38",
    d: "36",
    correct: "a"
  },
  {
    question: "Bendera Indonesia terdiri dari warna...",
    a: "Merah dan Putih",
    b: "Merah dan Biru",
    c: "Merah dan Kuning",
    d: "Merah dan Hijau",
    correct: "a"
  },
  {
    question: "Lambang negara Indonesia adalah...",
    a: "Garuda Pancasila",
    b: "Burung Merak",
    c: "Harimau",
    d: "Komodo",
    correct: "a"
  }
];

// Variabel
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const resultContainer = document.getElementById('result');
const finalScoreEl = document.getElementById('final-score');
const correctAnswersEl = document.getElementById('correct');
const totalQuestionsEl = document.getElementById('total');
const reloadBtn = document.getElementById('reload');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');

let currentQuiz = 0;
let score = 0;
let timeLeft = 60; // 60 detik untuk setiap quiz
let timer;
let shuffledQuestions = [];

// Acak urutan soal
function shuffleQuestions() {
  shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
}

// Memuat quiz
function loadQuiz() {
  deselectAnswers();
  
  const currentQuestion = shuffledQuestions[currentQuiz];
  
  questionEl.innerText = currentQuestion.question;
  a_text.innerText = currentQuestion.a;
  b_text.innerText = currentQuestion.b;
  c_text.innerText = currentQuestion.c;
  d_text.innerText = currentQuestion.d;
  
  // Reset dan mulai timer
  clearInterval(timer);
  timeLeft = 60;
  updateTimerDisplay();
  startTimer();
}

// Memulai timer
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeUp();
    }
  }, 1000);
}

// Update tampilan timer
function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Waktu habis
function handleTimeUp() {
  // Otomatis submit jika waktu habis
  submitAnswer();
}

// Deselect semua jawaban
function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false;
  });
}

// Mendapatkan jawaban yang dipilih
function getSelected() {
  let answer = undefined;
  
  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  
  return answer;
}

// Submit jawaban
function submitAnswer() {
  clearInterval(timer);
  
  const answer = getSelected();
  const currentQuestion = shuffledQuestions[currentQuiz];
  
  if (answer) {
    if (answer === currentQuestion.correct) {
      score += 20; // Tambah 20 poin untuk jawaban benar
      scoreEl.textContent = score;
    }
    
    currentQuiz++;
    
    if (currentQuiz < shuffledQuestions.length) {
      loadQuiz();
    } else {
      showResult();
    }
  } else {
    // Jika tidak memilih jawaban, lanjut ke soal berikutnya
    currentQuiz++;
    
    if (currentQuiz < shuffledQuestions.length) {
      loadQuiz();
    } else {
      showResult();
    }
  }
}

// Tampilkan hasil
function showResult() {
  quiz.style.display = 'none';
  resultContainer.style.display = 'block';
  
  finalScoreEl.textContent = score;
  correctAnswersEl.textContent = score / 20; // Setiap jawaban benar bernilai 20
  totalQuestionsEl.textContent = shuffledQuestions.length;
}

// Event listeners
submitBtn.addEventListener('click', submitAnswer);

reloadBtn.addEventListener('click', () => {
  // Reset semua nilai
  currentQuiz = 0;
  score = 0;
  scoreEl.textContent = '0';
  
  // Acak soal lagi
  shuffleQuestions();
  
  // Tampilkan quiz dan sembunyikan hasil
  quiz.style.display = 'block';
  resultContainer.style.display = 'none';
  
  // Muat quiz baru
  loadQuiz();
});

// Inisialisasi
function init() {
  shuffleQuestions();
  loadQuiz();
}

// Jalankan aplikasi
init();