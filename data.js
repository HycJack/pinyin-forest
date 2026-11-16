// pinyin-forest data.js — 拼音数据模型
// 音频 lookup key = 文件名(不含.mp3)，与 /root/pinyin-forest/assets/audio/ 对齐
// 规则: ü→v (文件名), 声调用数字后缀 (a1..a4, zhi1..zhi4), 声母/韵母用裸名 (b, zh)

// --- 声母 (23个, 裸字母音频 b.mp3..w.mp3) ---
export const shengmu = [
  { l: "b", tip: "一个菠萝", say: "bō" },
  { l: "p", tip: "一个山坡", say: "pō" },
  { l: "m", tip: "一扇门", say: "mō" },
  { l: "f", tip: "一尊佛", say: "fō" },
  { l: "d", tip: "一匹马", say: "dē" },
  { l: "t", tip: "一把伞", say: "tē" },
  { l: "n", tip: "一个门洞", say: "nē" },
  { l: "l", tip: "一根棍子", say: "lē" },
  { l: "g", tip: "一只鸽子", say: "gē" },
  { l: "k", tip: "一只蝌蚪", say: "kē" },
  { l: "h", tip: "一把椅子", say: "hē" },
  { l: "j", tip: "一只鸡", say: "jī" },
  { l: "q", tip: "一面旗子", say: "qī" },
  { l: "x", tip: "一个西瓜", say: "xī" },
  { l: "zh", tip: "一只蜘蛛", say: "zhī" },
  { l: "ch", tip: "一只猫", say: "chī" },
  { l: "sh", tip: "一头狮子", say: "shī" },
  { l: "r", tip: "一轮太阳", say: "rī" },
  { l: "z", tip: "一只刺猬", say: "zī" },
  { l: "c", tip: "一只刺", say: "cī" },
  { l: "s", tip: "一条蚕", say: "sī" },
  { l: "y", tip: "一棵树", say: "yī" },
  { l: "w", tip: "一只乌鸦", say: "wū" },
];

// --- 韵母 (24个, 裸字母音频, ü→v) ---
export const yunmu = [
  { l: "a", say: "ā", tip: "张大嘴巴 a a a" },
  { l: "o", say: "ō", tip: "圆圆嘴巴 o o o" },
  { l: "e", say: "ē", tip: "扁扁嘴巴 e e e" },
  { l: "i", say: "ī", tip: "牙齿对齐 i i i" },
  { l: "u", say: "ū", tip: "嘴巴突出 u u u" },
  { l: "v", say: "ü", tip: "嘴巴扁圆 ü ü ü", audio: "ü" },
  { l: "ai", say: "āi", tip: "挨在一起 ai ai ai" },
  { l: "ei", say: "ēi", tip: "用力拉车 ei ei ei" },
  { l: "ui", say: "uī", tip: "围巾 ui ui ui" },
  { l: "ao", say: "āo", tip: "棉袄 ao ao ao" },
  { l: "ou", say: "ōu", tip: "海鸥 ou ou ou" },
  { l: "iu", say: "iū", tip: "邮票 iu iu iu" },
  { l: "ie", say: "iē", tip: "树叶 ie ie ie" },
  { l: "ve", say: "üe", tip: "月亮 üe üe üe", audio: "üe" },
  { l: "er", say: "ēr", tip: "耳朵 er er er" },
  { l: "an", say: "ān", tip: "天安门 an an an" },
  { l: "en", say: "ēn", tip: "摁门铃 en en en" },
  { l: "in", say: "īn", tip: "树荫 in in in" },
  { l: "un", say: "ūn", tip: "白云 un un un" },
  { l: "vn", say: "ün", tip: "一群 ün ün ün", audio: "ün" },
  { l: "ang", say: "āng", tip: "山羊 ang ang ang" },
  { l: "eng", say: "ēng", tip: "台灯 eng eng eng" },
  { l: "ing", say: "īng", tip: "老鹰 ing ing ing" },
  { l: "ong", say: "ōng", tip: "闹钟 ong ong ong" },
];

// --- 整体认读音节 (16个 × 4声调, 音频 zhi1..ying4) ---
export const zhengTi = [
  { syl: "zhi", tag: "翘舌组", tones: [
    { tone: 1, mark: "zhī", audio: "zhi1" }, { tone: 2, mark: "zhí", audio: "zhi2" },
    { tone: 3, mark: "zhǐ", audio: "zhi3" }, { tone: 4, mark: "zhì", audio: "zhi4" }]},
  { syl: "chi", tag: "翘舌组", tones: [
    { tone: 1, mark: "chī", audio: "chi1" }, { tone: 2, mark: "chí", audio: "chi2" },
    { tone: 3, mark: "chǐ", audio: "chi3" }, { tone: 4, mark: "chì", audio: "chi4" }]},
  { syl: "shi", tag: "翘舌组", tones: [
    { tone: 1, mark: "shī", audio: "shi1" }, { tone: 2, mark: "shí", audio: "shi2" },
    { tone: 3, mark: "shǐ", audio: "shi3" }, { tone: 4, mark: "shì", audio: "shi4" }]},
  { syl: "ri", tag: "翘舌组", tones: [
    { tone: 1, mark: "rī", audio: "ri1" }, { tone: 2, mark: "rí", audio: "ri2" },
    { tone: 3, mark: "rǐ", audio: "ri3" }, { tone: 4, mark: "rì", audio: "ri4" }]},
  { syl: "zi", tag: "平舌组", tones: [
    { tone: 1, mark: "zī", audio: "zi1" }, { tone: 2, mark: "zí", audio: "zi2" },
    { tone: 3, mark: "zǐ", audio: "zi3" }, { tone: 4, mark: "zì", audio: "zi4" }]},
  { syl: "ci", tag: "平舌组", tones: [
    { tone: 1, mark: "cī", audio: "ci1" }, { tone: 2, mark: "cí", audio: "ci2" },
    { tone: 3, mark: "cǐ", audio: "ci3" }, { tone: 4, mark: "cì", audio: "ci4" }]},
  { syl: "si", tag: "平舌组", tones: [
    { tone: 1, mark: "sī", audio: "si1" }, { tone: 2, mark: "sí", audio: "si2" },
    { tone: 3, mark: "sǐ", audio: "si3" }, { tone: 4, mark: "sì", audio: "si4" }]},
  { syl: "yi", tag: "单韵母组", tones: [
    { tone: 1, mark: "yī", audio: "yi1" }, { tone: 2, mark: "yí", audio: "yi2" },
    { tone: 3, mark: "yǐ", audio: "yi3" }, { tone: 4, mark: "yì", audio: "yi4" }]},
  { syl: "wu", tag: "单韵母组", tones: [
    { tone: 1, mark: "wū", audio: "wu1" }, { tone: 2, mark: "wú", audio: "wu2" },
    { tone: 3, mark: "wǔ", audio: "wu3" }, { tone: 4, mark: "wù", audio: "wu4" }]},
  { syl: "yu", tag: "单韵母组", tones: [
    { tone: 1, mark: "yū", audio: "yu1" }, { tone: 2, mark: "yú", audio: "yu2" },
    { tone: 3, mark: "yǔ", audio: "yu3" }, { tone: 4, mark: "yù", audio: "yu4" }]},
  { syl: "ye", tag: "韵母组", tones: [
    { tone: 1, mark: "yē", audio: "ye1" }, { tone: 2, mark: "yé", audio: "ye2" },
    { tone: 3, mark: "yě", audio: "ye3" }, { tone: 4, mark: "yè", audio: "ye4" }]},
  { syl: "yue", tag: "韵母组", tones: [
    { tone: 1, mark: "yuē", audio: "yue1" }, { tone: 2, mark: "yué", audio: "yue2" },
    { tone: 3, mark: "yuě", audio: "yue3" }, { tone: 4, mark: "yuè", audio: "yue4" }]},
  { syl: "yuan", tag: "韵母组", tones: [
    { tone: 1, mark: "yuān", audio: "yuan1" }, { tone: 2, mark: "yuán", audio: "yuan2" },
    { tone: 3, mark: "yuǎn", audio: "yuan3" }, { tone: 4, mark: "yuàn", audio: "yuan4" }]},
  { syl: "yin", tag: "韵母组", tones: [
    { tone: 1, mark: "yīn", audio: "yin1" }, { tone: 2, mark: "yín", audio: "yin2" },
    { tone: 3, mark: "yǐn", audio: "yin3" }, { tone: 4, mark: "yìn", audio: "yin4" }]},
  { syl: "yun", tag: "韵母组", tones: [
    { tone: 1, mark: "yūn", audio: "yun1" }, { tone: 2, mark: "yún", audio: "yun2" },
    { tone: 3, mark: "yǔn", audio: "yun3" }, { tone: 4, mark: "yùn", audio: "yun4" }]},
  { syl: "ying", tag: "韵母组", tones: [
    { tone: 1, mark: "yīng", audio: "ying1" }, { tone: 2, mark: "yíng", audio: "ying2" },
    { tone: 3, mark: "yǐng", audio: "ying3" }, { tone: 4, mark: "yìng", audio: "ying4" }]},
];

// --- 单韵母声调演示 (ma 5声调, 音频 ma0..ma4) ---
export const shengDiao = [
  { mark: "ma", tone: "轻声", audio: "ma0", color: "#9bb0c4" },
  { mark: "mā", tone: "一声", audio: "ma1", color: "#88b09a" },
  { mark: "má", tone: "二声", audio: "ma2", color: "#d4a5a5" },
  { mark: "mǎ", tone: "三声", audio: "ma3", color: "#c9a86c" },
  { mark: "mà", tone: "四声", audio: "ma4", color: "#a88bc9" },
];

// --- 单韵母 × 4声调 (音频 a1..v4) ---
export const danYunMuTones = [
  { syl: "a", tones: [
    { tone: 1, mark: "ā", audio: "a1" }, { tone: 2, mark: "á", audio: "a2" },
    { tone: 3, mark: "ǎ", audio: "a3" }, { tone: 4, mark: "à", audio: "a4" }]},
  { syl: "o", tones: [
    { tone: 1, mark: "ō", audio: "o1" }, { tone: 2, mark: "ó", audio: "o2" },
    { tone: 3, mark: "ǒ", audio: "o3" }, { tone: 4, mark: "ò", audio: "o4" }]},
  { syl: "e", tones: [
    { tone: 1, mark: "ē", audio: "e1" }, { tone: 2, mark: "é", audio: "e2" },
    { tone: 3, mark: "ě", audio: "e3" }, { tone: 4, mark: "è", audio: "e4" }]},
  { syl: "i", tones: [
    { tone: 1, mark: "ī", audio: "i1" }, { tone: 2, mark: "í", audio: "i2" },
    { tone: 3, mark: "ǐ", audio: "i3" }, { tone: 4, mark: "ì", audio: "i4" }]},
  { syl: "u", tones: [
    { tone: 1, mark: "ū", audio: "u1" }, { tone: 2, mark: "ú", audio: "u2" },
    { tone: 3, mark: "ǔ", audio: "u3" }, { tone: 4, mark: "ù", audio: "u4" }]},
  { syl: "v", tones: [
    { tone: 1, mark: "ǖ", audio: "v1" }, { tone: 2, mark: "ǘ", audio: "v2" },
    { tone: 3, mark: "ǚ", audio: "v3" }, { tone: 4, mark: "ǜ", audio: "v4" }]},
];

// --- 声调口诀 (显示用) ---
export const kouJue = [
  "一声平又平（ā ō ē）",
  "二声往上扬（á ó é）",
  "三声拐个弯（ǎ ǒ ě）",
  "四声往下降（à ò è）",
];
