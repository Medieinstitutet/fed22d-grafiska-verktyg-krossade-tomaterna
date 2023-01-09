import './style/style.css';

const menuBtn: HTMLButtonElement | null = document.querySelector('#menu-btn');
const sausageTop: any = document.querySelector('#sausage_x5F_top');

let clicked = false;

menuBtn?.addEventListener('click', () => {
  clicked = !clicked;
  sausageTop.style.transform = clicked ? 'rotate(18deg)' : 'rotate(0deg)';
})