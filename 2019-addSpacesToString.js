/**
 * @description You are given a 0-indexed string s and a 0-indexed integer array 
 * spaces that describes the indices in the original string where spaces will be 
 * added. Each space should be inserted before the character at the given index.
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let res = '';
    let l = 0;
    for (const r of spaces) {
        let t = s.slice(l, r);
        l = r;
        res += t;
        res += ' ';
    }
    let last = s.slice(l);
    res += last;
    return res;
};

console.log(addSpaces("EnjoyYourCoffee", [5,9]))
