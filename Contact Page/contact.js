document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(el => el.style.display = 'none');

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;
git  
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required';
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Valid email is required';
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            document.getElementById('phoneError').textContent = 'Valid phone number is required';
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        }

        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required';
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset();
        }
    });

});

function toggleMenu(){
    const menu = document.getElementById("mobileMenu");

    if(menu.style.display === "block"){
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}