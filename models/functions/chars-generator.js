//charCode: a-z: 97-122, A-Z: 65-90, 0-9: 48-57
const chars = [[97, 122], [65, 90], [48, 57]].map(charCodes => getChars(charCodes[0], charCodes[1])).join('')

function getChars(minCharCode, maxCharCode) {
  let chars = ''
  for (let i = minCharCode; i <= maxCharCode; i++) {
    chars += String.fromCharCode(i)
  }
  return chars
}


console.log(chars)

module.exports = chars