class Str {
  static lower(st) {
    return st.toLowerCase();
  }
  static upper(st) {
    return st.toUpperCase();
  }
  static capitalize(st) {
    return st.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  static reverse(st) {
    return st
      .toLowerCase()
      .replace("/[w]/g")
      .split("")
      .reverse()
      .join("");
  }

  static contains(st, words) {
    if (Array.isArray(words)) {
      for (let i = 0; i < words.length; i++) {
        if (st.indexOf(words[i]) != -1) return true;
      }
      return false;
    } else if (typeof words === "string") {
      if (st.indexOf(words) != -1) return true;
      else return false;
    }
  }

  static random(n = 16) {
    let result = "";
    let characters =
      "ABDETRQDLGFDSQWQPPQKDMKMKFSsawqertsldfptglhsapq0312456976456";
    let charlength = characters.length;
    for (let i = 0; i < n; i++) {
      result += characters.charAt(Math.floor(Math.random() * charlength));
    }
    return result;
  }

  static slug(st, char = "-") {
    return st
      .replace(/[^a-z0-9\s]+/gi, "")
      .split(/\s+/)
      .join(char)
      .toLowerCase();
  }

  static count(st) {
    return st.length;
  }
  static countWords(st) {
    return st.split(/\s+\b/).length;
  }

  static trim(st, n = 100, repl = "...") {
    if (st.length > n) return st.substring(0, n).trim() + repl;
    else return st;
  }

  static trimWords(str, n = 30, repl = "...") {
    let words = str.split(/\s+\b/);
    if (words.length > n) return words.slice(0, n).join(" ") + repl;
    else return str;
  }
}

console.log(Str.lower("MAKAN"));

console.log(Str.upper("malam"));

console.log(Str.capitalize("saya ingin makan"));

console.log(Str.reverse("kasur"));

console.log(Str.contains("Saya ingin makan sate", "makan"));
console.log(Str.contains("Saya ingin makan sate", "rujak"));
console.log(Str.contains("Saya ingin makan sate", ["sate", "rujak"]));

console.log(Str.random());
console.log(Str.random(6));
console.log(Str.random(32));

const title =
  "JavaScript, TypeScript & Dart - Bahasa mana yang akan populer di 2018?";
console.log(Str.slug(title));
console.log(Str.slug(title, "_"));

console.log(Str.count("lorem ipsum"));

console.log(Str.countWords("lorem ipsum"));

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

console.log(Str.trim("Less than 100 characters"));
console.log(Str.trim(text));
console.log(Str.trim(text, 20));
console.log(Str.trim(text, 20, "·····"));

console.log(Str.trimWords("Less than 30 words"));
console.log(Str.trimWords(text));
console.log(Str.trimWords(text, 3));
console.log(Str.trimWords(text, 3, "·····"));
