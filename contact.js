const contactForm = document.querySelector('#contact-form');
contactForm.onsubmit = function(event) {
    event.preventDefault();
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const text = contactForm.text.value;
    let contactObj = { "name": name, "email": email, "text": text }
    console.log(contactObj);
}

