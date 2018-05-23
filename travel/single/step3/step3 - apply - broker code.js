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

(function applyBrokerCode () {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const EVENT = { bubbles: true, cancelable: true, view: window };

    const showBroker = element.querySelector('input[type="radio"]#show-broker-code');
    if (showBroker) showBroker.dispatchEvent(new MouseEvent('click', EVENT));

    const brokerCode = element.querySelector('input.broker-code-input-js');
    if (brokerCode) brokerCode.value = '123456789';
  }
})();
