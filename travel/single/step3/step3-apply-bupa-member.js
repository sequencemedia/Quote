/* globals MouseEvent */
/* eslint semi: 'off' */

import { isVisible } from '../../../common/element.js';

import EVENT from '../../../common/event.js';

export default function applyBupaMember() {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const bupaMember = element.querySelector('.bupa-member input[type="text"]');
    if (bupaMember) {
      bupaMember.value = '7777777';
      /*
       *  Raises synthetic jQuery event, not 'change'
       */
      bupaMember.dispatchEvent(new Event('input', EVENT));
    }

    const button = element.querySelector('.bupa-member button.cta');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
}
