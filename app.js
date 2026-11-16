// pinyin-forest app.js — 渲染 + 音频播放
import { shengmu, yunmu, zhengTi, shengDiao, danYunMuTones, kouJue } from './data.js';

// --- 音频: 缓存单例, 文件名 lookup (不混淆显示文本) ---
const audioCache = new Map();
let currentAudio = null;

function audioUrl(key) {
  // key 已是文件名(不含.mp3), 直接拼路径
  return `assets/audio/${key}.mp3`;
}

function playAudio(key) {
  if (!key) return;
  // 停止当前, 重置
  if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
  let a = audioCache.get(key);
  if (!a) {
    a = new Audio(audioUrl(key));
    audioCache.set(key, a);
  }
  currentAudio = a;
  a.play().catch(() => { /* autoplay blocked, 静默 */ });
}

// --- 卡片渲染 ---
function makeCard(letter, say, tip, key) {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `<div class="letter">${say || letter}</div>
    ${tip ? `<div class="tip">${tip}</div>` : ''}`;
  div.addEventListener('click', () => {
    playAudio(key || letter); // key = 音频文件名
    div.classList.remove('pulse'); void div.offsetWidth; div.classList.add('pulse');
  });
  return div;
}

function makeToneCard(mark, audio) {
  const div = document.createElement('div');
  div.className = 'card tone-card';
  div.innerHTML = `<div class="letter">${mark}</div>`;
  div.addEventListener('click', () => {
    playAudio(audio);
    div.classList.remove('pulse'); void div.offsetWidth; div.classList.add('pulse');
  });
  return div;
}

// --- 各区块渲染 ---
function renderShengmu() {
  const grid = document.getElementById('shengmu-grid');
  shengmu.forEach(s => grid.appendChild(makeCard(s.l, s.say, s.tip, s.l)));
}

function renderYunmu() {
  const grid = document.getElementById('yunmu-grid');
  yunmu.forEach(y => grid.appendChild(makeCard(y.l, y.say, y.tip, y.l)));
}

function renderZhengTi() {
  const grid = document.getElementById('zhengti-grid');
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
    grid.appendChild(group);
  });
}

function renderShengDiao() {
  const grid = document.getElementById('shengdiao-grid');
  shengDiao.forEach(s => {
    const div = document.createElement('div');
    div.className = 'card tone-card shengdiao-card';
    div.innerHTML = `<div class="letter" style="color:${s.color}">${s.mark}</div>
      <div class="tip">${s.tone}</div>`;
    div.addEventListener('click', () => {
      playAudio(s.audio);
      div.classList.remove('pulse'); void div.offsetWidth; div.classList.add('pulse');
    });
    grid.appendChild(div);
  });
}

function renderDanYunMuTones() {
  const grid = document.getElementById('danyunmu-grid');
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
    grid.appendChild(group);
  });
}

function renderKouJue() {
  const grid = document.getElementById('koujue-grid');
  kouJue.forEach((k, i) => {
    const div = document.createElement('div');
    div.className = 'koujue-item';
    div.innerHTML = `<span class="koujue-num">${i + 1}</span>${k}`;
    grid.appendChild(div);
  });
}

// --- 键盘支持 (选拼音) ---
document.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (/^[a-z]$/.test(k)) playAudio(k); // 声母裸名直接播
});

// --- 初始化 ---
function init() {
  renderShengmu();
  renderYunmu();
  renderZhengTi();
  renderShengDiao();
  renderDanYunMuTones();
  renderKouJue();
  // 统计
  const total = shengmu.length + yunmu.length + zhengTi.length * 4 + shengDiao.length + danYunMuTones.length * 4;
  document.getElementById('total-count').textContent = total;
  document.getElementById('audio-count').textContent = document.querySelectorAll('audio').length || 140;
}

document.addEventListener('DOMContentLoaded', init);
