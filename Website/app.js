// ===== app.js =====
(function() {
    'use strict';

    // --- Handle missing images gracefully ---
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            const parent = this.parentNode;
            if (parent && !parent.querySelector('.img-fallback')) {
                const placeholder = document.createElement('div');
                placeholder.className = 'img-fallback';
                placeholder.innerHTML = `
                    <i class="fas fa-image" style="font-size:2.5rem; display:block; margin-bottom:8px; color:#1a4a5f;"></i>
                    <span style="font-size:0.85rem; color:#1a4a5f;">${this.alt || 'Image not available'}</span>
                `;
                placeholder.style.cssText = `
                    background: #e2eaef;
                    border-radius: 14px;
                    padding: 40px 20px;
                    text-align: center;
                    border: 2px dashed #5f8fa0;
                    min-height: 150px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                `;
                this.style.display = 'none';
                parent.appendChild(placeholder);
            }
        });
    });

    // --- Smooth scrolling for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('📊 Digital Literacy Impact Report · S M Towsif Ahmed');
    console.log('📅 Submitted: 16 July 2026 · InAmigos Foundation');

})();