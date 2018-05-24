/* globals MouseEvent */
/* eslint semi: 'off' */

import { isVisible } from '../../../common/element.js';

import EVENT from '../../../common/event.js';

export default function applyBrokerCode() {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const showBroker = element.querySelector('input[type="radio"]#show-broker-code');
    if (showBroker) showBroker.dispatchEvent(new MouseEvent('click', EVENT));

    const brokerCode = element.querySelector('input.broker-code-input-js');
    if (brokerCode) brokerCode.value = '123456789';
  }
}
