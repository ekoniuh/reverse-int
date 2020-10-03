module.exports = function reverse(n) {
  return  String(n > 0 ? n : -1 * n).split('').reverse().join('');
};

// module.exports = function reverse (n) {
//     return parseInt(n.toString().split('').reverse().join(''));
// }
