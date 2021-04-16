# levantinetransliterator

Transliterator from:

- arabizi or arabic to pronunciation (le3be => ləʕbə)
- arabizi to arabic script (siyyara => سيارة)
- pronunciation to approximate arabic transcription( ləʕbə => لِعبِ)

## Install

```
npm -i levantinetransliterator
```

## Demo

[As used on LevantineDictionary.com](https://www.levantinedictionary.com/tools/transliterator)
![levantine dictionary logo](https://www.levantinedictionary.com/favicon-32x32.png "levantine dictionary logo")

For more details, try to add a translation in the dictionary and see all 3 in use when adding Arabic and Pronunciation.

## Usage of arabizi to arabic transliterator

```javascript
import ld from "levantinetransliterator";

ld.transliterate("mar7aba");
//output: مَرحَبة مَرحَبى مَرحَبا مَرحابة مَرحابى مَرحابا مارحَبة مارحَبى مارحَبا مارحابة مارحابى مارحابا

ld.transliterate("lebnene");
//output: لِبنِنِ لِبنِني لِبنِنة لِبنانِ لِبناني لِبنانة لابنِنِ لابنِني لابنِنة لابنانِ لابناني لابنانة

ld.transliterate("ordone");
//output: اُردُنِ اُردُني اُردُنة اُردونِ اُردوني اُردونة اُرضُنِ اُرضُني اُرضُنة اُرضونِ اُرضوني اُرضونة

ld.transliterate("soury");
//سوري صوري

ld.transliterate("kifak");
//output: كِفَك كِفَق كِفاك كِفاق كيفَك كيفَق كيفاك كيفاق قِفَك قِفَق قِفاك قِفاق قيفَك قيفَق قيفاك قيفاق

ld.transliterate("ba3rif");
//بَعرِف بَعريف باعرِف باعريف

ld.transliterate("bantalon");
//بَنتَلُن بَنتَلون بَنتالُن بَنتالون بَنطَلُن بَنطَلون بَنطالُن بَنطالون بانتَلُن بانتَلون بانتالُن بانتالون بانطَلُن بانطَلون بانطالُن بانطالون
```

## Usage of arabizi to pronunciation transliterator

```javascript
import ld from "levantinetransliterator";

ld.pronunciate("le3be");
// ləʕbə, ləʕbe, leʕbə, leʕbe
```

## Usage of pronunciation to arabic approximation transliterator

```javascript
import ld from "levantinetransliterator";

ld.toArb("ləʕbə");
// لِعبِ
```

## If you want to add your own rules, you can either modify the source code or pass a "rules" array in the format:

```javascript
import ld from "levantinetransliterator";
const rules = [
  // S = staart, M = 'middle', E = 'end'
  { rule: "A", l: "b", a: ["ب"] },
  { rule: "A", l: "p", a: ["ب"] },
  { rule: "A", l: "bb", a: ["بّ"] },
];
// third paramater is a limit on results.
ld.custom("ləʕbə", rules, 100);
```

### Contributions welcomed!
