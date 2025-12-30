import './style.css'

// 1. Scroll Animations (Intersection Observer)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// 2. Contact Form Handling
const wireFormSubmission = (selector) => {
  const form = document.querySelector(selector);
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  if (!submitBtn) return;

  const originalBtnText = submitBtn.innerText;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Clear old feedback
    form.querySelectorAll('.success-message, .error-message').forEach(msg => msg.remove());

    submitBtn.innerText = 'Sending...';
    submitBtn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Normalize name for the API when only granular fields are present
    if (!data.name) {
      if (data.firstName || data.lastName) {
        data.name = `${data.firstName || ''} ${data.lastName || ''}`.trim();
      } else if (data.contactName) {
        data.name = data.contactName;
      }
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }

      const successMsg = document.createElement('div');
      successMsg.className = 'success-message fade-in-up visible';
      successMsg.innerHTML = '<i class="fa-solid fa-check-circle"></i> Message sent successfully! We will contact you soon.';
      form.appendChild(successMsg);
      form.reset();

      setTimeout(() => {
        successMsg.remove();
      }, 6000);
    } catch (error) {
      console.error('Submission Error:', error);
      const errorMsg = document.createElement('div');
      errorMsg.className = 'error-message fade-in-up visible';
      errorMsg.innerText = 'Failed to send message. Please try again.';
      form.appendChild(errorMsg);
    } finally {
      submitBtn.innerText = originalBtnText;
      submitBtn.disabled = false;
    }
  });
};

['#contact-form', '.main-contact-form', '.commercial-form'].forEach(wireFormSubmission);

// 3. Navbar Scroll Effect (Optional but nice)
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled'); // Add bg color if needed in css
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// 4. Before/After Slider interaction
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const imageAfter = document.querySelector('.image-after');
const sliderLine = document.querySelector('.slider-line');
const sliderButton = document.querySelector('.slider-button');

if (slider && sliderContainer && imageAfter && sliderLine && sliderButton) {
  const updateSlider = (value) => {
    const numericValue = Number(value);
    const percent = `${numericValue}%`;
    sliderContainer.style.setProperty('--slider-position', percent);
    imageAfter.style.clipPath = `inset(0 ${100 - numericValue}% 0 0)`;
    sliderLine.style.left = percent;
    sliderButton.style.left = percent;
  };

  // Initialize and bind
  updateSlider(slider.value || 50);
  slider.addEventListener('input', (e) => updateSlider(e.target.value));
}
