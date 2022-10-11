function reverseString(string) {
  
  if (string === '') {
    return false
  }else {
  
  const removePunctuationMarks = string
    .replace(/[.,\/#!$%\?^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ");
  
  const newString = removePunctuationMarks
    .split(' ')
    .join('')
    .split('')
    .reverse('')
    .join('');
  
  return newString
  }
}

module.exports = reverseString;