/* globals MouseEvent */
/* eslint semi: 'off' */

(function applyBrokerCode () {
  const EVENT = { bubbles: true, cancelable: true, view: window };;

  const showBroker = document.querySelector('[data-step-index="3"] input[type="radio"]#show-broker-code');
  if (showBroker) showBroker.dispatchEvent(new MouseEvent('click', EVENT));;

  const brokerCode = document.querySelector('[data-step-index="3"] input.broker-code-input-js');
  if (brokerCode) brokerCode.value = '123456789';
})();
