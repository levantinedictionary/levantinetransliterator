const ld = require("./index.js");

const mar7aba = "mar7aba";

const mar7abaSuggestions = ld.transliterate("mar7aba");

const mar7abaExpected = "مَرحَبة";

if (!mar7abaSuggestions.includes(mar7abaExpected))
  throw `Test failed, couldn't find ${mar7abaExpected} in suggestions`;

console.log("all tests succeeded");
