class TreeNode {
  constructor(value, parent) {
    this.value = value;
    this.children = [];
    this.parent = parent;
  }

  addChild(value) {
    this.children.push(new TreeNode(this.value + value, this));
  }

  addChildren(values) {
    const t = this;
    values.map((value) =>
      this.children.push(new TreeNode(this.value + value, t))
    );
  }

  addSiblings(values) {
    this.parent.addChildren(values);
  }

  addSibling(value) {
    this.parent.addChild(value, this);
  }
}

const ABZ_TO_ARB = [
  // S = start, M = 'middle', E = 'end'
  { rule: "S", l: "aa", a: ["ا"] },
  { rule: "M", l: "aa", a: ["ا"] },
  { rule: "S", l: "a", a: ["ا"] },
  { rule: "M", l: "a", a: ["\u064E", "ا"] }, // fat7a
  { rule: "S", l: "2", a: ["ا"] },
  { rule: "M", l: "2", a: ["ق", "أ"] },
  { rule: "E", l: "2", a: ["ق"] },
  { rule: "M", l: "22", a: ["قّ"] },
  { rule: "A", l: "2", a: ["ا"] },
  { rule: "A", l: "7", a: ["ح"] },
  { rule: "A", l: "77", a: ["حّ"] },
  { rule: "A", l: "3", a: ["ع"] },
  { rule: "A", l: "33", a: ["عّ"] },
  { rule: "A", l: " ", a: [" "] },
  { rule: "A", l: "kh", a: ["خ"] },
  { rule: "A", l: "aa", a: ["ا"] },
  { rule: "A", l: "b", a: ["ب"] },
  { rule: "A", l: "bb", a: ["بّ"] },
  { rule: "A", l: "c", a: ["س"] },
  { rule: "A", l: "d", a: ["د", "ض"] },
  { rule: "A", l: "D", a: ["ض"] },
  { rule: "A", l: "dd", a: ["دّ", "ضّ"] },
  { rule: "M", l: "e", a: ["\u0650", "ا"] }, // kasra
  { rule: "E", l: "e", a: ["\u0650", "ي"] }, //kasra ي
  { rule: "A", l: "ee", a: ["ي"] }, //kasra ي
  { rule: "S", l: "e", a: ["ا", "ق"] },
  { rule: "A", l: " e", a: [" ا"] },
  { rule: "A", l: "f", a: ["ف"] },
  { rule: "A", l: "g", a: ["ج"] },
  { rule: "A", l: "gh", a: ["غ"] },
  { rule: "A", l: "h", a: ["ه"] },
  { rule: "M", l: "i", a: ["\u0650", "ي"] }, // kasra
  { rule: "E", l: "i", a: ["\u0650", "ي"] }, //kasra
  { rule: "A", l: "j", a: ["ج"] },
  { rule: "A", l: "k", a: ["ك", "ق"] },
  { rule: "A", l: "kk", a: ["كّ"] },
  { rule: "A", l: "l", a: ["ل"] },
  { rule: "A", l: "ll", a: ["لّ"] },
  { rule: "A", l: "m", a: ["م"] },
  { rule: "A", l: "mm", a: ["مّ"] },
  { rule: "A", l: "mmu", a: ["مُّ"] },
  { rule: "A", l: "n", a: ["\u0646"] },
  { rule: "A", l: "nn", a: ["نّ"] },
  { rule: "M", l: "o", a: ["\u064F", "و"] },
  { rule: "E", l: "o", a: ["\u064F", "و"] },

  { rule: "M", l: "o", a: ["و"] },
  { rule: "E", l: "o", a: ["و"] },
  { rule: "S", l: "o", a: ["اُ"] },
  { rule: "A", l: "p", a: ["ب"] },
  { rule: "A", l: "pp", a: ["بّ"] },
  { rule: "A", l: "q", a: ["ق"] },
  { rule: "A", l: "r", a: ["ر"] },
  { rule: "A", l: "rr", a: ["رّ"] },
  { rule: "A", l: "s", a: ["س", "ص"] },
  { rule: "A", l: "ss", a: ["سّ", "صّ"] },
  { rule: "A", l: "t", a: ["ت", "ط"] },
  { rule: "A", l: "T", a: ["ط"] },
  { rule: "A", l: "tt", a: ["تّ", "ط"] },
  { rule: "A", l: "v", a: ["ف"] },
  { rule: "A", l: "u", a: ["\u064F", "و"] },
  { rule: "A", l: "uu", a: ["و"] },
  { rule: "A", l: "ou", a: ["و"] },
  { rule: "A", l: "oo", a: ["و"] },
  { rule: "A", l: "w", a: ["و"] },
  { rule: "E", l: "u", a: ["و"] },

  { rule: "A", l: "ww", a: ["وّ"] },
  { rule: "A", l: "x", a: ["كس"] },
  { rule: "A", l: "y", a: ["ي"] },
  { rule: "A", l: "yy", a: ["يّ"] },
  { rule: "A", l: "z", a: ["ز", "ظ", "ذ"] },
  { rule: "A", l: "Z", a: ["ظ"] },
  { rule: "A", l: "sh", a: ["ش"] },
  // { rule: "A", l: "s", a: ["س"] },
  // { rule: "A", l: "s", a: ["س"] },
  // { rule: "E", l: "a", a: ["ا", "ة", "ى", ""] },
  { rule: "E", l: "aa", a: ["ى"] }, // ا
  // { rule: "A", l: "aa ", a: ["ى", "ا "] }, // ا
  { rule: "E", l: "a", a: ["ة", "ى", "ا"] }, // ا
  { rule: "E", l: "e", a: ["ة"] },

  // { rule: "A", l: "a ", a: ["ا", "ة", "ى ", ""] },
];

const TO_PRON_RULES = [
  // S = staart, M = 'middle', E = 'end'

  { rule: "A", l: "2", a: ["ʔ"] },

  { rule: "A", l: "b", a: ["b"] },
  { rule: "A", l: "t", a: ["t", "ṭ"] },
  { rule: "A", l: "th", a: ["ṯ", "th"] },
  { rule: "A", l: "TH", a: ["ṯ"] },
  { rule: "A", l: "ث", a: ["ṯ"] },

  { rule: "A", l: "j", a: ["ǧ"] },
  { rule: "A", l: "g", a: ["ǧ"] },

  { rule: "A", l: "ج", a: ["ǧ"] },
  { rule: "A", l: "7", a: ["ḥ"] },
  { rule: "A", l: "ح", a: ["ḥ"] },

  { rule: "A", l: "kh", a: ["ẖ", "kh"] },
  { rule: "A", l: "KH", a: ["ẖ"] },
  { rule: "A", l: "5", a: ["ẖ"] },
  { rule: "A", l: "خ", a: ["ẖ"] },

  { rule: "A", l: "d", a: ["d"] },
  { rule: "A", l: "z", a: ["ḏ"] },
  { rule: "A", l: "ذ", a: ["ḏ"] },

  { rule: "A", l: "r", a: ["r"] },
  { rule: "A", l: "z", a: ["z"] },
  { rule: "A", l: "s", a: ["s"] },
  { rule: "A", l: "c", a: ["s"] },

  { rule: "A", l: "s", a: ["ṣ"] },
  { rule: "A", l: "S", a: ["ṣ"] },
  { rule: "A", l: "ص", a: ["ṣ"] },

  { rule: "A", l: "sh", a: ["š", "sh"] },
  { rule: "A", l: "SH", a: ["š"] },
  { rule: "A", l: "ش", a: ["š"] },

  { rule: "A", l: "d", a: ["ḍ"] },
  { rule: "A", l: "D", a: ["ḏ"] },
  // { rule: "A", l: "t", a: ["ṭ"] },
  { rule: "A", l: "T", a: ["ṭ"] },
  { rule: "A", l: "ط", a: ["ṭ"] },

  { rule: "A", l: "z", a: ["ẓ"] },
  { rule: "A", l: "Z", a: ["ẓ"] },
  { rule: "A", l: "3", a: ["ʕ"] },
  { rule: "A", l: "ʿ", a: ["ʕ"] },
  { rule: "A", l: "gh", a: ["ġ"] },
  { rule: "A", l: "f", a: ["f"] },
  { rule: "A", l: "q", a: ["q"] },
  { rule: "A", l: "k", a: ["k"] },
  { rule: "A", l: "l", a: ["l"] },
  { rule: "A", l: "m", a: ["m"] },
  { rule: "A", l: "n", a: ["n"] },
  { rule: "A", l: "h", a: ["h"] },
  { rule: "A", l: "w", a: ["w"] },
  { rule: "A", l: "y", a: ["y"] },

  { rule: "A", l: "i", a: ["i"] },
  { rule: "A", l: "ii", a: ["ī"] },

  { rule: "A", l: "I", a: ["ī"] },

  { rule: "A", l: "aa", a: ["ā"] },
  { rule: "A", l: "ee", a: ["ē"] },
  { rule: "A", l: "é", a: ["ē"] },

  { rule: "A", l: "oo", a: ["ō"] },

  { rule: "A", l: "e", a: ["ə", "e"] },

  { rule: "A", l: "uu", a: ["ū"] },
  { rule: "A", l: "y", a: ["y"] },

  // { rule: "A", l: "a ", a: ["ا", "ة", "ى ", ""] },
];

const PRON_TO_ARB_RULES = [
  // S = staart, M = 'middle', E = 'end'
  { rule: "A", l: "b", a: ["ب"] },
  { rule: "A", l: "p", a: ["ب"] },

  { rule: "A", l: "bb", a: ["بّ"] },

  { rule: "A", l: "t", a: ["ت"] },
  { rule: "A", l: "tt", a: ["تّ"] },

  { rule: "A", l: "ṯ", a: ["ث"] },
  { rule: "A", l: "ṯṯ", a: ["ثّ"] },

  { rule: "A", l: "ǧ", a: ["ج"] },
  { rule: "A", l: "ǧǧ", a: ["جّ"] },

  { rule: "A", l: "ḥ", a: ["ح"] },

  { rule: "A", l: "ẖ", a: ["خ"] },
  { rule: "A", l: "ẖẖ", a: ["خّ"] },

  { rule: "A", l: "d", a: ["د"] },
  { rule: "A", l: "dd", a: ["دّ"] },

  { rule: "A", l: "ḏ", a: ["ذ"] },
  { rule: "A", l: "ḏḏ", a: ["ذّ"] },

  { rule: "A", l: "r", a: ["ر"] },
  { rule: "A", l: "rr", a: ["رّ"] },

  { rule: "A", l: "z", a: ["ز"] },
  { rule: "A", l: "zz", a: ["زّ"] },

  { rule: "A", l: "s", a: ["س"] },
  { rule: "A", l: "ss", a: ["سّ"] },

  { rule: "A", l: "š", a: ["ش"] },
  { rule: "A", l: "šš", a: ["شّ"] },

  { rule: "A", l: "ṣ", a: ["ص"] },
  { rule: "A", l: "ṣṣ", a: ["صّ"] },

  { rule: "A", l: "ḍ", a: ["ض"] },
  { rule: "A", l: "ḍḍ", a: ["ضّ"] },

  { rule: "A", l: "ṭ", a: ["ط"] },
  { rule: "A", l: "ṭṭ", a: ["طّ"] },

  { rule: "A", l: "ẓ", a: ["ظ"] },
  { rule: "A", l: "ẓẓ", a: ["ظّ"] },

  { rule: "A", l: "ʕ", a: ["ع"] },
  { rule: "A", l: "ʕʕ", a: ["عّ"] },

  // { rule: "A", l: "ġ", a: ["ع"] },
  { rule: "A", l: "ġ", a: ["غ"] },
  { rule: "A", l: "ġġ", a: ["غّ"] },

  { rule: "A", l: "f", a: ["ف"] },
  { rule: "A", l: "ff", a: ["فّ"] },

  { rule: "A", l: "q", a: ["ق"] },
  { rule: "A", l: "qq", a: ["قّ"] },

  { rule: "A", l: "k", a: ["ك"] },
  { rule: "A", l: "kk", a: ["كّ"] },

  { rule: "A", l: "l", a: ["ل"] },
  { rule: "A", l: "ll", a: ["لّ"] },

  { rule: "A", l: "m", a: ["م"] },
  { rule: "A", l: "mm", a: ["مّ"] },

  { rule: "A", l: "n", a: ["ن"] },
  { rule: "A", l: "nn", a: ["نّ"] },

  { rule: "A", l: "h", a: ["ه"] },
  { rule: "A", l: "hh", a: ["هّ"] },

  { rule: "A", l: "w", a: ["و"] },
  { rule: "A", l: "ww", a: ["وّ"] },

  { rule: "A", l: "y", a: ["ي"] },
  { rule: "A", l: "yy", a: ["يّ"] },

  // { rule: "A", l: "l", a: ["ل"] },
  // { rule: "A", l: "l", a: ["ل"] },
  // { rule: "A", l: "l", a: ["ل"] },

  // { rule: "A", l: "a ", a: ["ا", "ة", "ى ", ""] },

  // { rule: "S", l: "a", a: ["\u064E"] }, // fat7a
  { rule: "S", l: "a", a: ["ا"] }, // fat7a
  { rule: "M", l: "a", a: ["\u064E"] }, // fat7a
  { rule: "E", l: "a", a: ["\u064E"] }, // fat7a

  // { rule: "E", l: "a", a: ["ا"] }, // fat7a
  // { rule: "E", l: "a ", a: ["ا "] }, // fat7a
  { rule: "S", l: "e", a: ["ا\u0650"] }, // kasra
  { rule: "M", l: "e", a: ["\u0650"] }, // kasra
  { rule: "E", l: "e", a: ["\u0650"] }, // kasra

  { rule: "A", l: "i", a: ["\u0650"] },

  { rule: "S", l: "ə", a: ["ا\u0650"] }, // kasra
  { rule: "M", l: "ə", a: ["\u0650"] }, // kasra
  { rule: "E", l: "ə", a: ["\u0650"] }, // kasra

  { rule: "A", l: "o", a: ["\u064F"] }, // damme
  { rule: "A", l: "u", a: ["\u064F"] }, // damme

  { rule: "A", l: "ē", a: ["\u0650ا"] },
  { rule: "A", l: "ā", a: ["ا"] },
  { rule: "A", l: "ō", a: ["و"] },
  { rule: "A", l: "ū", a: ["و"] },
  { rule: "A", l: "ī", a: ["ي"] },

  { rule: "A", l: "ʔ", a: ["ء"] },
];

function lToA(prev, prevPrev, current, cType, rules) {
  // const rules =

  const filt = rules.filter((r) => r.rule == cType || r.rule == "A");

  let children = filt.filter((r) => r.l == current).flatMap((r) => r.a);

  if (children.length == 0) {
    children = [current];
  }

  const siblings = filt
    .filter((r) => r.l == `${prev}${current}`)
    .flatMap((r) => r.a);

  const stepSiblings = filt
    .filter((r) => r.l == `${prevPrev}${prev}${current}`)
    .flatMap((r) => r.a);

  return { children, siblings: siblings, stepSiblings: stepSiblings };
}

function toTree(wordSrc, rules, limit) {
  const word = wordSrc.replace(/(.)\1{2,}/g, "$1$1");

  const root = new TreeNode("", null);
  let leaves = [root];
  const startIndex = 0;
  const endIndex = word.length - 1;

  let prev = null;
  let prevPrev = null;

  [...word].forEach((current, i) => {
    let type;

    if (i == 0) {
      type = "S";
    } else if (i == endIndex) {
      type = "E";
    } else {
      type = "M";
    }

    let sugg = lToA(prev, prevPrev, current, type, rules);

    if (sugg.stepSiblings.length > 0) {
      const parents = leaves.map((l) => l.parent);
      parents.forEach((p) => (p.children = []));
      parents.forEach((l) => l.addChildren(sugg.stepSiblings));
      leaves = parents.flatMap((l) => l.children);
    } else if (sugg.siblings.length > 0) {
      const parents = leaves.map((l) => l.parent);
      parents.forEach((p) => (p.children = []));
      parents.forEach((l) => l.addChildren(sugg.siblings));
      leaves = parents.flatMap((l) => l.children);
    } else {
      leaves.forEach((l) => l.addChildren(sugg.children));
      const temp = leaves.flatMap((l) => l.children);
      leaves = temp;
    }
    prevPrev = prev;
    prev = current;

    leaves = uniqBy(leaves, function (e) {
      return e.value;
    });

    if (leaves.length > limit) {
      leaves = leaves.filter((element, index) => {
        return index % 2 === 0;
      });
    }
  });

  let ss = leaves
    .map((l) => l.value)
    .filter((l) => l.length > 0)
    .sort((a, b) => a.length - b.length);

  return ss;
}

const uniqBy = (arr, predicate) => {
  const cb = typeof predicate === "function" ? predicate : (o) => o[predicate];

  return [
    ...arr
      .reduce((map, item) => {
        const key = item === null || item === undefined ? item : cb(item);

        map.has(key) || map.set(key, item);

        return map;
      }, new Map())
      .values(),
  ];
};

exports.transliterate = function (word, limit = 100) {
  return toTree(word, ABZ_TO_ARB, limit);
};

exports.pronunciate = function (word, limit = 100) {
  return toTree(word, TO_PRON_RULES, limit);
};

exports.toArb = function (word, limit = 2) {
  return toTree(word, PRON_TO_ARB_RULES, limit);
};

exports.custom = function (word, rules, limit = 100) {
  return toTree(word, rules, limit);
};
