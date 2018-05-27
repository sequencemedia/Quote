import { isVisible } from '../common/element.js';

import EVENT from '../common/event.js';

export default function altapay() {
  const element = document.querySelector('section.altapay-main-container');

  if (isVisible(element)) {
    const ccnInput = element.querySelector('#creditCardNumberInput');
    if (ccnInput) {
      ccnInput.value = '4444444444444444';
      ccnInput.dispatchEvent(new Event('change', EVENT));
    }

    const cvcInput = element.querySelector('#cvcInput');
    if (cvcInput) {
      cvcInput.value = '123';
      cvcInput.dispatchEvent(new Event('change', EVENT));
    }

    const submit = element.querySelector('input[type="submit"]');
    if (submit) submit.dispatchEvent(new MouseEvent('click', EVENT));
  }
}
