/* eslint-disable linebreak-style */
import './style/style.scss';
import gsap from 'gsap';

const menuBtn: HTMLButtonElement | null = document.querySelector('#menu-btn');
const menuSausages: SVGElement[] | null = Array.from(document.querySelectorAll('.menu-sausages'));

let clicked = false;

function toggleNavMenu(): void {
  clicked = !clicked;
  if (menuSausages) {
    menuSausages.forEach((sausage) => {
      gsap.to(sausage, { duration: 1, rotation: clicked ? 180 : 0, transformOrigin: '50% 50%' });
    });
  }
}

menuBtn?.addEventListener('click', toggleNavMenu);
