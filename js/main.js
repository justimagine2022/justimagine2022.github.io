'use strict';
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const about = document.querySelector('.about');
  const abouttarget = document.getElementById('about');
  const works = document.querySelector('.works');
  const hero = document.querySelector('.hero');


  open.addEventListener('click', () => {
    overlay.classList.toggle('appear');
  });
  overlay.addEventListener('click', ()=> {
    overlay.classList.remove('appear');
  });

  


}