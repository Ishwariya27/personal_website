const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('fa-times');
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-times');
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  header.classList.toggle('scrolled', window.scrollY > 100);
});
(function() {
  emailjs.init("Q4zJqd9p9xHMYPgqY");
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const submitBtn = document.querySelector('.form-btn');
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  submitBtn.disabled = true;
  
  emailjs.sendForm("service_sawn59r", "template_tly3uao", this)
    .then(function() {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
      setTimeout(() => {
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;
      }, 3000);
    }, function(error) {
      submitBtn.innerHTML = 'Send Message';
      submitBtn.disabled = false;
      alert("❌ Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    });
});