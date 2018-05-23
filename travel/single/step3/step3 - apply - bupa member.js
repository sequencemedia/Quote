/* globals MouseEvent */
/* eslint semi: 'off' */

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

(function applyBupaMember () {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const EVENT = { bubbles: true, cancelable: true, view: window };

    const bupaMember = element.querySelector('.bupa-member input[type="text"]');
    if (bupaMember) {
      bupaMember.value = '7777777';
      /*
       *  Raises synthetic jQuery event, not 'change'
       */
      bupaMember.dispatchEvent(new Event('input', EVENT));
    }

    const button = element.querySelector('.bupa-member button.cta');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
})();
