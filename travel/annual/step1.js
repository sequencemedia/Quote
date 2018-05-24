/* globals FocusEvent, MouseEvent */
/* eslint semi: "off" */

(function step1() {
  const EVENT = { bubbles: true, cancelable: true, view: window };

  const startDate = document.querySelector('[data-step-index="1"] select#month-select');
  if (startDate) startDate.selectedIndex = 1;

  const title = document.querySelector('[data-step-index="1"] select#business-title');
  if (title) title.selectedIndex = Array.from(title).findIndex(({ value }) => value.toLowerCase() === 'mr');

  const firstName = document.querySelector('[data-step-index="1"] input#first-name');
  if (firstName) firstName.value = 'Jonathan';

  const lastName = document.querySelector('[data-step-index="1"] input#last-name');
  if (lastName) lastName.value = 'Perry';

  const day = document.querySelector('[data-step-index="1"] input#date-day');
  if (day) day.value = '15';

  const month = document.querySelector('[data-step-index="1"] input#date-month');
  if (month) month.value = '10';

  const year = document.querySelector('[data-step-index="1"] input#date-year');
  if (year) year.value = '1973';

  const button = document.querySelector('[data-step-index="1"] button.cta-button');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
}());
