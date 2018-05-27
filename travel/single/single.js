/* eslint no-param-reassign: "off" */
/* globals FocusEvent, MouseEvent */

import EVENT from '../../common/event.js';

export default function single() {
  {
    const button = document.querySelector('button[data-cover-type="travel"]');
    if (button) {
      button.dispatchEvent(new FocusEvent('focus', EVENT));
      button.dispatchEvent(new MouseEvent('click', EVENT));
    }
  }

  {
    const button = document.querySelector('button[data-cover-period="single"]');
    if (button) {
      button.dispatchEvent(new FocusEvent('focus', EVENT));
      button.dispatchEvent(new MouseEvent('click', EVENT));
    }

    document.querySelectorAll('#country-quote-travel')
      .forEach((country) => {
        country.dispatchEvent(new FocusEvent('focus', EVENT));
        country.dispatchEvent(new MouseEvent('click', EVENT));
        country.value = 'United Kingdom';
        country.dispatchEvent(new Event('change', EVENT));
      });

    document.querySelectorAll('.alternative-country-select')
      .forEach((country) => {
        country.dispatchEvent(new FocusEvent('focus', EVENT));
        country.dispatchEvent(new MouseEvent('click', EVENT));
        country.selectedIndex = 228;
        country.dispatchEvent(new Event('change', EVENT));
      });

    const acceptPredictedCountry = document.querySelector('.accept-predicted-country');
    if (acceptPredictedCountry) acceptPredictedCountry.dispatchEvent(new MouseEvent('click', EVENT));
  }

  {
    const button = document.querySelector('#step0-cta-continue');
    if (button) {
      button.dispatchEvent(new FocusEvent('focus', EVENT));
      button.dispatchEvent(new MouseEvent('click', EVENT));
    }
  }
}
