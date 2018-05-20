/* globals MouseEvent */
/* eslint semi: "off" */

/*
 *  BASIC
 *    data-product-index 0 button 0/1
 *    button 0/1
 *
 *  BASIC + NON MEDICAL
 *    data-product-index 1 button 0/1
 *    button 2/3
 *
 *  BASIC + NON MEDICAL + TRIP CANCELLATION
 *    data-product-index 2 button 0/1
 *    button 4/5
 */

(function step2 () {
  const EVENT = { bubbles: true, cancelable: true, view: window };

  const button = document.querySelector('[data-step-index="2"] [data-product-index="1"] button.buy-cta');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
})();
