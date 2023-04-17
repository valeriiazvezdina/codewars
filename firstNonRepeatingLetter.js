function firstNonRepeatingLetter(s) {
    s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i];
    }
    return '';
}
console.log(firstNonRepeatingLetter('moomen'));