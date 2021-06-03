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

const ALEF = "ا";
const BAA2 = "ب";
const PAA2 = "پ";
const VAA2 = "ڤ";
const TAA2 = "ت";
const GAAL = "چ";
const TA2_MARBOUTA = "ة";
const THAA = "ط";
const ALEF_HAMZE = "أ";
const QAF = "ق";
const HAMZE_SEAT = "إ";
const KAAF = "ك";
const SHADDE = "\u0651";
const H7A2 = "ح";
const GHAYN = "غ";
const AAYN = "ع";
const YAA2 = "ي";
const FAT7A = "\u064E";
const KHA2 = "خ";
const SEEN = "س";
const SHEEN = "ش";
const DAAL = "د";
const DHAAD = "ض";
const SAAD = "ص";
const THA = "ط";
const NOON = "ن";
const FAA2 = "ف";
const JIIM = "ج";
const HAA2 = "ه";
const LAAM = "ل";
const MIIM = "م";
const WAAW = "و";
const DAMME = "\u064F";
const RAA2 = "ر";

const ZHAA2 = "ظ";
const ZHAAL = "ذ";

const ZAY = "ز";
const ALEF_MAKSOURA = "ى";

const HAMZE_SATER = "ء";
const KASRA = "\u0650";

const INITIAL = "ـ";

const ABZ_TO_ARB = [
  // S = start, M = 'middle', E = 'end'
  { rule: "S", l: "aa", a: [ALEF] },
  { rule: "M", l: "aa", a: [ALEF] },
  { rule: "S", l: "a", a: [ALEF_HAMZE, QAF] },
  // { rule: "S", l: "a", a: [ALEF] },

  { rule: "S", l: "A", a: [ALEF_HAMZE] },

  { rule: "M", l: "a", a: [FAT7A, ALEF] },
  { rule: "S", l: "2", a: [ALEF] },
  { rule: "M", l: "2", a: [QAF, ALEF_HAMZE] },
  { rule: "E", l: "2", a: [QAF] },
  { rule: "M", l: "22", a: [`${QAF}${SHADDE}`] },
  { rule: "S", l: "2", a: [ALEF] },
  { rule: "M", l: "2", a: [ALEF] },

  { rule: "A", l: "7", a: [H7A2] },
  { rule: "A", l: "*", a: [SHADDE] },

  { rule: "A", l: "77", a: [`${H7A2}${SHADDE}`] },
  { rule: "A", l: "3", a: [AAYN] },

  { rule: "E", l: " 3", a: [` ${AAYN}${INITIAL}`] },
  { rule: "E", l: " 3a", a: [` ${AAYN}${FAT7A}${INITIAL}`] },

  { rule: "E", l: " t", a: [` ${TAA2}${INITIAL}`] },
  { rule: "E", l: " ta", a: [` ${TAA2}${FAT7A}${INITIAL}`] },

  { rule: "E", l: " b", a: [` ${BAA2}${INITIAL}`] },
  { rule: "E", l: " bi", a: [` ${BAA2}${KASRA}${INITIAL}`] },

  { rule: "E", l: " l", a: [` ${LAAM}${INITIAL}`] },
  { rule: "E", l: " la", a: [` ${LAAM}${FAT7A}${INITIAL}`] },

  { rule: "E", l: " 7", a: [` ${H7A2}${INITIAL}`] },
  { rule: "E", l: " 7a", a: [` ${H7A2}${FAT7A}${INITIAL}`] },

  { rule: "A", l: "33", a: [`${GHAYN}${SHADDE}`] },
  { rule: "A", l: " ", a: [" "] },
  { rule: "A", l: "kh", a: [KHA2] },
  { rule: "A", l: "5", a: [KHA2] },
  { rule: "A", l: "55", a: [`${KHA2}${SHADDE}`] },
  { rule: "A", l: "aa", a: [ALEF] },
  { rule: "A", l: "b", a: [BAA2] },
  { rule: "A", l: "bb", a: [`${BAA2}${SHADDE}`] },
  { rule: "A", l: "c", a: [SEEN] },
  { rule: "A", l: "d", a: [DAAL, DHAAD] },
  { rule: "A", l: "D", a: [DHAAD] },
  { rule: "A", l: "dd", a: [`${DAAL}${SHADDE}`, `${DHAAD}${SHADDE}`] },
  { rule: "E", l: "e", a: [`${KASRA}${TA2_MARBOUTA}`, YAA2] },

  { rule: "M", l: "e", a: [KASRA, `${KASRA}${ALEF}`] },
  { rule: "A", l: "ee", a: [YAA2, `${ALEF}${KASRA}`] },

  // { rule: "A", l: "ee", a: [YAA2] },

  { rule: "S", l: "e", a: [HAMZE_SEAT, QAF] },
  { rule: "A", l: " e", a: [` ${ALEF}`] },
  { rule: "A", l: "f", a: [FAA2] },
  { rule: "A", l: "g", a: [JIIM, GAAL] },

  { rule: "A", l: "gg", a: [`${JIIM}${SHADDE}`, `${GAAL}${SHADDE}`] },

  { rule: "A", l: "gh", a: [GHAYN] },
  { rule: "A", l: "h", a: [HAA2] },
  { rule: "A", l: "ii", a: [YAA2] },

  { rule: "M", l: "i", a: [KASRA, YAA2] },
  { rule: "E", l: "i", a: [YAA2] },
  { rule: "S", l: "i", a: [HAMZE_SEAT] },

  { rule: "A", l: "j", a: [JIIM] },
  { rule: "A", l: "k", a: [KAAF, QAF] },
  { rule: "A", l: "kk", a: [`${KAAF}${SHADDE}`] },
  { rule: "A", l: "l", a: [LAAM] },
  { rule: "A", l: "ll", a: [`${LAAM}${SHADDE}`] },
  { rule: "A", l: "m", a: [MIIM] },
  { rule: "A", l: "M", a: [MIIM] },

  { rule: "A", l: "mm", a: [`${MIIM}${SHADDE}`] },
  { rule: "A", l: "mmu", a: [`${MIIM}${MIIM}${DAMME}`] },
  { rule: "A", l: "n", a: [NOON] },
  { rule: "A", l: "nn", a: [`${NOON}${SHADDE}`] },
  { rule: "M", l: "o", a: [DAMME, WAAW] },
  { rule: "E", l: "o", a: [DAMME, WAAW] },

  { rule: "M", l: "o", a: [WAAW] },
  { rule: "E", l: "o", a: [WAAW] },
  { rule: "S", l: "o", a: ["اُ"] },
  { rule: "A", l: "p", a: [PAA2] },
  { rule: "A", l: "pp", a: [`${PAA2}${SHADDE}`] },
  { rule: "A", l: "q", a: [QAF] },
  { rule: "A", l: "r", a: [RAA2] },
  { rule: "A", l: "rr", a: [`${RAA2}${SHADDE}`] },
  { rule: "A", l: "s", a: [SEEN, SAAD] },
  { rule: "A", l: "S", a: [SAAD] },

  { rule: "A", l: "ss", a: [`${SEEN}${SHADDE}`, `${SAAD}${SHADDE}`] },
  { rule: "A", l: "t", a: [TAA2, THAA] },
  { rule: "A", l: "T", a: [THAA] },
  { rule: "A", l: "TT", a: [`${THAA}${SHADDE}`] },

  { rule: "A", l: "tt", a: [`${TAA2}${SHADDE}`, THAA] },
  { rule: "A", l: "v", a: [VAA2] },
  { rule: "A", l: "vv", a: [`${VAA2}${SHADDE}`] },

  { rule: "A", l: "u", a: [WAAW, DAMME] },
  { rule: "A", l: "uu", a: [`${DAMME}${WAAW}`] },
  { rule: "A", l: "ou", a: [WAAW] },
  { rule: "A", l: "oo", a: [WAAW] },
  { rule: "A", l: "w", a: [WAAW] },
  { rule: "E", l: "u", a: [WAAW] },

  { rule: "A", l: "ww", a: [`${WAAW}${SHADDE}`] },
  { rule: "A", l: "x", a: [`${KAAF}${SEEN}`] },
  { rule: "A", l: "y", a: [YAA2] },
  { rule: "A", l: "yy", a: [`${YAA2}${SHADDE}`] },
  { rule: "A", l: "z", a: [ZAY, ZHAA2, ZHAAL] },
  { rule: "A", l: "Z", a: [ZHAA2] },
  { rule: "A", l: "sh", a: [SHEEN] },
  { rule: "A", l: `${SHEEN}${SHEEN}`, a: [`${SHEEN}${SHADDE}`] },

  { rule: "A", l: "sh", a: [`${SEEN}${HAA2}`] },

  { rule: "A", l: "ch", a: [SHEEN] },

  { rule: "E", l: "aa", a: [ALEF_MAKSOURA] }, // ا
  // { rule: "A", l: "aa ", a: [ALEF_MAKSOURA, "ا "] }, // ا
  { rule: "E", l: "a", a: [TA2_MARBOUTA, ALEF_MAKSOURA, ALEF] }, // ا

  // { rule: "A", l: "a ", a: [ALEF, TA2_MARBOUTA, "ى ", ""] },
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
  { rule: "A", l: "g", a: ["ǧ", "g"] },

  { rule: "A", l: JIIM, a: ["ǧ"] },
  { rule: "A", l: "7", a: ["ḥ"] },
  { rule: "A", l: H7A2, a: ["ḥ"] },

  { rule: "A", l: "kh", a: ["ẖ", "kh"] },
  { rule: "A", l: "KH", a: ["ẖ"] },
  { rule: "A", l: "5", a: ["ẖ"] },
  { rule: "A", l: KHA2, a: ["ẖ"] },

  { rule: "A", l: "d", a: ["d"] },
  { rule: "A", l: "z", a: ["ḏ"] },
  { rule: "A", l: ZHAAL, a: ["ḏ"] },

  { rule: "A", l: "r", a: ["r"] },
  { rule: "A", l: "z", a: ["z"] },
  { rule: "A", l: "s", a: ["s"] },
  { rule: "A", l: "c", a: ["s"] },

  { rule: "A", l: "s", a: ["ṣ"] },
  { rule: "A", l: "S", a: ["ṣ"] },
  { rule: "A", l: SAAD, a: ["ṣ"] },

  { rule: "A", l: "sh", a: ["š", "sh"] },
  { rule: "A", l: "SH", a: ["š"] },
  { rule: "A", l: SHEEN, a: ["š"] },

  { rule: "A", l: "d", a: ["ḍ"] },
  { rule: "A", l: "D", a: ["ḏ"] },
  // { rule: "A", l: "t", a: ["ṭ"] },
  { rule: "A", l: "T", a: ["ṭ"] },
  { rule: "A", l: THAA, a: ["ṭ"] },

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
];

const PRON_TO_ARB_RULES = [
  // S = staart, M = 'middle', E = 'end'
  { rule: "A", l: "b", a: [BAA2] },
  { rule: "A", l: "p", a: [PAA2] },

  { rule: "A", l: "bb", a: [`${BAA2}${SHADDE}`] },

  { rule: "A", l: "t", a: [TAA2] },
  { rule: "A", l: "tt", a: ["تّ"] },

  { rule: "A", l: "ṯ", a: ["ث"] },
  { rule: "A", l: "ṯṯ", a: ["ثّ"] },
  { rule: "A", l: "g", a: [GAAL] },
  { rule: "A", l: "gg", a: [`${GAAL}${SHADDE}`] },

  { rule: "A", l: "v", a: [VAA2] },

  { rule: "A", l: "ǧ", a: [JIIM] },
  { rule: "A", l: "ǧǧ", a: ["جّ"] },

  { rule: "A", l: "ḥ", a: [H7A2] },

  { rule: "A", l: "ẖ", a: [KHA2] },
  { rule: "A", l: "ẖẖ", a: ["خّ"] },

  { rule: "A", l: "d", a: [DAAL] },
  { rule: "A", l: "dd", a: ["دّ"] },

  { rule: "A", l: "ḏ", a: [ZHAAL] },
  { rule: "A", l: "ḏḏ", a: ["ذّ"] },

  { rule: "A", l: "r", a: [RAA2] },
  { rule: "A", l: "rr", a: ["رّ"] },

  { rule: "A", l: "z", a: [ZAY] },
  { rule: "A", l: "zz", a: ["زّ"] },

  { rule: "A", l: "s", a: [SEEN] },
  { rule: "A", l: "ss", a: ["سّ"] },

  { rule: "A", l: "š", a: [SHEEN] },
  { rule: "A", l: "šš", a: ["شّ"] },

  { rule: "A", l: "ṣ", a: [SAAD] },
  { rule: "A", l: "ṣṣ", a: ["صّ"] },

  { rule: "A", l: "ḍ", a: [DHAAD] },
  { rule: "A", l: "ḍḍ", a: ["ضّ"] },

  { rule: "A", l: "ṭ", a: [THAA] },
  { rule: "A", l: "ṭṭ", a: ["طّ"] },

  { rule: "A", l: "ẓ", a: ["ظ"] },
  { rule: "A", l: "ẓẓ", a: ["ظّ"] },

  { rule: "A", l: "ʕ", a: [AAYN] },
  { rule: "A", l: "ʕʕ", a: ["عّ"] },

  // { rule: "A", l: "ġ", a: [AAYN] },
  { rule: "A", l: "ġ", a: [GHAYN] },
  { rule: "A", l: "ġġ", a: ["غّ"] },

  { rule: "A", l: "f", a: [FAA2] },
  { rule: "A", l: "ff", a: ["فّ"] },

  { rule: "A", l: "q", a: [QAF] },
  { rule: "A", l: "qq", a: ["قّ"] },

  { rule: "A", l: "k", a: [KAAF] },
  { rule: "A", l: "kk", a: [`${KAAF}${SHADDE}`] },

  { rule: "A", l: "l", a: [LAAM] },
  { rule: "A", l: "ll", a: [`${LAAM}${SHADDE}`] },

  { rule: "A", l: "m", a: [MIIM] },
  { rule: "A", l: "mm", a: [`${MIIM}${SHADDE}`] },

  { rule: "A", l: "n", a: [NOON] },
  { rule: "A", l: "nn", a: [`${NOON}${SHADDE}`] },

  { rule: "A", l: "h", a: [HAA2] },
  { rule: "A", l: "hh", a: [`${HAA2}${SHADDE}`] },

  { rule: "A", l: "w", a: [WAAW] },
  { rule: "A", l: "ww", a: [`${WAAW}${SHADDE}`] },

  { rule: "A", l: "y", a: [YAA2] },
  { rule: "A", l: "yy", a: [`${YAA2}${SHADDE}`] },

  { rule: "S", l: "a", a: [`${ALEF}${FAT7A}`] },

  { rule: "M", l: "a", a: [FAT7A] },
  { rule: "E", l: "a", a: [FAT7A] },

  { rule: "S", l: "e", a: [`${ALEF}${KASRA}`] },
  { rule: "M", l: "e", a: [KASRA] },
  { rule: "E", l: "e", a: [KASRA] },

  { rule: "A", l: "i", a: [KASRA] },

  { rule: "S", l: "ə", a: [`${ALEF}${KASRA}`] },
  { rule: "M", l: "ə", a: [KASRA] },
  { rule: "E", l: "ə", a: [KASRA] },

  { rule: "A", l: "o", a: [DAMME] },
  { rule: "A", l: "u", a: [DAMME] },

  { rule: "A", l: "ē", a: [`${KASRA}${ALEF}`] },
  { rule: "A", l: "ā", a: [ALEF] },
  { rule: "A", l: "ō", a: [WAAW] },
  { rule: "A", l: "ū", a: [WAAW] },
  { rule: "A", l: "ī", a: [YAA2] },

  { rule: "A", l: "ʔ", a: [HAMZE_SATER] },
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

  let ss = leaves.map((l) => l.value).filter((l) => l.length > 0);
  // .sort((a, b) => a.length - b.length);

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
