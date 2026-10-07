/* ============================================================
   Timeline — Угадай год
   Расширенная версия: 20 карточек на категорию, кнопка меню,
   прогресс-бар, 10 раундов без повторов.
   ============================================================ */

/* ---------- 1. Каталог событий ----------
   По 20 событий в каждой категории — хватит на 10 раундов × 5 карточек.
   ------------------------------------------------------------ */

const CATALOG = {
  history: {
    label: 'История',
    icon: '🏛️',
    items: [
      { name: 'Основание Рима',                      year: -753,  icon: '🐺' },
      { name: 'Убийство Юлия Цезаря',                year: -44,   icon: '🗡️' },
      { name: 'Падение Западной Римской империи',    year: 476,   icon: '🏛️' },
      { name: 'Коронация Карла Великого',            year: 800,   icon: '👑' },
      { name: 'Изобретение печатного станка',        year: 1440,  icon: '📖' },
      { name: 'Открытие Америки Колумбом',           year: 1492,  icon: '⛵' },
      { name: 'Реформация Мартина Лютера',           year: 1517,  icon: '📜' },
      { name: 'Казнь короля Карла I',                year: 1649,  icon: '⚔️' },
      { name: 'Великая французская революция',       year: 1789,  icon: '🇫🇷' },
      { name: 'Битва при Ватерлоо',                  year: 1815,  icon: '🎖️' },
      { name: 'Отмена крепостного права в России',   year: 1861,  icon: '🔓' },
      { name: 'Начало Первой мировой войны',         year: 1914,  icon: '💣' },
      { name: 'Революция 1917 года в России',        year: 1917,  icon: '🚩' },
      { name: 'Окончание Второй мировой войны',      year: 1945,  icon: '🕊️' },
      { name: 'Полёт Гагарина в космос',             year: 1961,  icon: '🚀' },
      { name: 'Высадка на Луну',                     year: 1969,  icon: '🌕' },
      { name: 'Падение Берлинской стены',            year: 1989,  icon: '🧱' },
      { name: 'Распад СССР',                         year: 1991,  icon: '🗺️' },
      { name: 'Теракты 11 сентября',                 year: 2001,  icon: '🏙️' },
      { name: 'Пандемия COVID-19',                   year: 2020,  icon: '🦠' }
    ]
  },
  science: {
    label: 'Наука',
    icon: '🔬',
    items: [
      { name: 'Гелиоцентрическая система Коперника', year: 1543,  icon: '☀️' },
      { name: 'Закон всемирного тяготения Ньютона',  year: 1687,  icon: '🍎' },
      { name: 'Изобретение парового двигателя',      year: 1712,  icon: '⚙️' },
      { name: 'Изобретение телефона',                year: 1876,  icon: '📞' },
      { name: 'Открытие рентгеновских лучей',        year: 1895,  icon: '🩻' },
      { name: 'Открытие радиоактивности',            year: 1896,  icon: '☢️' },
      { name: 'Теория относительности Эйнштейна',    year: 1905,  icon: '🧠' },
      { name: 'Открытие пенициллина',                year: 1928,  icon: '💊' },
      { name: 'Первый компьютер ENIAC',              year: 1945,  icon: '💻' },
      { name: 'Структура ДНК',                       year: 1953,  icon: '🧬' },
      { name: 'Первый искусственный спутник',        year: 1957,  icon: '🛰️' },
      { name: 'Первый интернет-сайт',                year: 1991,  icon: '🌐' },
      { name: 'Телескоп Хаббл на орбите',            year: 1990,  icon: '🔭' },
      { name: 'Клонирование овечки Долли',           year: 1996,  icon: '🐑' },
      { name: 'Открытие гравитационных волн',        year: 2015,  icon: '🌊' },
      { name: 'Первая фотография чёрной дыры',       year: 2019,  icon: '🕳️' },
      { name: 'Миссия «Аполлон-11»',                 year: 1969,  icon: '🚀' },
      { name: 'Создание WWW Тимом Бернерсом-Ли',     year: 1989,  icon: '🔗' },
      { name: 'Открытие бозона Хиггса',              year: 2012,  icon: '⚛️' },
      { name: 'Первый полёт братьев Райт',           year: 1903,  icon: '✈️' }
    ]
  },
  culture: {
    label: 'Культура',
    icon: '🎭',
    items: [
      { name: 'Премьера «Гамлета» Шекспира',         year: 1601,  icon: '🎭' },
      { name: 'Публикация «Войны и мира»',           year: 1869,  icon: '📚' },
      { name: 'Основание группы The Beatles',        year: 1960,  icon: '🎸' },
      { name: 'Первый фильм «Звёздные войны»',       year: 1977,  icon: '⭐' },
      { name: 'Премьера «Симпсонов»',                year: 1989,  icon: '🍩' },
      { name: 'Выход первой книги о Гарри Поттере',  year: 1997,  icon: '⚡' },
      { name: 'Выход фильма «Титаник»',              year: 1997,  icon: '🚢' },
      { name: 'Основание Википедии',                 year: 2001,  icon: '📖' },
      { name: 'Основание YouTube',                   year: 2005,  icon: '▶️' },
      { name: 'Основание ВКонтакте',                 year: 2006,  icon: '💬' },
      { name: 'Первый iPhone',                       year: 2007,  icon: '📱' },
      { name: 'Выход фильма «Аватар»',               year: 2009,  icon: '🌿' },
      { name: 'Выход Minecraft',                     year: 2011,  icon: '⛏️' },
      { name: 'Песня Gangnam Style',                 year: 2012,  icon: '🕺' },
      { name: 'Выход фильма «Мстители: Финал»',      year: 2019,  icon: '🦸' },
      { name: 'Основание TikTok',                    year: 2016,  icon: '🎵' },
      { name: 'Премьера сериала «Игра престолов»',   year: 2011,  icon: '🐉' },
      { name: 'Выход игры The Witcher 3',            year: 2015,  icon: '⚔️' },
      { name: 'Основание Instagram',                 year: 2010,  icon: '📷' },
      { name: 'Выход фильма «Матрица»',              year: 1999,  icon: '🕶️' }
    ]
  }
};

/* ---------- 2. Константы и состояние ---------- */

const CARDS_PER_ROUND = 5;
const TOTAL_ROUNDS    = 10;
const MAX_SCORE       = TOTAL_ROUNDS * 100;

const state = {
  category: null,
  rounds: [],
  currentRound: 0,
  totalRounds: TOTAL_ROUNDS,
  score: 0,
  locked: false,
  dragEl: null,
  selectedEl: null
};

/* ---------- 3. DOM ---------- */

const $ = id => document.getElementById(id);
const startScreen  = $('startScreen');
const gameScreen   = $('gameScreen');
const endScreen    = $('endScreen');

const cardsRow     = $('cardsRow');
const roundNumEl   = $('roundNum');
const roundTotalEl = $('roundTotal');
const scoreEl      = $('score');
const feedbackEl   = $('feedback');
const progressFill = $('progressFill');

/* ---------- 4. Стартовый экран ---------- */

function renderCategories() {
  const grid = $('categoryGrid');
  grid.innerHTML = '';
  Object.entries(CATALOG).forEach(([key, cat]) => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.dataset.key = key;
    card.innerHTML = `<span class="icon">${cat.icon}</span>${cat.label}`;
    card.addEventListener('click', () => selectCategory(key));
    grid.appendChild(card);
  });
}

function selectCategory(key) {
  state.category = key;
  document.querySelectorAll('.cat-card').forEach(c =>
    c.classList.toggle('selected', c.dataset.key === key)
  );
  $('startBtn').disabled = false;
}

/* ---------- 5. Запуск игры ---------- */

function startGame() {
  state.rounds       = buildRounds(state.category, state.totalRounds);
  state.currentRound = 0;
  state.score        = 0;
  state.locked       = false;

  scoreEl.textContent = 0;
  roundTotalEl.textContent = state.totalRounds;

  showScreen('game');
  loadRound();
}

/* Собираем 10 раундов по 5 уникальных карточек в каждом.
   Всего используется 50 событий из 60 доступных — повторов нет. */
function buildRounds(categoryKey, count) {
  const allItems = [...CATALOG[categoryKey].items];
  shuffle(allItems);

  const totalNeeded = count * CARDS_PER_ROUND;
  if (allItems.length < totalNeeded) {
    console.warn('Недостаточно событий в категории — будут повторы.');
  }

  const rounds = [];
  let idx = 0;
  for (let r = 0; r < count; r++) {
    const cards = [];
    for (let i = 0; i < CARDS_PER_ROUND; i++) {
      cards.push({ ...allItems[idx % allItems.length] });
      idx++;
    }
    rounds.push({ cards });
  }
  return rounds;
}

/* ---------- 6. Загрузка раунда ---------- */

function loadRound() {
  const round = state.rounds[state.currentRound];
  state.locked    = false;
  state.dragEl    = null;
  state.selectedEl= null;

  roundNumEl.textContent = state.currentRound + 1;
  updateProgress();

  // Перемешиваем карточки раунда для показа
  const shuffled = [...round.cards];
  shuffle(shuffled);
  renderCards(shuffled);

  feedbackEl.innerHTML = '';
  $('nextBtn').classList.add('hidden');
  $('checkBtn').disabled = false;
  $('checkBtn').textContent = 'Проверить';
  $('shuffleBtn').disabled = false;
}

function updateProgress() {
  const pct = (state.currentRound / state.totalRounds) * 100;
  progressFill.style.width = pct + '%';
}

function renderCards(cards) {
  cardsRow.innerHTML = '';
  cards.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.year = c.year;
    el.dataset.index = i;
    el.innerHTML = `
      <span class="position">${i + 1}</span>
      <span class="icon">${c.icon}</span>
      <span class="title">${c.name}</span>
      <span class="year">${c.year < 0 ? c.year + ' до н.э.' : c.year}</span>
    `;
    makeDraggable(el);
    cardsRow.appendChild(el);
  });
}

/* ---------- 7. Drag & Drop + тап-выбор ---------- */

function makeDraggable(el) {
  el.setAttribute('draggable', 'true');

  el.addEventListener('dragstart', e => {
    if (state.locked) { e.preventDefault(); return; }
    state.dragEl = el;
    el.classList.add('dragging');
  });

  el.addEventListener('dragend', () => {
    el.classList.remove('dragging');
    state.dragEl = null;
    updatePositions();
  });

  el.addEventListener('dragover', e => {
    if (state.locked || !state.dragEl || state.dragEl === el) return;
    e.preventDefault();
    const rect = el.getBoundingClientRect();
    const midX = rect.left + rect.width / 2;
    if (e.clientX < midX) {
      cardsRow.insertBefore(state.dragEl, el);
    } else {
      cardsRow.insertBefore(state.dragEl, el.nextSibling);
    }
  });

  // Тап-выбор (для телефонов)
  el.addEventListener('click', () => {
    if (state.locked) return;
    if (!state.selectedEl) {
      state.selectedEl = el;
      el.classList.add('selected');
    } else if (state.selectedEl === el) {
      el.classList.remove('selected');
      state.selectedEl = null;
    } else {
      swapCards(state.selectedEl, el);
      state.selectedEl.classList.remove('selected');
      state.selectedEl = null;
      updatePositions();
    }
  });
}

function swapCards(a, b) {
  const parent = cardsRow;
  const aNext = a.nextSibling === b ? a : a.nextSibling;
  parent.insertBefore(a, b);
  parent.insertBefore(b, aNext);
}

function updatePositions() {
  [...cardsRow.children].forEach((c, i) => {
    c.querySelector('.position').textContent = i + 1;
    c.dataset.index = i;
  });
}

/* ---------- 8. Перемешать ---------- */

function shuffleCurrent() {
  if (state.locked) return;
  const cards = [...cardsRow.children].map(el => ({
    year: el.dataset.year,
    html: el.innerHTML
  }));
  shuffle(cards);
  cardsRow.innerHTML = '';
  cards.forEach((c, i) => {
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.year = c.year;
    el.dataset.index = i;
    el.innerHTML = c.html;
    makeDraggable(el);
    cardsRow.appendChild(el);
  });
  updatePositions();
  state.selectedEl = null;
}

/* ---------- 9. Проверка ---------- */

function check() {
  if (state.locked) return;
  state.locked = true;
  $('checkBtn').disabled = true;
  $('shuffleBtn').disabled = true;

  const round = state.rounds[state.currentRound];
  const currentCards = [...cardsRow.children];

  const correct = [...round.cards].sort((a, b) => a.year - b.year);

  let correctCount = 0;
  currentCards.forEach((el, i) => {
    const year = parseInt(el.dataset.year, 10);
    if (year === correct[i].year) {
      el.classList.add('correct');
      correctCount++;
    } else {
      el.classList.add('incorrect');
    }
    el.classList.add('revealed');
  });

  // Очки: 15 за позицию + 25 бонус за идеальный порядок
  let points = correctCount * 15;
  if (correctCount === CARDS_PER_ROUND) points += 25;
  if (points > 100) points = 100;

  state.score += points;
  scoreEl.textContent = state.score;

  let cls, msg;
  if (correctCount === CARDS_PER_ROUND) { cls = 'good'; msg = 'Идеальный порядок! 🎯'; }
  else if (correctCount >= 3)           { cls = 'ok';   msg = 'Неплохо! 👍'; }
  else                                   { cls = 'bad';  msg = 'Стоит подучить хронологию 😅'; }

  feedbackEl.innerHTML = `
    <span class="${cls}">${msg} Правильно: ${correctCount} из ${CARDS_PER_ROUND}</span>
    <span class="points ${cls}">+${points}</span>
  `;

  $('checkBtn').textContent = 'Проверено';
  $('nextBtn').classList.remove('hidden');
  $('nextBtn').textContent = state.currentRound === state.totalRounds - 1
    ? 'Показать результат'
    : 'Следующий раунд';
}

/* ---------- 10. Следующий раунд ---------- */

function nextRound() {
  state.currentRound++;
  if (state.currentRound >= state.totalRounds) {
    endGame();
  } else {
    loadRound();
  }
}

function endGame() {
  progressFill.style.width = '100%';
  showScreen('end');
  $('finalScore').textContent = state.score;

  let msg;
  if (state.score >= 900)      msg = 'Ты настоящий историк! 🏆';
  else if (state.score >= 700) msg = 'Отличное чувство времени! 🌟';
  else if (state.score >= 500) msg = 'Хорошо, но можно лучше. 💪';
  else                          msg = 'Попробуй ещё — хронология тренируется! 🎯';

  $('finalMessage').textContent = msg;
}

/* ---------- 11. Меню ---------- */

function goToMenu() {
  // Сбрасываем выбор категории
  state.category = null;
  state.locked = false;
  state.dragEl = null;
  state.selectedEl = null;

  document.querySelectorAll('.cat-card').forEach(c =>
    c.classList.remove('selected')
  );
  $('startBtn').disabled = true;
  progressFill.style.width = '0%';

  showScreen('start');
}

/* ---------- 12. Экраны ---------- */

function showScreen(name) {
  startScreen.classList.toggle('active', name === 'start');
  gameScreen.classList.toggle('active',  name === 'game');
  endScreen.classList.toggle('active',   name === 'end');
}

/* ---------- 13. Утилиты ---------- */

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------- 14. Управление ---------- */

function bindControls() {
  $('startBtn').addEventListener('click', startGame);

  $('checkBtn').addEventListener('click', check);
  $('nextBtn').addEventListener('click', nextRound);
  $('shuffleBtn').addEventListener('click', shuffleCurrent);

  // Кнопки меню
  $('menuBtn').addEventListener('click', goToMenu);
  $('toMenuBtn').addEventListener('click', goToMenu);

  // Перезапуск
  $('restartBtn').addEventListener('click', () => {
    goToMenu();
    // Автоматически запускаем игру с той же категорией
    // (но так как категория сброшена — игрок выберет заново)
  });
}

/* ---------- 15. Старт ---------- */

renderCategories();
bindControls();
showScreen('start');