const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
} 

const form = document.getElementById('appointment-form');
const nameInput = document.getElementById('name');
const lastInput = document.getElementById('last_name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('file');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate form data
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || dateInput.value === '' || timeInput.value === '' || reasonInput.value === '') {
    alert('Please fill in all fields.');
    return false;
}

// Submit form data
const formData = new FormData(form);
const xhr = new XMLHttpRequest();
xhr.open('POST', 'your-server-url-here');
xhr.send(formData);

alert
})