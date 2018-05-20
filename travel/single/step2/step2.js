/* globals MouseEvent */
/* eslint semi: "off" */

/*
 *  BASIC
 *    0/1
 *
 *  BASIC + NON MEDICAL
 *    2/3
 *
 *  BASIC + NON MEDICAL + TRIP CANCELLATION
 *    4/5
 */

(function step2 () {
  const EVENT = { bubbles: true, cancelable: true, view: window };

  const button = document.querySelector('[data-step-index="2"] button.buy-cta');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
})();
