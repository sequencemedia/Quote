function loadQuoteTravelSingleStep4 () {
  const {
    travel: {
      single: {
        step4: {
          step4 = () => {
            throw new Error('Default `quote.travel.single.step4`.')
          }
        } = {}
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    step4();
  } catch ({ message = 'An error occurred executing `quote.travel.single.step4`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuoteTravelSingleStep4();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', loadQuoteTravelSingleStep4);

    document.head.appendChild(script);
  }
})();
