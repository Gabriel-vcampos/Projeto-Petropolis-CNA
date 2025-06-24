function createDustParticles() {
    const containers = document.querySelectorAll('.dust-particles');
    const particleCount = 200;

    containers.forEach(container => {
        for (let i = 0; i < particleCount; i++) {
            const dust = document.createElement('div');
            dust.className = 'dust';

            const size = Math.random() * 4 + 1;
            dust.style.width = `${size}px`;
            dust.style.height = `${size}px`;

            const posX = Math.random() * 100;
            const posY = Math.random() * 200;
            dust.style.left = `${posX}%`;
            dust.style.top = `${posY}%`;

            const duration = Math.random() * 25 + 15;
            dust.style.animationDuration = `${duration}s`;

            const delay = Math.random() * 15;
            dust.style.animationDelay = `${delay}s`;

            container.appendChild(dust);
        }
    });
}

function toggleScroll(element) {
    const isOpen = element.classList.contains('scroll-open');
    const allScrolls = document.querySelectorAll('.scroll');

    allScrolls.forEach(scroll => {
        const openInner = scroll.querySelector('.scroll-open-inner');
        const closedInner = scroll.querySelector('.scroll-closed-inner');

        if (scroll.classList.contains('scroll-open')) {
            scroll.classList.remove('scroll-open');
            scroll.classList.add('scroll-closed');

            openInner.style.opacity = '0';
            setTimeout(() => {
                openInner.style.display = 'none';
                closedInner.style.display = 'flex';
                setTimeout(() => {
                    closedInner.style.opacity = '1';
                }, 50);
            }, 300);
        }
    });

    if (!isOpen) {
        const openInner = element.querySelector('.scroll-open-inner');
        const closedInner = element.querySelector('.scroll-closed-inner');

        element.classList.remove('scroll-closed');
        element.classList.add('scroll-open');

        closedInner.style.opacity = '0';
        setTimeout(() => {
            closedInner.style.display = 'none';
            openInner.style.display = 'flex';
            openInner.style.opacity = '0';
            setTimeout(() => {
                openInner.style.opacity = '1';
            }, 50);
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const allScrolls = document.querySelectorAll('.scroll');
    allScrolls.forEach(scroll => {
        const openInner = scroll.querySelector('.scroll-open-inner');
        const closedInner = scroll.querySelector('.scroll-closed-inner');
        closedInner.style.opacity = '1';
        closedInner.style.display = 'flex';
        openInner.style.opacity = '0';
        openInner.style.display = 'none';
    });

    // Iniciar partículas
    createDustParticles();

    // Repetir a cada 10s
    setInterval(() => {
        const containers = document.querySelectorAll('.dust-particles');
        const additionalParticles = 30;

        containers.forEach(container => {
            for (let i = 0; i < additionalParticles; i++) {
                const dust = document.createElement('div');
                dust.className = 'dust';

                const size = Math.random() * 4 + 1;
                dust.style.width = `${size}px`;
                dust.style.height = `${size}px`;

                const posX = Math.random() * 100;
                dust.style.left = `${posX}%`;
                dust.style.top = '100%';

                const duration = Math.random() * 25 + 15;
                dust.style.animationDuration = `${duration}s`;

                container.appendChild(dust);

                setTimeout(() => {
                    if (dust && dust.parentNode) {
                        dust.parentNode.removeChild(dust);
                    }
                }, duration * 1000);
            }
        });
    }, 10000);
});
