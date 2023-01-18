function enableBookBtn(form: HTMLFormElement) {
  const formOrderBtn = form.querySelector('.form-order-btn') as HTMLButtonElement;

  let shouldEnable = true;

  const inputElements = form.querySelectorAll('input');

  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].value === '') {
      shouldEnable = false;
    }
  }

  if (shouldEnable) {
    formOrderBtn.disabled = false;
    formOrderBtn.classList.remove('disabled-button');
    formOrderBtn.classList.add('primary-button');
  } else {
    formOrderBtn.disabled = true;
    formOrderBtn.classList.remove('primary-button');
    formOrderBtn.classList.add('disabled-button');
  }
}

export function setVisible(element: HTMLElement, visible: boolean) {
  if (visible) {
    element.classList.remove('hidden');
    element.classList.add('visible');
    element.scrollIntoView();
  } else {
    element.classList.remove('visible');
    element.classList.add('hidden');
  }
}

function cancelForm(e: Event, bookingForm: HTMLFormElement) {
  e.preventDefault();
  setVisible(bookingForm, false);
}

export function initializeForm(form: HTMLFormElement) {
  const formOrderBtn = form.querySelector('.form-order-btn') as HTMLButtonElement;
  const formCancelBtn = form.querySelector('.form-cancel-btn') as HTMLButtonElement;
  formOrderBtn.disabled = true;

  const inputElements = form.querySelectorAll('input');

  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('input', () => enableBookBtn(form));
  }

  formCancelBtn.addEventListener('click', (e) => cancelForm(e, form));
}
