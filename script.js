// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Image hover effect for product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = "scale(1)";
    });
});

// Modal functionality to view larger image
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

const modalImg = document.createElement('img');
modal.appendChild(modalImg);

const modalClose = document.createElement('span');
modalClose.innerText = 'X';
modalClose.classList.add('close');
modal.appendChild(modalClose);

document.querySelectorAll('.product-card img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Add event listener to close modal if clicked outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
