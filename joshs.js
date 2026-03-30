document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const items = document.querySelectorAll('.carousel-image');
    let current = 0;

    const showSlide = (index) => {
      items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      current = index;
    };

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i));
    });

    // Auto-rotate every 4 seconds (optional)
    setInterval(() => {
      showSlide((current + 1) % items.length);
    }, 4000);
  });
  
  
