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
const cookiesApproved: boolean | null = JSON.parse(localStorage.getItem('cookiesApproved') as string) as boolean;

let clicked = false;

if (cookiesApproved) {
  cookieContainer?.classList.toggle('hidden');
}

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

function acceptCookies() {
  cookieContainer?.classList.toggle('hidden');
  localStorage.setItem('cookiesApproved', 'true');
}

function declineCookies() {
  cookieContainer?.classList.toggle('hidden');
  localStorage.setItem('cookiesApproved', 'false');
}

menuBtn?.addEventListener('click', toggleNavMenu);
acceptCookiesBtn?.addEventListener('click', acceptCookies);
declineCookiesBtn?.addEventListener('click', declineCookies);

// BOOKING FORM POPUP

const bookTableBtn = document.querySelector('#test') as HTMLButtonElement;

const bookingForm = document.getElementById('bookingForm') as HTMLFormElement;

function displayBookingForm() {
  bookingForm.style.display = 'block';
}

bookTableBtn.addEventListener('click', displayBookingForm);
