function solution(s, n) {
  const MINCODE = 97;
  const MAXCODE = 122;
  let answer = [];

  let store;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer.push(" ");
      continue;
    }
    store = s.toLowerCase()[i].charCodeAt() + n;
    if (store > 122) store = store - MAXCODE + MINCODE - 1;
    store = String.fromCharCode(store);
    if (s[i] === s[i].toUpperCase()) store = store.toUpperCase();
    answer.push(store);
    store = "";
  }
  return answer.join("");
}