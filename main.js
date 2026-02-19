/**
 * Lotto Generator Logic with Theme Toggle and Append Feature
 */

const generateBtn = document.getElementById('generate-btn');
const addSetBtn = document.getElementById('add-set-btn');
const themeToggle = document.getElementById('theme-toggle');
const resultsContainer = document.getElementById('lotto-results');

// --- Theme Logic ---

/**
 * Initializes and toggles the application theme
 */
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// --- Lotto Logic ---

/**
 * Generates a set of 6 unique random numbers from 1 to 45
 */
function generateLottoSet() {
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * Returns a CSS class name based on the number range
 */
function getRangeClass(num) {
  if (num <= 10) return 'range-1';
  if (num <= 20) return 'range-2';
  if (num <= 30) return 'range-3';
  if (num <= 40) return 'range-4';
  return 'range-5';
}

/**
 * Appends a single Lotto set to the container
 * @param {boolean} clear - Whether to clear existing sets first
 */
function addOneSet(clear = false) {
  if (clear) {
    resultsContainer.innerHTML = '';
  } else {
    // Remove empty state if it exists
    const emptyState = resultsContainer.querySelector('.empty-state');
    if (emptyState) emptyState.remove();
  }

  const set = generateLottoSet();
  const setDiv = document.createElement('div');
  setDiv.className = 'lotto-set';

  set.forEach(num => {
    const ball = document.createElement('span');
    ball.className = `ball ${getRangeClass(num)}`;
    ball.textContent = num;
    setDiv.appendChild(ball);
  });

  resultsContainer.appendChild(setDiv);
  
  // Scroll to bottom so new set is visible
  resultsContainer.scrollTop = resultsContainer.scrollHeight;
}

/**
 * Resets and generates 5 initial sets
 */
function resetAndGenerateFive() {
  resultsContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    // Small delay for staggered animation effect
    setTimeout(() => {
      addOneSet(false);
    }, i * 50);
  }
}

// --- Event Listeners ---

generateBtn.addEventListener('click', () => {
  resetAndGenerateFive();
  generateBtn.textContent = '다시 추첨하기 (5세트)';
});

addSetBtn.addEventListener('click', () => {
  addOneSet(false);
});

// Initialize
initTheme();
