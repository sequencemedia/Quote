/* globals MouseEvent */
/* eslint semi: "off" */

/*
 *  BASIC
 *    0/1
 *
 *  BASIC + NON MEDICAL
 *    2/3
 *
 *  BASIC + NON MEDICAL + TRIP CANCELLATION
 *    4/5
 */

import {
  isVisible
} from '../../../common/element.js';

import EVENT from '../../../common/event.js';

export default function step2 () {
  const element = document.querySelector('[data-step-index="2"]');

  if (isVisible(element)) {
    const button = element.querySelector('button.buy-cta');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
}
