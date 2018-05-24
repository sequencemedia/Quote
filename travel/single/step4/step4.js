/* globals MouseEvent */
/* eslint semi: 'off' */

import {
  isVisible
} from '../../../common/element.js';

import EVENT from '../../../common/event.js';

export default function step4 () {
  const element = document.querySelector('[data-step-index="4"]');

  if (isVisible(element)) {
    const address1 = element.querySelector('input#address_1');
    if (address1) address1.value = '4 Callisons Place';

    const address2 = element.querySelector('input#address_2');
    if (address2) address2.value = 'Bellot Street';

    const addressCity = element.querySelector('input#address_city');
    if (addressCity) addressCity.value = 'Greenwich';

    const addressZip = element.querySelector('input#address_zip');
    if (addressZip) addressZip.value = 'SE10 0AJ';

    const emailAddress = element.querySelector('input.email-address-js');
    if (emailAddress) emailAddress.value = 'jonathan.perry@valtech.co.uk';

    const confirmEmailAddress = element.querySelector('input.confirm-email-address-js');
    if (confirmEmailAddress) confirmEmailAddress.value = 'jonathan.perry@valtech.co.uk';

    const acceptConditions = element.querySelector('.accept-conditions-js');
    if (acceptConditions) acceptConditions.dispatchEvent(new MouseEvent('click', EVENT));

    const button = document.querySelector('.buy-btn a');
    if (button) {
      const event = new MouseEvent('click', EVENT);
      if (!button.dispatchEvent(event)) event.preventDefault();
    }
  }
};
