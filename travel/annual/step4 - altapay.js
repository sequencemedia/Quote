/* eslint semi: "off" */

(function Altapay () {
  var creditCardNumberInput = document.querySelector('#creditCardNumberInput');
  if (creditCardNumberInput) creditCardNumberInput.value = '4444444444444444';

  var cvcInput = document.querySelector('#cvcInput');
  if (cvcInput) cvcInput.value = '123';

  var form = document.querySelector('#CreditCard');
  if (form) form.submit();
})();
