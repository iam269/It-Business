// Scurt script pentru navigare și validare formular
document.addEventListener('DOMContentLoaded', function(){
  // anulăm erorile dacă elementele lipsesc
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if(navToggle && navList){
    navToggle.addEventListener('click', function(){
      const shown = navList.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', String(shown));
    });
  }

  // setează anul curent în footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // validare simplă formular
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      status.textContent = '';
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name || !email || !message){
        status.textContent = 'Te rog completează toate câmpurile.';
        status.style.color = 'crimson';
        return;
      }
      // simulăm trimiterea (aici integrezi backend sau API)
      status.textContent = 'Trimitere...';
      status.style.color = '#333';
      setTimeout(function(){
        status.textContent = 'Mulțumim! Mesajul a fost trimis.';
        status.style.color = 'green';
        form.reset();
      }, 900);
    });
  }

  // smooth scroll pentru ancore
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if(targetId.length > 1){
        e.preventDefault();
        const target = document.querySelector(targetId);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
});
