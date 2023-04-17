let RomanMap = new Map([['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['IV', 4], ['I', 1]]);

class RomanNumerals {
    static toRoman(num) {
        for (let [key, value] of RomanMap) {
            if (value === num) return key;
        }
    }
    static sumTheLetters(s) {
        let sum = 0;
        s.split('');
        for (let i = 0; i < s.length; i++) {
            if (s[i] === 0) continue;
            if (s[i+1] && s[i] === 'I' && s[i+1] === 'V') {
                sum += RomanMap.get('IV');
                i++;
            }
            else sum += RomanMap.get(s[i]);
        }
        return sum;
    }
    static fromRoman(str) {
        return (str.length === 1 || str === 'IV') ? RomanMap.get(str) : RomanNumerals.sumTheLetters(str);
    }
}
console.log(RomanNumerals.fromRoman('MCMXC'));
console.log(RomanNumerals.toRoman(500));

// console.log(RomanMap)