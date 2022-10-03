'use strict';

const open = document.getElementById('open');
const overlay = document.querySelector('.overlay');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  overlay.classList.add('show');
  open.classList.add('hide');
});

close.addEventListener('click', () => {
  overlay.classList.remove('show');
  open.classList.remove('hide');
});

const dts = document.querySelectorAll('dt');
const material = document.querySelector('.material');

dts.forEach(dt => {
  dt.addEventListener('click', ()=> {
    material.classList.toggle('appear');
  });
});
