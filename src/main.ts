/* eslint-disable linebreak-style */
import './style/style.scss';
import gsap from 'gsap';

const menuBtn: HTMLButtonElement | null = document.querySelector('#menu-btn');
const menuSausages: SVGElement[] | null = Array.from(document.querySelectorAll('.menu-sausages'));

const navContainer: HTMLDivElement | null = document.querySelector('#nav-container');
const nav: HTMLElement | null = document.querySelector('#nav');

const cookieContainer: HTMLDivElement | null = document.querySelector('#cookie-container');
const acceptCookiesBtn: HTMLButtonElement | null = document.querySelector('#accept-cookies');
const declineCookiesBtn: HTMLButtonElement | null = document.querySelector('#decline-cookies');

let clicked = false;

function toggleNavMenu(): void {
  clicked = !clicked;
  if (menuSausages) {
    menuSausages.forEach((sausage) => {
      gsap.to(sausage, { duration: 1, rotation: clicked ? 180 : 0, transformOrigin: '50% 50%' });
    });
  }
  if (navContainer && nav) {
    navContainer.classList.toggle('hidden');
    if (clicked) {
      gsap.to(nav, {
        top: 0,
        duration: 0.5,
      });
    } else {
      nav.style.top = '-100vh';
    }
  }
}

function cookiesChoice(): void {
  cookieContainer?.classList.toggle('hidden');
}

menuBtn?.addEventListener('click', toggleNavMenu);
acceptCookiesBtn?.addEventListener('click', cookiesChoice);
declineCookiesBtn?.addEventListener('click', cookiesChoice);
