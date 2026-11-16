// pinyin-forest app.js — 课程学习 + 浏览 + 练习 + 测验
import { shengmu, yunmu, zhengTi, shengDiao, danYunMuTones, kouJue } from './data.js';
import { curriculum } from './curriculum.js';

// --- 音频: 缓存单例, 文件名 lookup ---
const audioCache = new Map();
let currentAudio = null;

function audioUrl(key) {
  return `assets/audio/${key}.mp3`;
}

function playAudio(key) {
  if (!key) return;
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  let a = audioCache.get(key);
  if (!a) {
    a = new Audio(audioUrl(key));
    audioCache.set(key, a);
  }
  currentAudio = a;
  a.play().catch(() => {});
}

// --- 视图切换 ---
function showView(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(view + '-view').classList.add('active');
  // 导航高亮
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const navBtn = document.querySelector(`.nav-btn[data-view="${view}"]`);
  if (navBtn) navBtn.classList.add('active');
}

// --- 课程首页: 单元列表 ---
function renderCurriculumHome() {
  const grid = document.getElementById('curriculum-grid');
  grid.innerHTML = '';
  curriculum.forEach(unit => {
    const card = document.createElement('div');
    card.className = 'unit-card';
    card.style.borderLeftColor = unit.color;
    card.innerHTML = `
      <div class="unit-badge" style="background:${unit.color}">单元 ${unit.id}</div>
      <div class="unit-title">${unit.title}</div>
      <div class="unit-sub">${unit.subtitle}</div>
      <div class="unit-lessons">📖 ${unit.lessons.length} 课</div>`;
    card.addEventListener('click', () => renderUnitDetail(unit));
    grid.appendChild(card);
  });
}

// --- 单元详情: 课时列表 ---
function renderUnitDetail(unit) {
  const grid = document.getElementById('curriculum-grid');
  grid.innerHTML = `
    <div class="unit-detail-header">
      <button class="back-btn" onclick="window.appBack()">← 返回课程</button>
      <div>
        <div class="unit-title" style="color:${unit.color}">${unit.title}</div>
        <div class="unit-sub">${unit.subtitle}</div>
      </div>
    </div>
    <div class="lesson-list">${unit.lessons.map(l => `
      <div class="lesson-item" data-lesson="${l.id}">
        <div class="lesson-num" style="background:${unit.color}">${l.id.replace('u','').replace('l','')}</div>
        <div>
          <div class="lesson-title">${l.title}</div>
          <div class="lesson-goal">${l.goal}</div>
        </div>
        <div class="lesson-actions">
          <button class="mini-btn learn-btn" onclick="window.appLearn('${l.id}')">📖 学</button>
          <button class="mini-btn quiz-btn" onclick="window.appQuiz('${l.id}')">✏️ 测</button>
        </div>
      </div>`).join('')}
    </div>`;
}

// --- 学习视图: 卡片点读 ---
function renderLesson(lesson, unit) {
  const box = document.getElementById('lesson-box');
  const title = document.getElementById('lesson-title');
  const sub = document.getElementById('lesson-sub');
  title.textContent = `${lesson.title}`;
  sub.textContent = `${unit.title} · ${lesson.goal}`;
  box.innerHTML = '';
  lesson.cards.forEach(c => {
    const div = document.createElement('div');
    div.className = 'card study-card';
    div.innerHTML = `<div class="letter">${c.say || c.letter}</div>
      ${c.tip ? `<div class="tip">${c.tip}</div>` : ''}`;
    div.addEventListener('click', () => {
      playAudio(c.audio || c.letter);
      div.classList.remove('pulse'); void div.offsetWidth; div.classList.add('pulse');
    });
    box.appendChild(div);
  });
}

// --- 测验视图 ---
let quizState = null;

function renderQuiz(lesson) {
  const box = document.getElementById('lesson-box');
  const title = document.getElementById('lesson-title');
  const sub = document.getElementById('lesson-sub');
  title.textContent = `测验 · ${lesson.title}`;
  sub.textContent = '听发音，选正确答案';
  const quiz = lesson.quiz || [];
  quizState = { index: 0, score: 0, total: quiz.length, quiz, lesson };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const box = document.getElementById('lesson-box');
  const q = quizState.quiz[quizState.index];
  box.innerHTML = `
    <div class="quiz-progress">第 ${quizState.index + 1}/${quizState.total} 题 · 得分 ${quizState.score}</div>
    <div class="quiz-q">
      <button class="quiz-listen" onclick="window.appPlayAudio('${q.audio}')">🔊 听发音</button>
      <div class="quiz-text">${q.q}</div>
    </div>
    <div class="quiz-options">${q.options.map((opt, i) => `
      <button class="quiz-opt" data-opt="${opt}" onclick="window.appAnswer('${opt}', this)">${opt}</button>`).join('')}
    </div>`;
  // 自动播一次
  playAudio(q.audio);
}

function answerQuiz(opt, el) {
  const q = quizState.quiz[quizState.index];
  const correct = opt === q.answer;
  if (correct) {
    quizState.score++;
    el.classList.add('correct');
  } else {
    el.classList.add('wrong');
    // 高亮正确答案
    document.querySelectorAll('.quiz-opt').forEach(b => {
      if (b.dataset.opt === q.answer) b.classList.add('correct');
    });
  }
  // 禁用所有选项
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  setTimeout(() => {
    quizState.index++;
    if (quizState.index < quizState.total) renderQuizQuestion();
    else renderQuizResult();
  }, 1200);
}

function renderQuizResult() {
  const box = document.getElementById('lesson-box');
  const title = document.getElementById('lesson-title');
  title.textContent = '测验完成！';
  const pct = Math.round(quizState.score / quizState.total * 100);
  const msg = pct === 100 ? '🎉 太棒了！全对！' : pct >= 60 ? '👍 不错，继续加油！' : '💪 再练一次吧！';
  box.innerHTML = `
    <div class="quiz-result">
      <div class="result-score">${quizState.score}/${quizState.total}</div>
      <div class="result-msg">${msg}</div>
      <div class="result-actions">
        <button class="mini-btn" onclick="window.appBack()">← 返回</button>
        <button class="mini-btn learn-btn" onclick="window.appQuiz('${quizState.lesson.id}')">🔄 再测</button>
      </div>
    </div>`;
}

// --- 浏览模式: 原始 6 区块 ---
function renderBrowse() {
  const sg = document.getElementById('shengmu-grid');
  sg.innerHTML = '';
  shengmu.forEach(s => sg.appendChild(makeCard(s.l, s.say, s.tip, s.l)));
  const ym = document.getElementById('yunmu-grid');
  ym.innerHTML = '';
  yunmu.forEach(y => ym.appendChild(makeCard(y.l, y.say, y.tip, y.l)));
  const zt = document.getElementById('zhengti-grid');
  zt.innerHTML = '';
  zhengTi.forEach(z => {
    const group = document.createElement('div');
    group.className = 'tone-group';
    const label = document.createElement('div');
    label.className = 'group-label';
    label.textContent = `${z.syl}（${z.tag}）`;
    group.appendChild(label);
    const row = document.createElement('div');
    row.className = 'tone-row';
    z.tones.forEach(t => row.appendChild(makeToneCard(t.mark, t.audio)));
    group.appendChild(row);
    zt.appendChild(group);
  });
  const sd = document.getElementById('shengdiao-grid');
  sd.innerHTML = '';
  shengDiao.forEach(s => {
    const div = document.createElement('div');
    div.className = 'card tone-card shengdiao-card';
    div.innerHTML = `<div class="letter" style="color:${s.color}">${s.mark}</div><div class="tip">${s.tone}</div>`;
    div.addEventListener('click', () => { playAudio(s.audio); div.classList.remove('pulse'); void div.offsetWidth; div.classList.add('pulse'); });
    sd.appendChild(div);
  });
  const dy = document.getElementById('danyunmu-grid');
  dy.innerHTML = '';
  danYunMuTones.forEach(d => {
    const group = document.createElement('div');
    group.className = 'tone-group';
    const label = document.createElement('div');
    label.className = 'group-label';
    label.textContent = d.syl;
    group.appendChild(label);
    const row = document.createElement('div');
    row.className = 'tone-row';
    d.tones.forEach(t => row.appendChild(makeToneCard(t.mark, t.audio)));
    group.appendChild(row);
    dy.appendChild(group);
  });
  const kj = document.getElementById('koujue-grid');
  kj.innerHTML = '';
  kouJue.forEach((k, i) => {
    const div = document.createElement('div');
    div.className = 'koujue-item';
    div.innerHTML = `<span class="koujue-num">${i + 1}</span>${k}`;
    kj.appendChild(div);
  });
  const total = shengmu.length + yunmu.length + zhengTi.length * 4 + shengDiao.length + danYunMuTones.length * 4;
  document.getElementById('total-count').textContent = total;
}

function makeCard(letter, say, tip, key) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<div class="letter">${say || letter}</div>${tip ? `<div class="tip">${tip}</div>` : ''}`;
  div.addEventListener('click', () => { playAudio(key || letter); div.classList.remove('pulse'); void div.offsetWidth; div.classList.add('pulse'); });
  return div;
}

function makeToneCard(mark, audio) {
  const div = document.createElement('div');
  div.className = 'card tone-card';
  div.innerHTML = `<div class="letter">${mark}</div>`;
  div.addEventListener('click', () => { playAudio(audio); div.classList.remove('pulse'); void div.offsetWidth; div.classList.add('pulse'); });
  return div;
}

// --- 全局 API（供 onclick 使用）---
window.appPlayAudio = playAudio;
window.appBack = () => {
  const box = document.getElementById('lesson-box');
  const title = document.getElementById('lesson-title');
  const sub = document.getElementById('lesson-sub');
  title.textContent = '课程目录';
  sub.textContent = '选择单元开始学习';
  box.innerHTML = '';
  renderCurriculumHome();
};
window.appLearn = (lessonId) => {
  const found = findLesson(lessonId);
  if (found) renderLesson(found.lesson, found.unit);
};
window.appQuiz = (lessonId) => {
  const found = findLesson(lessonId);
  if (found) renderQuiz(found.lesson);
};
window.appAnswer = (opt, el) => answerQuiz(opt, el);

function findLesson(lessonId) {
  for (const unit of curriculum) {
    for (const lesson of unit.lessons) {
      if (lesson.id === lessonId) return { lesson, unit };
    }
  }
  return null;
}

// --- 导航 ---
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const view = btn.dataset.view;
    showView(view);
    if (view === 'curriculum') renderCurriculumHome();
    if (view === 'browse') renderBrowse();
  });
});

// --- 键盘支持 ---
document.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (/^[a-z]$/.test(k)) playAudio(k);
});

// --- 初始化 ---
function init() {
  renderCurriculumHome();
  renderBrowse();
  document.getElementById('audio-count').textContent = 140;
}

document.addEventListener('DOMContentLoaded', init);
