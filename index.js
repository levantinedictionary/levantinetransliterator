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

  addSisters(values) {
    this.parent.addChildren(values);
  }

  addSister(value) {
    this.parent.addChild(value, this);
  }
}

function lToA(prev, prevPrev, current, cType) {
  const rules = [
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

  const filt = rules.filter((r) => r.rule == cType || r.rule == "A");

  let children = filt.filter((r) => r.l == current).flatMap((r) => r.a);

  if (children.length == 0) {
    children = [current];
  }

  const sisters = filt
    .filter((r) => r.l == `${prev}${current}`)
    .flatMap((r) => r.a);

  const grandSisters = filt
    .filter((r) => r.l == `${prevPrev}${prev}${current}`)
    .flatMap((r) => r.a);

  return { children, sisters, grandSisters };
}

function toTree(wordSrc) {
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

    let sugg = lToA(prev, prevPrev, current, type);

    if (sugg.grandSisters.length > 0) {
      const parents = leaves.map((l) => l.parent);
      parents.forEach((p) => (p.children = []));
      parents.forEach((l) => l.addChildren(sugg.grandSisters));
      leaves = parents.flatMap((l) => l.children);
    } else if (sugg.sisters.length > 0) {
      const parents = leaves.map((l) => l.parent);
      parents.forEach((p) => (p.children = []));
      parents.forEach((l) => l.addChildren(sugg.sisters));
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

    if (leaves.length > 100) {
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

exports.transliterate = function (word) {
  return toTree(word);
};
