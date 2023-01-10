import './style/style.css';
import gsap from 'gsap';

const menuBtn: HTMLButtonElement | null = document.querySelector('#menu-btn');
const sausageTop: SVGGElement | null = document.querySelector('#sausage_x5F_top');
const menuSausages: SVGElement[] | null = Array.from(document.querySelectorAll('.menu-sausages'));

let clicked = false;

menuBtn?.addEventListener('click', () => {
  clicked = !clicked;
  if (menuSausages) { 
    // sausageTop.style.transform = clicked ? 'rotate(180deg)' : 'rotate(0deg)';
    menuSausages.forEach((sausage) => {
      if (clicked) {
        gsap.to(sausage, {duration: 1, rotation: 180, transformOrigin: '50% 50%'})
      } else {
        gsap.to(sausage, {duration: 1, rotation: 0, transformOrigin: '50% 50%'})
      }
      // sausage.style.transform = clicked ? 'rotate(180deg)' : 'rotate(0deg)';
    });
  }
});