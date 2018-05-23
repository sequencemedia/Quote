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

function isVisible (element) {
  return !!(
    element && !(window.getComputedStyle(element)
      .getPropertyValue('display') === 'none')
  );
}

function getVisible (elements) {
  return Array.from(elements)
    .find(isVisible) || null;
}

(function step2 () {
  const element = document.querySelector('[data-step-index="2"]');

  if (isVisible(element)) {
    const EVENT = { bubbles: true, cancelable: true, view: window };

    const button = element.querySelector('button.buy-cta');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
})();
