/* globals MouseEvent */
/* eslint semi: "off" */

(function step2 () {
  const EVENT = { bubbles: true, cancelable: true, view: window };

  const button = document.querySelector('[data-step-index="2"] button.buy-cta');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
})();
