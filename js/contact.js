const nameInput = document.getElementById("contact-name")
const emailInput = document.getElementById("contact-email")
const subjectInput = document.getElementById("contact-subject")
const messageInput = document.getElementById("contact-message")

const messages = localStorage.getItem("contact-messages")
const parseMessages = JSON.parse(messages)
const contactMessages = [parseMessages]

function contactInfo() {
    const newMessage = {
        contactName:nameInput.value,
        contactEmail:emailInput.value,
        contactSubject:subjectInput.value,
        contactMessage:messageInput.value
    }
    contactMessages.push(newMessage)
    const stringifyMessages = JSON.stringify(contactMessages)
    localStorage.setItem("contact-messages", stringifyMessages)
    console.log(contactMessages); 
}