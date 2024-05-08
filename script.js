const navLinks = document.querySelectorAll('.navigation li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    this.style.backgroundColor = "#f5f5f5"; // Add a light background on hover
  });

  link.addEventListener('mouseout', function() {
    this.style.backgroundColor = "transparent"; // Remove background color on mouseout
  });
});

//about us page
const aboutUsContent = document.querySelector('.about-us-content');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Read More';

aboutUsContent.appendChild(toggleBtn);

toggleBtn.addEventListener('click', function() {
  aboutUsContent.classList.toggle('expanded');
  if (aboutUsContent.classList.contains('expanded')) {
    toggleBtn.textContent = 'Read Less';
  } else {
    toggleBtn.textContent = 'Read More';
  }
});

