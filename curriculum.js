// pinyin-forest curriculum.js — 课程数据模型
// 6 单元 12 课，循序渐进。音频 lookup key = 文件名(不含.mp3)，与 data.js/音频目录对齐

// 课程单元：每个单元有 id/标题/副标题/课时列表
// 课时：id/标题/目标/学习卡片(引用声母韵母等)/练习(听音选字)/类型
export const curriculum = [
  {
    id: 1,
    title: "单元一 · 韵母入门",
    subtitle: "认识 6 个单韵母，打好发音基础",
    color: "#88b09a",
    lessons: [
      {
        id: "u1l1",
        title: "第 1 课 · a o e",
        goal: "学会张大嘴巴 a、圆圆嘴巴 o、扁扁嘴巴 e，听音能辨",
        cards: [
          { letter: "a", say: "ā", tip: "张大嘴巴 a a a", audio: "a" },
          { letter: "o", say: "ō", tip: "圆圆嘴巴 o o o", audio: "o" },
          { letter: "e", say: "ē", tip: "扁扁嘴巴 e e e", audio: "e" },
        ],
        quiz: [
          { q: "张大嘴巴，发音是？", audio: "a", options: ["ā", "ō", "ē"], answer: "ā" },
          { q: "圆圆嘴巴，发音是？", audio: "o", options: ["ō", "ā", "ē"], answer: "ō" },
          { q: "扁扁嘴巴，发音是？", audio: "e", options: ["ē", "ō", "ā"], answer: "ē" },
        ],
      },
      {
        id: "u1l2",
        title: "第 2 课 · i u ü",
        goal: "学会牙齿对齐 i、嘴巴突出 u、嘴巴扁圆 ü，注意 ü 的圆唇",
        cards: [
          { letter: "i", say: "ī", tip: "牙齿对齐 i i i", audio: "i" },
          { letter: "u", say: "ū", tip: "嘴巴突出 u u u", audio: "u" },
          { letter: "v", say: "ü", tip: "嘴巴扁圆 ü ü ü", audio: "ü" },
        ],
        quiz: [
          { q: "牙齿对齐，发音是？", audio: "i", options: ["ī", "ū", "ǖ"], answer: "ī" },
          { q: "嘴巴突出，发音是？", audio: "u", options: ["ū", "ī", "ǖ"], answer: "ū" },
          { q: "嘴巴扁圆，发音是？", audio: "ü", options: ["ǖ", "ū", "ī"], answer: "ǖ" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "单元二 · 声母发音",
    subtitle: "23 个声母分组学习，从唇音到翘舌",
    color: "#d4a5a5",
    lessons: [
      {
        id: "u2l1",
        title: "第 3 课 · 唇音 b p m f",
        goal: "学会双唇音 b p m，唇齿音 f",
        cards: [
          { letter: "b", say: "bō", tip: "一个菠萝", audio: "b" },
          { letter: "p", say: "pō", tip: "一个山坡", audio: "p" },
          { letter: "m", say: "mō", tip: "一扇门", audio: "m" },
          { letter: "f", say: "fō", tip: "一尊佛", audio: "f" },
        ],
        quiz: [
          { q: "菠萝的声母是？", audio: "b", options: ["b", "p", "m"], answer: "b" },
          { q: "山坡的声母是？", audio: "p", options: ["p", "b", "f"], answer: "p" },
          { q: "门的声母是？", audio: "m", options: ["m", "f", "b"], answer: "m" },
        ],
      },
      {
        id: "u2l2",
        title: "第 4 课 · 舌尖音 d t n l",
        goal: "学会舌尖中音 d t n l",
        cards: [
          { letter: "d", say: "dē", tip: "一匹马", audio: "d" },
          { letter: "t", say: "tē", tip: "一把伞", audio: "t" },
          { letter: "n", say: "nē", tip: "一个门洞", audio: "n" },
          { letter: "l", say: "lē", tip: "一根棍子", audio: "l" },
        ],
        quiz: [
          { q: "马的声母是？", audio: "d", options: ["d", "t", "n"], answer: "d" },
          { q: "伞的声母是？", audio: "t", options: ["t", "d", "l"], answer: "t" },
          { q: "门洞的声母是？", audio: "n", options: ["n", "l", "d"], answer: "n" },
        ],
      },
      {
        id: "u2l3",
        title: "第 5 课 · 舌根音 g k h",
        goal: "学会舌根音 g k h",
        cards: [
          { letter: "g", say: "gē", tip: "一只鸽子", audio: "g" },
          { letter: "k", say: "kē", tip: "一只蝌蚪", audio: "k" },
          { letter: "h", say: "hē", tip: "一把椅子", audio: "h" },
        ],
        quiz: [
          { q: "鸽子的声母是？", audio: "g", options: ["g", "k", "h"], answer: "g" },
          { q: "蝌蚪的声母是？", audio: "k", options: ["k", "g", "h"], answer: "k" },
          { q: "椅子的声母是？", audio: "h", options: ["h", "k", "g"], answer: "h" },
        ],
      },
      {
        id: "u2l4",
        title: "第 6 课 · 舌面音 j q x",
        goal: "学会舌面音 j q x",
        cards: [
          { letter: "j", say: "jī", tip: "一只鸡", audio: "j" },
          { letter: "q", say: "qī", tip: "一面旗子", audio: "q" },
          { letter: "x", say: "xī", tip: "一个西瓜", audio: "x" },
        ],
        quiz: [
          { q: "鸡的声母是？", audio: "j", options: ["j", "q", "x"], answer: "j" },
          { q: "旗子的声母是？", audio: "q", options: ["q", "j", "x"], answer: "q" },
          { q: "西瓜的声母是？", audio: "x", options: ["x", "j", "q"], answer: "x" },
        ],
      },
      {
        id: "u2l5",
        title: "第 7 课 · 翘舌 zh ch sh r",
        goal: "学会翘舌音 zh ch sh r，舌尖卷起",
        cards: [
          { letter: "zh", say: "zhī", tip: "一只蜘蛛", audio: "zh" },
          { letter: "ch", say: "chī", tip: "一只猫", audio: "ch" },
          { letter: "sh", say: "shī", tip: "一头狮子", audio: "sh" },
          { letter: "r", say: "rī", tip: "一轮太阳", audio: "r" },
        ],
        quiz: [
          { q: "蜘蛛的声母是？", audio: "zh", options: ["zh", "ch", "sh"], answer: "zh" },
          { q: "狮子的声母是？", audio: "sh", options: ["sh", "zh", "r"], answer: "sh" },
          { q: "太阳的声母是？", audio: "r", options: ["r", "ch", "sh"], answer: "r" },
        ],
      },
      {
        id: "u2l6",
        title: "第 8 课 · 平舌 z c s + y w",
        goal: "学会平舌音 z c s，以及整体认读 y w",
        cards: [
          { letter: "z", say: "zī", tip: "一只刺猬", audio: "z" },
          { letter: "c", say: "cī", tip: "一只刺", audio: "c" },
          { letter: "s", say: "sī", tip: "一条蚕", audio: "s" },
          { letter: "y", say: "yī", tip: "一棵树", audio: "y" },
          { letter: "w", say: "wū", tip: "一只乌鸦", audio: "w" },
        ],
        quiz: [
          { q: "刺猬的声母是？", audio: "z", options: ["z", "c", "s"], answer: "z" },
          { q: "刺的声母是？", audio: "c", options: ["c", "z", "s"], answer: "c" },
          { q: "蚕的声母是？", audio: "s", options: ["s", "c", "z"], answer: "s" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "单元三 · 复韵母",
    subtitle: "双韵母与前鼻韵母，学会组合发音",
    color: "#9bb0c4",
    lessons: [
      {
        id: "u3l1",
        title: "第 9 课 · 双韵母 ai ei ui ao ou iu",
        goal: "学会 6 个双韵母，注意口型滑动",
        cards: [
          { letter: "ai", say: "āi", tip: "挨在一起 ai ai ai", audio: "ai" },
          { letter: "ei", say: "ēi", tip: "用力拉车 ei ei ei", audio: "ei" },
          { letter: "ui", say: "uī", tip: "围巾 ui ui ui", audio: "ui" },
          { letter: "ao", say: "āo", tip: "棉袄 ao ao ao", audio: "ao" },
          { letter: "ou", say: "ōu", tip: "海鸥 ou ou ou", audio: "ou" },
          { letter: "iu", say: "iū", tip: "邮票 iu iu iu", audio: "iu" },
        ],
        quiz: [
          { q: "挨在一起的韵母是？", audio: "ai", options: ["ai", "ei", "ui"], answer: "ai" },
          { q: "棉袄的韵母是？", audio: "ao", options: ["ao", "ou", "ai"], answer: "ao" },
          { q: "海鸥的韵母是？", audio: "ou", options: ["ou", "iu", "ao"], answer: "ou" },
        ],
      },
      {
        id: "u3l2",
        title: "第 10 课 · ie üe er",
        goal: "学会 ie üe er，注意 üe 的圆唇",
        cards: [
          { letter: "ie", say: "iē", tip: "树叶 ie ie ie", audio: "ie" },
          { letter: "ve", say: "üe", tip: "月亮 üe üe üe", audio: "üe" },
          { letter: "er", say: "ēr", tip: "耳朵 er er er", audio: "er" },
        ],
        quiz: [
          { q: "树叶的韵母是？", audio: "ie", options: ["ie", "üe", "er"], answer: "ie" },
          { q: "月亮的韵母是？", audio: "üe", options: ["üe", "ie", "er"], answer: "üe" },
          { q: "耳朵的韵母是？", audio: "er", options: ["er", "ie", "üe"], answer: "er" },
        ],
      },
      {
        id: "u3l3",
        title: "第 11 课 · 前鼻韵母 an en in un ün",
        goal: "学会 5 个前鼻韵母，收尾 n 音",
        cards: [
          { letter: "an", say: "ān", tip: "天安门 an an an", audio: "an" },
          { letter: "en", say: "ēn", tip: "摁门铃 en en en", audio: "en" },
          { letter: "in", say: "īn", tip: "树荫 in in in", audio: "in" },
          { letter: "un", say: "ūn", tip: "白云 un un un", audio: "un" },
          { letter: "vn", say: "ün", tip: "一群 ün ün ün", audio: "ün" },
        ],
        quiz: [
          { q: "天安门的韵母是？", audio: "an", options: ["an", "en", "in"], answer: "an" },
          { q: "树荫的韵母是？", audio: "in", options: ["in", "un", "en"], answer: "in" },
          { q: "一群的韵母是？", audio: "ün", options: ["ün", "un", "an"], answer: "ün" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "单元四 · 鼻韵母",
    subtitle: "后鼻韵母 ang eng ing ong",
    color: "#c9a86c",
    lessons: [
      {
        id: "u4l1",
        title: "第 12 课 · 后鼻韵母 ang eng ing ong",
        goal: "学会 4 个后鼻韵母，收尾 ng 音，与前鼻韵母区分",
        cards: [
          { letter: "ang", say: "āng", tip: "山羊 ang ang ang", audio: "ang" },
          { letter: "eng", say: "ēng", tip: "台灯 eng eng eng", audio: "eng" },
          { letter: "ing", say: "īng", tip: "老鹰 ing ing ing", audio: "ing" },
          { letter: "ong", say: "ōng", tip: "闹钟 ong ong ong", audio: "ong" },
        ],
        quiz: [
          { q: "山羊的韵母是？", audio: "ang", options: ["ang", "eng", "ong"], answer: "ang" },
          { q: "老鹰的韵母是？", audio: "ing", options: ["ing", "eng", "ang"], answer: "ing" },
          { q: "闹钟的韵母是？", audio: "ong", options: ["ong", "ang", "ing"], answer: "ong" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "单元五 · 声调进阶",
    subtitle: "四声调值 + 单韵母四声，听辨声调",
    color: "#a88bc9",
    lessons: [
      {
        id: "u5l1",
        title: "第 13 课 · 四声调值",
        goal: "一声平、二声扬、三声拐、四声降，用 ma 练五声",
        cards: [
          { letter: "mā", say: "mā", tip: "一声平又平", audio: "ma1" },
          { letter: "má", say: "má", tip: "二声往上扬", audio: "ma2" },
          { letter: "mǎ", say: "mǎ", tip: "三声拐个弯", audio: "ma3" },
          { letter: "mà", say: "mà", tip: "四声往下降", audio: "ma4" },
          { letter: "ma", say: "ma", tip: "轻声", audio: "ma0" },
        ],
        quiz: [
          { q: "一声平又平是？", audio: "ma1", options: ["mā", "má", "mǎ"], answer: "mā" },
          { q: "四声往下降是？", audio: "ma4", options: ["mà", "mā", "mǎ"], answer: "mà" },
          { q: "三声拐个弯是？", audio: "ma3", options: ["mǎ", "mā", "má"], answer: "mǎ" },
        ],
      },
      {
        id: "u5l2",
        title: "第 14 课 · 单韵母四声",
        goal: "a o e i u ü 各四声，听声辨调",
        cards: [
          { letter: "ā", say: "ā", tip: "一声", audio: "a1" },
          { letter: "á", say: "á", tip: "二声", audio: "a2" },
          { letter: "ǎ", say: "ǎ", tip: "三声", audio: "a3" },
          { letter: "à", say: "à", tip: "四声", audio: "a4" },
        ],
        quiz: [
          { q: "ā 是一声，哪个是？", audio: "a1", options: ["ā", "á", "ǎ"], answer: "ā" },
          { q: "à 是四声，哪个是？", audio: "a4", options: ["à", "ā", "á"], answer: "à" },
          { q: "á 是二声，哪个是？", audio: "a2", options: ["á", "ǎ", "à"], answer: "á" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "单元六 · 整体认读",
    subtitle: "16 个整体认读音节，直接读不拼",
    color: "#e88b8b",
    lessons: [
      {
        id: "u6l1",
        title: "第 15 课 · 翘舌组整体认读",
        goal: "zhi chi shi ri，直接读不拼",
        cards: [
          { letter: "zhī", say: "zhī", tip: "翘舌 zhi", audio: "zhi1" },
          { letter: "chī", say: "chī", tip: "翘舌 chi", audio: "chi1" },
          { letter: "shī", say: "shī", tip: "翘舌 shi", audio: "shi1" },
          { letter: "rī", say: "rī", tip: "翘舌 ri", audio: "ri1" },
        ],
        quiz: [
          { q: "zhī 怎么读？", audio: "zhi1", options: ["zhī", "chī", "shī"], answer: "zhī" },
          { q: "shī 怎么读？", audio: "shi1", options: ["shī", "zhī", "rī"], answer: "shī" },
          { q: "rī 怎么读？", audio: "ri1", options: ["rī", "chī", "shī"], answer: "rī" },
        ],
      },
      {
        id: "u6l2",
        title: "第 16 课 · 平舌组整体认读",
        goal: "zi ci si，直接读不拼",
        cards: [
          { letter: "zī", say: "zī", tip: "平舌 zi", audio: "zi1" },
          { letter: "cī", say: "cī", tip: "平舌 ci", audio: "ci1" },
          { letter: "sī", say: "sī", tip: "平舌 si", audio: "si1" },
        ],
        quiz: [
          { q: "zī 怎么读？", audio: "zi1", options: ["zī", "cī", "sī"], answer: "zī" },
          { q: "cī 怎么读？", audio: "ci1", options: ["cī", "zī", "sī"], answer: "cī" },
          { q: "sī 怎么读？", audio: "si1", options: ["sī", "zī", "cī"], answer: "sī" },
        ],
      },
      {
        id: "u6l3",
        title: "第 17 课 · y 开头整体认读",
        goal: "yi wu yu ye yue yuan yin yun ying",
        cards: [
          { letter: "yī", say: "yī", tip: "yi 衣服", audio: "yi1" },
          { letter: "wū", say: "wū", tip: "wu 乌鸦", audio: "wu1" },
          { letter: "yū", say: "yū", tip: "yu 鱼", audio: "yu1" },
          { letter: "yuē", say: "yuē", tip: "yue 月亮", audio: "yue1" },
          { letter: "yīn", say: "yīn", tip: "yin 声音", audio: "yin1" },
          { letter: "yīng", say: "yīng", tip: "ying 老鹰", audio: "ying1" },
        ],
        quiz: [
          { q: "衣服的认读音节是？", audio: "yi1", options: ["yī", "wū", "yū"], answer: "yī" },
          { q: "乌鸦的认读音节是？", audio: "wu1", options: ["wū", "yī", "yū"], answer: "wū" },
          { q: "鱼的认读音节是？", audio: "yu1", options: ["yū", "yī", "wū"], answer: "yū" },
        ],
      },
    ],
  },
];
