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

(function Altapay () {
  const element = document.querySelector('section.altapay-main-container');

  if (isVisible(element)) {
    const EVENT = { bubbles: true, cancelable: true, view: window };

    const ccnInput = element.querySelector('#creditCardNumberInput');
    if (ccnInput) {
      ccnInput.value = '4444444444444444';
      ccnInput.dispatchEvent(new Event('change', EVENT));
    }

    const cvcInput = element.querySelector('#cvcInput');
    if (cvcInput) {
      cvcInput.value = '123';
      cvcInput.dispatchEvent(new Event('change', EVENT));
    }

    const form = element.querySelector('#CreditCard');
    if (form) form.submit();
  }
})();
