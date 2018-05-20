/* globals MouseEvent */
/* eslint semi: 'off' */

(function step4 () {
  const EVENT = { bubbles: true, cancelable: true, view: window };

  const address1 = document.querySelector('[data-step-index="4"] input#address_1');
  if (address1) address1.value = '4 Callisons Place';

  const address2 = document.querySelector('[data-step-index="4"] input#address_2');
  if (address2) address2.value = 'Bellot Street';

  const addressCity = document.querySelector('[data-step-index="4"] input#address_city');
  if (addressCity) addressCity.value = 'Greenwich';

  const addressZip = document.querySelector('[data-step-index="4"] input#address_zip');
  if (addressZip) addressZip.value = 'SE10 0AJ';

  const emailAddress = document.querySelector('[data-step-index="4"] input.email-address-js');
  if (emailAddress) emailAddress.value = 'jonathan.perry@valtech.co.uk';

  const confirmEmailAddress = document.querySelector('[data-step-index="4"] input.confirm-email-address-js');
  if (confirmEmailAddress) confirmEmailAddress.value = 'jonathan.perry@valtech.co.uk';

  const acceptConditions = document.querySelector('[data-step-index="4"] .accept-conditions-js');
  if (acceptConditions) acceptConditions.dispatchEvent(new MouseEvent('click', EVENT));

  const button = document.querySelector('.buy-btn a');
  if (button) {
    const event = new MouseEvent('click', EVENT);
    if (!button.dispatchEvent(event)) event.preventDefault();
  }
})();
