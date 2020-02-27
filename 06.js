const CHAR = "*";
const BANNED = [
  "dolor",
  "elit",
  "quis",
  "nisi",
  "fugiat",
  "proident",
  "laborum"
];
const sentence =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const censor = sentence =>
  sentence
    .split(" ")
    .reduce(
      (acc, word) =>
        acc + " " + (BANNED.includes(word) ? CHAR.repeat(word.length) : word),
      ""
    );
const censored = censor(sentence).trim();
console.log(censored);
