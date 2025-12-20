// Anime.js Animations for Arima X Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Hero Title Animation - Letter by letter reveal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = heroTitle.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: false})
            .add({
                targets: '.hero-title .letter',
                opacity: [0, 1],
                translateY: [50, 0],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 1400,
                delay: (el, i) => 50 * i
            });
    }

    // Hero Subtitle Animation
    anime({
        targets: '.hero p',
        opacity: [0, 1],
        translateY: [30, 0],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: 800
    });

    // Hero Buttons Animation
    anime({
        targets: '.hero-buttons .btn',
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.8, 1],
        easing: 'easeOutElastic(1, .8)',
        duration: 1500,
        delay: anime.stagger(150, {start: 1200})
    });

    // Section Titles on Scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    easing: 'easeOutExpo',
                    duration: 1200
                });
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title').forEach(title => {
        title.style.opacity = '0';
        sectionObserver.observe(title);
    });

    // Music Cards Animation on Scroll
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.music-card, .platform-card, .album-card, .stat-card, .tech-card');
                anime({
                    targets: cards,
                    opacity: [0, 1],
                    translateY: [50, 0],
                    scale: [0.9, 1],
                    easing: 'easeOutExpo',
                    duration: 800,
                    delay: anime.stagger(100)
                });
                cardObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.music-grid, .platforms-grid, .albums-grid, .stats-grid, .tech-grid').forEach(grid => {
        const cards = grid.querySelectorAll('.music-card, .platform-card, .album-card, .stat-card, .tech-card');
        cards.forEach(card => card.style.opacity = '0');
        cardObserver.observe(grid);
    });

    // Album Featured Animation
    const albumFeatured = document.querySelector('.album-featured');
    if (albumFeatured) {
        const albumObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Album cover animation
                    anime({
                        targets: '.album-featured-cover img',
                        opacity: [0, 1],
                        scale: [0.8, 1],
                        rotate: [-5, 0],
                        easing: 'easeOutElastic(1, .6)',
                        duration: 1500
                    });

                    // Album info animation
                    anime({
                        targets: '.album-featured-info',
                        opacity: [0, 1],
                        translateX: [50, 0],
                        easing: 'easeOutExpo',
                        duration: 1200,
                        delay: 300
                    });

                    // Tracklist items
                    anime({
                        targets: '.track-item',
                        opacity: [0, 1],
                        translateX: [-30, 0],
                        easing: 'easeOutExpo',
                        duration: 800,
                        delay: anime.stagger(100, {start: 600})
                    });

                    albumObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        albumFeatured.querySelector('.album-featured-cover img').style.opacity = '0';
        albumFeatured.querySelector('.album-featured-info').style.opacity = '0';
        albumFeatured.querySelectorAll('.track-item').forEach(item => item.style.opacity = '0');
        albumObserver.observe(albumFeatured);
    }

    // Timeline Animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: entry.target,
                        opacity: [0, 1],
                        translateX: [-50, 0],
                        easing: 'easeOutExpo',
                        duration: 1000
                    });
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        timelineItems.forEach(item => {
            item.style.opacity = '0';
            timelineObserver.observe(item);
        });
    }

    // Button Hover Animations
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });

        btn.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });

    // Card Hover Animations
    document.querySelectorAll('.music-card, .platform-card, .album-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -10,
                duration: 400,
                easing: 'easeOutQuad'
            });
        });

        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                duration: 400,
                easing: 'easeOutQuad'
            });
        });
    });

    // Logo Animation
    const logo = document.querySelector('.logo');
    if (logo) {
        anime({
            targets: logo,
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: 'easeOutExpo',
            duration: 1000
        });
    }

    // Nav Menu Items Animation
    anime({
        targets: '.nav-menu li',
        opacity: [0, 1],
        translateY: [-20, 0],
        easing: 'easeOutExpo',
        duration: 800,
        delay: anime.stagger(100, {start: 200})
    });

    // Floating Animation for Album Cover (continuous)
    if (document.querySelector('.album-featured-cover img')) {
        anime({
            targets: '.album-featured-cover img',
            translateY: [-8, 8],
            duration: 3000,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: true
        });
    }

    // Stats Number Counter Animation
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = target.textContent;
                    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                    
                    if (!isNaN(numericValue)) {
                        const obj = { value: 0 };
                        anime({
                            targets: obj,
                            value: numericValue,
                            round: 1,
                            easing: 'easeOutExpo',
                            duration: 2000,
                            update: function() {
                                target.textContent = obj.value + (finalValue.includes('+') ? '+' : '');
                            }
                        });
                    }
                    statsObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        statNumbers.forEach(num => statsObserver.observe(num));
    }
});
