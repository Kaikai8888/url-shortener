const shortenUrlOutput = document.querySelector('#shorten-url-output')
const shortenURL = document.querySelector('#shorten-url')
const copyBtn = document.querySelector('#copy-btn')

if (shortenURL && copyBtn) {
  shortenURL.style.width = `${shortenURL.value.length / 2 + 1}em`
  shortenURL.parentElement.addEventListener('click', onShortenURLClick)
  copyBtn.addEventListener('click', onShortenURLClick)
}

//enable bootstrap tooltip data-toggle
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//functions
function onShortenURLClick(event) {
  if (!navigator.clipboard) {
    shortenURL.select()
    shortenURL.setSelectionRange(0, 99999)
    document.execCommand('copy')
  } else {
    navigator.permissions.query({ name: "clipboard-write" })
      .then(() => navigator.clipboard.writeText(shortenURL.value)
        .catch((error) => console.error(error))
      )
      .catch((error) => console.error(error))
  }
}
