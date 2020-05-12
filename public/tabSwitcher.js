const tabs = Array.from(document.querySelector('.tabs').children)
const tabContents = Array.from(document.querySelector('.tabs-content').children)

function handleSwitch(e, idx) {
  tabs.forEach((t, i) => {
    if(i === idx) t.classList.add('active')
    else t.classList.remove('active')
  })
  tabContents.forEach((tc, i) => {
    if(i === idx) tc.classList.add('active')
    else tc.classList.remove('active')
  })
}
tabs.forEach((t, idx) => {
  t.addEventListener('click', (e) => handleSwitch(e, idx))
});