/* globals FocusEvent, MouseEvent */

import EVENT from '../../common/event.js';

export default function annual() {
  {
    const button = document.querySelector('button[data-cover-type="travel"]');
    if (button) {
      button.dispatchEvent(new FocusEvent('focus', EVENT));
      button.dispatchEvent(new MouseEvent('click', EVENT));
    }
  }

  {
    const button = document.querySelector('button[data-cover-period="annual"]');
    if (button) {
      button.dispatchEvent(new FocusEvent('focus', EVENT));
      button.dispatchEvent(new MouseEvent('click', EVENT));
    }

    const country = document.querySelector('#country-quote-travel');
    if (country) {
      country.dispatchEvent(new FocusEvent('focus', EVENT));
      country.dispatchEvent(new MouseEvent('click', EVENT));
      country.value = 'United Kingdom';
    }

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
