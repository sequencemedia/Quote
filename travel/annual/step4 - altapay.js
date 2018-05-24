/* eslint semi: "off" */

(function Altapay() {
  const ccnInput = document.querySelector('#creditCardNumberInput');
  if (ccnInput) ccnInput.value = '4444444444444444';

  const cvcInput = document.querySelector('#cvcInput');
  if (cvcInput) cvcInput.value = '123';

  const form = document.querySelector('#CreditCard');
  if (form) form.submit();
}());
