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

const bookTableSingleBtn = document.querySelector('#singleBookTable') as HTMLButtonElement;

const bookTableBtnTop = document.querySelector('#topBookTable') as HTMLButtonElement;
const bookingFormTop = document.getElementById('bookingFormTop') as HTMLFormElement;
const bookTableBtnBottom = document.querySelector('#bottom-book-table') as HTMLButtonElement;
const bookingFormBottom = document.getElementById('bookingFormBottom') as HTMLFormElement;

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

function displayTopBookingForm() {
  bookingFormTop.style.display = 'block';
}

function displayBottomBookingForm() {
  bookingFormBottom.style.display = 'block';
}

bookTableSingleBtn.addEventListener('click', displayBottomBookingForm);
bookTableBtnTop.addEventListener('click', displayTopBookingForm);
bookTableBtnBottom.addEventListener('click', displayBottomBookingForm);

const scrollToForm = document.querySelector('#singleBookTable') as HTMLButtonElement;

function goToForm() {
  bookingFormBottom.scrollIntoView();
}

scrollToForm.addEventListener('click', goToForm);
