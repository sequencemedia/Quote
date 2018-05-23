/* globals MouseEvent */
/* eslint semi: "off" */

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

(function step3 () {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const EVENT = { bubbles: true, cancelable: true, view: window };

    const button = element.querySelector('button.cta-button.quote-cta-next');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
})();
