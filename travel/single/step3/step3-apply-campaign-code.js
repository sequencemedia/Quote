/* globals MouseEvent */
/* eslint semi: 'off' */

import {
  isVisible
} from '../../../common/element.js';

import EVENT from '../../../common/event.js';

export default function applyCampaignCode () {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const campaignCode = element.querySelector('.campaign-code input[type="text"]');
    if (campaignCode) {
      campaignCode.value = 'family15';
      /*
       *  Raises synthetic jQuery event, not 'change'
       */
      campaignCode.dispatchEvent(new Event('input', EVENT));
    }

    const button = element.querySelector('.campaign-code button.cta');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
};
