
document.addEventListener('DOMContentLoaded', () => { 
    let links = document.querySelectorAll('a');

    links.forEach(link => {
      
        const linkText = link.textContent.trim().toLowerCase();

        if (linkText === 'about') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Portfolio link clicked - Navigating to portfolio.html');
                window.location.href = 'portfolio.html';
            });
        } 
        else if (linkText === 'experience') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Experience link clicked - Navigating to w.html'); 
                window.location.href = 'w.html';
            });
        }
        else if (linkText === 'portfolio') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Experience link clicked - Navigating to w.html'); 
                window.location.href = 'h.html';
            });
        }
    });
});