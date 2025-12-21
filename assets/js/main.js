document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                document.body.classList.remove('menu-open');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.music-card, .platform-card, .album-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const flipCards = document.querySelectorAll('.album-card-flip');
    flipCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                this.classList.toggle('flipped');
            }
        });
    });

    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });

        document.addEventListener('click', function(e) {
            if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
            }
        });

        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                const langText = lang.toUpperCase();
                
                languageOptions.forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
                
                languageBtn.querySelector('span').textContent = langText;
                languageDropdown.classList.remove('active');
                
                let attempts = 0;
                const maxAttempts = 50;
                
                function triggerTranslation() {
                    attempts++;
                    const selectElement = document.querySelector('.goog-te-combo');
                    
                    if (selectElement) {
                        console.log('Google Translate found, changing to:', lang);
                        selectElement.value = lang;
                        
                        const event = new Event('change', { bubbles: true });
                        selectElement.dispatchEvent(event);
                        
                        selectElement.dispatchEvent(new Event('change'));
                        
                        if (selectElement.onchange) {
                            selectElement.onchange();
                        }
                    } else if (attempts < maxAttempts) {
                        console.log('Waiting for Google Translate... attempt', attempts);
                        setTimeout(triggerTranslation, 200);
                    } else {
                        console.error('Google Translate not loaded after', maxAttempts, 'attempts');
                    }
                }
                
                triggerTranslation();
            });
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const formMessages = document.getElementById('formMessages');
            
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            formMessages.style.display = 'none';
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value || '',
                company: document.getElementById('company').value || '',
                message: document.getElementById('message').value,
                source: 'Arima X - Formulario web',
                value: 0
            };
            
            try {
                const response = await fetch('https://nimboxleads.hiveagile.dev/api/webhooks/leads/90b5d3dd6363862c90bcc592a6b6648d12bf232cb1283cbf3cc3a3aab39e6257', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    formMessages.className = 'form-messages success';
                    formMessages.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
                    formMessages.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Error en el envío');
                }
            } catch (error) {
                formMessages.className = 'form-messages error';
                formMessages.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo o contáctanos por email.';
                formMessages.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            }
        });
    }
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
});
