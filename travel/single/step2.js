/* globals MouseEvent */

import EVENT from '../../common/event.js';

export default function step2() {
  const button = document.querySelector('[data-step-index="2"] button.buy-cta');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
}
