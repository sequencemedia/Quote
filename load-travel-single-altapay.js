function loadTravelSingleAltapay () {
  const {
    travel: {
      single: {
        altapay = () => {
          throw new Error('Default `travel.single.altapay`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    altapay();
  } catch ({ message = 'An error occurred executing `travel.single.altapay`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadTravelSingleAltapay();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadTravelSingleAltapay);

    document.head.appendChild(script);
  }
})();
