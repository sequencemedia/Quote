function loadQuoteTravelSingleStep3ApplyBrokerCode () {
  const {
    travel: {
      single: {
        step3: {
          applyBrokerCode = () => {
            throw new Error('Default `quote.travel.single.step3.applyBrokerCode`.')
          }
        } = {}
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    applyBrokerCode();
  } catch ({ message = 'An error occurred executing `quote.travel.single.step3.applyBrokerCode`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuoteTravelSingleStep3ApplyBrokerCode();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', loadQuoteTravelSingleStep3ApplyBrokerCode);

    document.head.appendChild(script);
  }
})();
