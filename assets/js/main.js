// Central JS for navigation and interactions
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  const years = document.querySelectorAll('#year,#year2,#year3,#year4,#year5');
  years.forEach(el=>{ if(el) el.textContent = new Date().getFullYear(); });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const links = document.querySelector('.nav-links');
      if(links.style.display === 'flex'){ links.style.display = 'none'; }
      else { links.style.display = 'flex'; links.style.flexDirection = 'column'; }
    });
  }

  // WhatsApp buy buttons
  document.querySelectorAll('.buy-btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
      e.preventDefault();
      const href = this.getAttribute('data-wa');
      if(href){ window.open(href, '_blank'); }
    });
  });

  // Hero CTA to WhatsApp (uses general annual package by default)
  const heroBtn = document.getElementById('hero-cta-btn');
  if(heroBtn){
    heroBtn.addEventListener('click', function(e){
      e.preventDefault();
      const wa = 'https://wa.me/967XXXXXXXX?text=أرغب+بالاشتراك+في+IPTV+الباقة+السنوية';
      window.open(wa, '_blank');
    });
  }

  // Contact form: open WhatsApp message with form contents
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const name = encodeURIComponent(document.getElementById('name').value || '');
      const email = encodeURIComponent(document.getElementById('email').value || '');
      const msg = encodeURIComponent(document.getElementById('message').value || '');
      const text = `طلب+مراسلة+من:+${name}+(${email})+--+${msg}`;
      const wa = `https://wa.me/967XXXXXXXX?text=${text}`;
      window.open(wa, '_blank');
    });
  }
});
