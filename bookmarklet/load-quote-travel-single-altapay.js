function loadQuoteTravelSingleAltapay () {
  const {
    travel: {
      single: {
        altapay = () => {
          throw new Error('Default `quote.travel.single.altapay`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    altapay();
  } catch ({ message = 'An error occurred executing `quote.travel.single.altapay`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuoteTravelSingleAltapay();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', loadQuoteTravelSingleAltapay);

    document.head.appendChild(script);
  }
})();
