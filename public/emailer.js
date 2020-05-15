const issuesInput = document.getElementById('contact-issues')
const messageInput = document.getElementById('contact-message')
const sendEmailButton = document.getElementById('contact-cta')

sendEmailButton.addEventListener("click", (e) => {
  e.preventDefault()
  const email = ""
  const subject = encodeURI(`Kent 2020 Campaign`)
  const body = encodeURI(`${messageInput.value}\n\n\nWhat matters most?\n\n${issuesInput.value}`)
  const encodedURI = `mailto:${email}?subject=${subject}&body=${body}`
  window.open(encodedURI)
})