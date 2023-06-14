function stringLength(string) {
  return string.length;
}

function reversString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a/b;
  },

  multiply(a, b) {
    return a*b;
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = { stringLength, reversString, calculator, capitalize }