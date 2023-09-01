document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
      name: contactForm.elements.name.value,
      email: contactForm.elements.email.value,
      message: contactForm.elements.message.value,
    };

    console.log('Form data: ', formData);

    document.getElementById('contact-form').reset();
  });
});
