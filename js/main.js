// Get element from HTML
let inputEl = document.getElementById('input')
let buttonEl = document.getElementById('btn')
let msgEl = document.getElementById('msg')

// Event

buttonEl.onclick = function () {
  // get input value
  let inputValue = inputEl.value
  // put input value into p element
  if (inputEl.value != '') {
    msgEl.innerHTML = inputValue
    // clear input value
    inputEl.value = ''
  }
}
