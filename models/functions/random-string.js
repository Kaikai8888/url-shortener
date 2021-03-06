function randomChars() {
  //The following chars can be generated by chars-generator.js
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const index = Math.floor(Math.random() * chars.length)
  return chars[index]
}

function randomString(n) {
  if (n < 1) return
  let shortenURL = ''
  for (let i = 0; i < n; i++) {
    shortenURL += randomChars()
  }
  return shortenURL
}

module.exports = randomString
