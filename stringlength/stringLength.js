function stringLength(string) {
  const stringArray = string.split(' ').join('').split('');
  if ((stringArray.length < 10) || (stringArray.length === 10)) {
    if (stringArray.length > 1) {
      return true;
    }else {
      return false;
    }
  }else {
    return false;
  }
}

module.exports = stringLength;
