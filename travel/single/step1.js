/* globals FocusEvent, MouseEvent */
/* eslint semi: "off" */

import {
  isVisible
} from '../../common/element.js';

import EVENT from '../../common/event.js';

export default function step1 () {
  const element = document.querySelector('[data-step-index="1"]');

  if (isVisible(element)) {
     const startDate = element.querySelector('input#startdate');
    if (startDate) {
      startDate.dispatchEvent(new FocusEvent('focus', EVENT));
      startDate.dispatchEvent(new MouseEvent('click', EVENT));
      const [ day ] = Array.from(document.querySelectorAll('.datepicker .day:not(.disabled)'));
      if (day) day.dispatchEvent(new MouseEvent('click', EVENT));
    }

    const endDate = element.querySelector('input#finishdate');
    if (endDate) {
      endDate.dispatchEvent(new FocusEvent('focus', EVENT));
      endDate.dispatchEvent(new MouseEvent('click', EVENT));
      const [ day ] = Array.from(document.querySelectorAll('.datepicker .day:not(.disabled)'));
      if (day) day.dispatchEvent(new MouseEvent('click', EVENT));
    }

    const title = element.querySelector('select#business-title');
    if (title) title.selectedIndex = Array.from(title).findIndex(({ value }) => value.toLowerCase() === 'mr');

    const firstName = element.querySelector('input#first-name');
    if (firstName) firstName.value = 'Jonathan';

    const lastName = element.querySelector('input#last-name');
    if (lastName) lastName.value = 'Perry';

    const day = element.querySelector('input#date-day');
    if (day) day.value = '15';

    const month = element.querySelector('input#date-month');
    if (month) month.value = '10';

    const year = element.querySelector('input#date-year');
    if (year) year.value = '1973';

    const button = element.querySelector('button.cta-button');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
};
