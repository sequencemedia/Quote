/* globals MouseEvent */
/* eslint semi: 'off' */

(function applyCampaignCode () {
  const EVENT = { bubbles: true, cancelable: true, view: window };;

  const campaignCode = document.querySelector('[data-step-index="3"] .campaign-code input[type="text"]');
  if (campaignCode) {
    campaignCode.value = 'family15';
    /*
     *  Raises synthetic jQuery event, not 'change'
     */
    campaignCode.dispatchEvent(new Event('input', EVENT));
  }

  const button = document.querySelector('[data-step-index="3"] .campaign-code button.cta');
  if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
})();
