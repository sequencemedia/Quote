/* globals MouseEvent */
/* eslint semi: "off" */

(function step3() {
  const EVENT = { bubbles: true, cancelable: true, view: window };

  const button = document.querySelector('[data-step-index="3"] button.cta-button.quote-cta-next');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
}());
