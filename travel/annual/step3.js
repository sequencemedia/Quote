/* globals MouseEvent */

import EVENT from '../../common/event.js';

export default function step3() {
  const button = document.querySelector('[data-step-index="3"] button.cta-button.quote-cta-next');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
}
