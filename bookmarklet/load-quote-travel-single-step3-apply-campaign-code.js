function loadQuoteTravelSingleStep3ApplyCampaignCode () {
  const {
    travel: {
      single: {
        step3: {
          applyCampaignCode = () => {
            throw new Error('Default `quote.travel.single.step3.applyCampaignCode`.')
          }
        } = {}
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    applyCampaignCode();
  } catch ({ message = 'An error occurred executing `quote.travel.single.step3.applyCampaignCode`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuoteTravelSingleStep3ApplyCampaignCode();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', loadQuoteTravelSingleStep3ApplyCampaignCode);

    document.head.appendChild(script);
  }
})();
