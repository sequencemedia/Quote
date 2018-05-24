/* globals MouseEvent */
/* eslint semi: "off" */

import {
  isVisible
} from '../../../common/element.js';

import EVENT from '../../../common/event.js';

export default function step3 () {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const button = element.querySelector('button.cta-button.quote-cta-next');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
};
