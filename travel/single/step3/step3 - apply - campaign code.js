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

(function applyCampaignCode () {
  const element = document.querySelector('[data-step-index="3"]');

  if (isVisible(element)) {
    const EVENT = { bubbles: true, cancelable: true, view: window };;

    const campaignCode = element.querySelector('.campaign-code input[type="text"]');
    if (campaignCode) {
      campaignCode.value = 'family15';
      /*
       *  Raises synthetic jQuery event, not 'change'
       */
      campaignCode.dispatchEvent(new Event('input', EVENT));
    }

    const button = element.querySelector('.campaign-code button.cta');
    if (button) button.dispatchEvent(new MouseEvent('click', EVENT));
  }
})();
