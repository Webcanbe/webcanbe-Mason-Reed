document.querySelector('.menu')?.addEventListener('click', () => document.querySelector('nav')?.classList.toggle('open'));
document.querySelector('.video a').childNodes[0].nodeValue = 'Get video updates ';
document.querySelector('.podcast a').childNodes[0].nodeValue = 'Podcast inquiries ';
document.querySelector('form')?.addEventListener('submit', (event) => { event.preventDefault(); const button = event.currentTarget.querySelector('button'); button.textContent = 'You’re on the list ✓'; button.disabled = true; });
