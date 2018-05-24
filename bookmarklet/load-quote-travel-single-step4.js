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
  const script = document.querySelector('#bupa-global-quote');
  if (script) {
    script.dispatchEvent(new Event('load'));
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', loadQuoteTravelSingleStep4);

    document.head.appendChild(script);
  }
})();
