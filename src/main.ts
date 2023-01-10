import './style/style.css';

const menuBtn: HTMLButtonElement | null = document.querySelector('#menu-btn');
const sausageTop: SVGGElement | null = document.querySelector('#sausage_x5F_top');

let clicked = false;

menuBtn?.addEventListener('click', () => {
  clicked = !clicked;
  if (sausageTop) { sausageTop.style.transform = clicked ? 'rotate(18deg)' : 'rotate(0deg)'; }
})