document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mock Data for Carousels
  const animeData = [
    { title: 'Neon Pulse', image: 'assets/series-images/poster_1.png' },
    { title: 'Spirit Forest', image: 'assets/series-images/poster_2.png' },
    { title: 'Armored Odyssey', image: 'assets/series-images/poster_3.png' },
    { title: 'Starry Night Archives', image: 'assets/series-images/poster_4.png' },
    { title: 'Desert of Lost Dreams', image: 'assets/series-images/poster_5.png' },
    { title: 'Cybernetic Soul', image: 'assets/series-images/poster_1.png' },
    { title: 'Whispers of the Kami', image: 'assets/series-images/poster_2.png' },
    { title: 'Mecha Front', image: 'assets/series-images/poster_3.png' },
    { title: 'Magic High', image: 'assets/series-images/poster_4.png' },
    { title: 'Wasteland Drifter', image: 'assets/series-images/poster_5.png' }
  ];

  // Helper function to create card HTML
  const createCard = (anime) => {
    return `
      <div class="anime-card">
        <img src="${anime.image}" alt="${anime.title}">
        <div class="anime-card-overlay">
          <span class="card-title">${anime.title}</span>
          <div class="card-controls">
            <button class="card-btn play"><i class="fas fa-play"></i></button>
            <button class="card-btn add"><i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    `;
  };

  // Populate Rows
  const rows = ['row-1', 'row-2', 'row-3'];
  
  rows.forEach(rowId => {
    const scroller = document.getElementById(rowId);
    // Shuffle data slightly for different rows
    const shuffledData = [...animeData].sort(() => 0.5 - Math.random());
    
    let rowHTML = '';
    shuffledData.forEach(anime => {
      rowHTML += createCard(anime);
    });
    
    scroller.innerHTML = rowHTML;
  });

  // Carousel Scrolling Logic
  const carouselContainers = document.querySelectorAll('.carousel-container');

  carouselContainers.forEach(container => {
    const scroller = container.querySelector('.carousel-scroller');
    const leftBtn = container.querySelector('.carousel-btn.left');
    const rightBtn = container.querySelector('.carousel-btn.right');

    leftBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: -scroller.offsetWidth + 100, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      scroller.scrollBy({ left: scroller.offsetWidth - 100, behavior: 'smooth' });
    });
  });

  // Fallback for scroll-driven animations if not supported (from Modern Web Guidance)
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    const scrollers = document.querySelectorAll('.carousel-scroller');
    
    scrollers.forEach(scroller => {
      const entries = scroller.querySelectorAll('.anime-card');
      const animations = new Map();

      entries.forEach(entry => {
        const animation = entry.animate(
          {
            opacity: ['0.3', '1'],
            transform: ['scale(0.9) translateX(20px)', 'scale(1) translateX(0)']
          },
          {
            duration: 1, 
            fill: 'both'
          }
        );
        animation.pause();
        animations.set(entry, animation);
      });

      const tick = () => {
        const scrollerRect = scroller.getBoundingClientRect();

        entries.forEach(entry => {
          const animation = animations.get(entry);
          if (!animation) return;

          const entryRect = entry.getBoundingClientRect();
          // Calculate progress based on position within the scroller
          // 0 when just entering the right side, 1 when fully visible
          let progress = (scrollerRect.right - entryRect.left) / entryRect.width;
          
          if (progress < 0) progress = 0;
          if (progress > 1) progress = 1;

          animation.currentTime = progress;
        });
      };
        
      scroller.addEventListener('scroll', tick);
      tick(); // Initial call
    });
  }
});
