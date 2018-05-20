/* globals MouseEvent */
/* eslint semi: 'off' */

(function applyBupaMember () {
  const EVENT = { bubbles: true, cancelable: true, view: window };;

  const bupaMember = document.querySelector('[data-step-index="3"] .bupa-member input[type="text"]');
  if (bupaMember) {
    bupaMember.value = '7777777';
    /*
     *  Raises synthetic jQuery event, not 'change'
     */
    bupaMember.dispatchEvent(new Event('input', EVENT));
  }

  const button = document.querySelector('[data-step-index="3"] .bupa-member button.cta');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
})();
