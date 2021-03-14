# levantinetransliterator

Transliterator from arabizi to arabic script (siyyara => سيارة)

## Install

```
npm -i levantinetransliterator
```

## Demo

[As used on LevantineDictionary.com](https://levantinedictionary.com)

## Usage

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

### Contributions welcomed!
