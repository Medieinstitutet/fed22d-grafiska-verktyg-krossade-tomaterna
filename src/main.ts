/* eslint-disable linebreak-style */

import './style/style.scss';
import gsap from 'gsap';
import scssVar from './style/variables.module.scss';
import { setVisible, initializeForm } from './form';

const breakpointTablet = Number(scssVar.breakpointTablet);

const menuBtn: HTMLButtonElement | null = document.querySelector('#menu-btn');
const menuSausages: SVGElement[] | null = Array.from(document.querySelectorAll('.menu-sausages'));

const navContainer: HTMLDivElement | null = document.querySelector('#nav-container');
const nav: HTMLElement | null = document.querySelector('#nav');

const cookieContainer: HTMLDivElement | null = document.querySelector('#cookie-container');
const acceptCookiesBtn: HTMLButtonElement | null = document.querySelector('#accept-cookies');
const declineCookiesBtn: HTMLButtonElement | null = document.querySelector('#decline-cookies');
const cookiesApproved: boolean | null = JSON.parse(localStorage.getItem('cookiesApproved') as string) as boolean;

const bookTableSingleBtn = document.querySelector('#singleBookTable') as HTMLButtonElement;
const bookTableMenuOption: HTMLLinkElement | null = document.querySelector('#book-table-menu-option');

const bookTableBtnTop = document.querySelector('#topBookTable') as HTMLButtonElement;
const bookingFormTop = document.getElementById('bookingFormTop') as HTMLFormElement;
const bookTableBtnBottom = document.querySelector('#bottom-book-table') as HTMLButtonElement;
const bookingFormBottom = document.getElementById('bookingFormBottom') as HTMLFormElement;

let navMenuBtnClicked = false;

if (cookiesApproved) {
  cookieContainer?.classList.toggle('hidden');
}

function toggleNavMenu(): void {
  navMenuBtnClicked = !navMenuBtnClicked;
  if (menuSausages) {
    menuSausages.forEach((sausage) => {
      gsap.to(sausage, { duration: 1, rotation: navMenuBtnClicked ? 180 : 0, transformOrigin: '50% 50%' });
    });
  }
  if (navContainer && nav) {
    navContainer.classList.toggle('hidden');
    if (navMenuBtnClicked) {
      gsap.to(nav, {
        top: 0,
        duration: 0.5,
      });
    } else {
      nav.style.top = '-100vh';
    }
    document.querySelector('html')?.classList.toggle('no-scroll');
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

function scrollToBookingForm(): void {
  if (window.innerWidth < breakpointTablet) {
    setVisible(bookingFormBottom, true);
  } else {
    setVisible(bookingFormTop, true);
  }
}

initializeForm(bookingFormTop);
initializeForm(bookingFormBottom);

menuBtn?.addEventListener('click', toggleNavMenu);
acceptCookiesBtn?.addEventListener('click', acceptCookies);
declineCookiesBtn?.addEventListener('click', declineCookies);

navContainer?.addEventListener('click', toggleNavMenu);

bookTableSingleBtn.addEventListener('click', () => setVisible(bookingFormBottom, true));
bookTableBtnTop.addEventListener('click', () => setVisible(bookingFormTop, true));
bookTableBtnBottom.addEventListener('click', () => setVisible(bookingFormBottom, true));

bookTableMenuOption?.addEventListener('click', scrollToBookingForm);
