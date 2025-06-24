const faders = document.querySelectorAll('.fade-in');
function triggerAnimation(element) {
      element.classList.remove('show');
      void element.offsetWidth;
      setTimeout(() => {
        element.classList.add('show');
      }, 10);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerAnimation(entry.target);
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 });

    faders.forEach(fader => observer.observe(fader));