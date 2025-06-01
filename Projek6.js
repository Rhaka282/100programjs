// Variabel game
const board = document.getElementById('board');
const status = document.getElementById('status');
const resetBtn = document.getElementById('reset-btn');
const difficultySelect = document.getElementById('difficulty');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let difficulty = 'medium';

// Kombinasi pemenang
const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // baris
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // kolom
  [0, 4, 8], [2, 4, 6]             // diagonal
];

// Inisialisasi papan
function initializeBoard() {
  board.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('data-index', i);
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
  }
}

// Handle klik sel
function handleCellClick(e) {
  const cellIndex = parseInt(e.target.getAttribute('data-index'));
  
  // Validasi move
  if (gameBoard[cellIndex] !== '' || !gameActive) return;
  
  // Update board
  updateBoard(cellIndex, currentPlayer);
  
  // Cek hasil
  checkResult();
  
  // Giliran AI jika game masih aktif
  if (gameActive && currentPlayer === 'O') {
    setTimeout(makeAIMove, 500);
  }
}

// Update board
function updateBoard(index, player) {
  gameBoard[index] = player;
  const cell = document.querySelector(`[data-index="${index}"]`);
  cell.textContent = player;
  cell.classList.add(player.toLowerCase());
}

// Ganti pemain
function changePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  status.textContent = `Giliran: ${currentPlayer} ${currentPlayer === 'X' ? '(Anda)' : '(Komputer)'}`;
}

// Cek hasil
function checkResult() {
  let roundWon = false;
  
  // Cek semua kondisi menang
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      roundWon = true;
      
      // Highlight sel yang menang
      document.querySelector(`[data-index="${a}"]`).classList.add('winning-cell');
      document.querySelector(`[data-index="${b}"]`).classList.add('winning-cell');
      document.querySelector(`[data-index="${c}"]`).classList.add('winning-cell');
      break;
    }
  }
  
  // Jika ada pemenang
  if (roundWon) {
    status.textContent = `Pemenang: ${currentPlayer} ${currentPlayer === 'X' ? '(Anda)' : '(Komputer)'}`;
    gameActive = false;
    return;
  }
  
  // Cek seri
  if (!gameBoard.includes('')) {
    status.textContent = 'Game Seri!';
    gameActive = false;
    return;
  }
  
  // Ganti pemain jika belum ada pemenang
  changePlayer();
}

// AI Move
function makeAIMove() {
  if (!gameActive) return;
  
  let move;
  
  switch (difficulty) {
    case 'easy':
      move = getRandomMove();
      break;
    case 'medium':
      move = getMediumMove();
      break;
    case 'hard':
      move = getBestMove();
      break;
    default:
      move = getMediumMove();
  }
  
  if (move !== undefined) {
    updateBoard(move, 'O');
    checkResult();
  }
}

// AI Easy - Random move
function getRandomMove() {
  const availableMoves = gameBoard.map((cell, index) => cell === '' ? index : null).filter(val => val !== null);
  if (availableMoves.length === 0) return;
  const randomIndex = Math.floor(Math.random() * availableMoves.length);
  return availableMoves[randomIndex];
}

// AI Medium - Mencoba menang atau memblokir
function getMediumMove() {
  // Cari move yang bisa menang
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameBoard[a] === 'O' && gameBoard[b] === 'O' && gameBoard[c] === '') return c;
    if (gameBoard[a] === 'O' && gameBoard[c] === 'O' && gameBoard[b] === '') return b;
    if (gameBoard[b] === 'O' && gameBoard[c] === 'O' && gameBoard[a] === '') return a;
  }
  
  // Blokir pemain jika bisa menang
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameBoard[a] === 'X' && gameBoard[b] === 'X' && gameBoard[c] === '') return c;
    if (gameBoard[a] === 'X' && gameBoard[c] === 'X' && gameBoard[b] === '') return b;
    if (gameBoard[b] === 'X' && gameBoard[c] === 'X' && gameBoard[a] === '') return a;
  }
  
  // Jika tidak ada, random
  return getRandomMove();
}

// AI Hard - Minimax algorithm
function getBestMove() {
  // Base cases
  if (!gameBoard.includes('')) return;
  
  // Jika AI bisa menang di move berikutnya
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      gameBoard[i] = 'O';
      if (checkWinner(gameBoard) === 'O') {
        gameBoard[i] = '';
        return i;
      }
      gameBoard[i] = '';
    }
  }
  
  // Jika pemain bisa menang di move berikutnya, blokir
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      gameBoard[i] = 'X';
      if (checkWinner(gameBoard) === 'X') {
        gameBoard[i] = '';
        return i;
      }
      gameBoard[i] = '';
    }
  }
  
  // Coba dapatkan posisi tengah jika tersedia
  if (gameBoard[4] === '') return 4;
  
  // Jika tidak, pilih move terbaik dengan minimax
  let bestScore = -Infinity;
  let bestMove;
  
  for (let i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i] === '') {
      gameBoard[i] = 'O';
      let score = minimax(gameBoard, 0, false);
      gameBoard[i] = '';
      
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  
  return bestMove;
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {
  const winner = checkWinner(board);
  
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (!board.includes('')) return 0;
  
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'O';
        let score = minimax(board, depth + 1, false);
        board[i] = '';
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') {
        board[i] = 'X';
        let score = minimax(board, depth + 1, true);
        board[i] = '';
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

// Cek pemenang dari board state
function checkWinner(board) {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

// Reset game
function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  status.textContent = `Giliran: ${currentPlayer} (Anda)`;
  initializeBoard();
}

// Event listeners
resetBtn.addEventListener('click', resetGame);
difficultySelect.addEventListener('change', (e) => {
  difficulty = e.target.value;
  resetGame();
});

// Mulai game
initializeBoard();