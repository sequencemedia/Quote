function loadTravelSingleStep4 () {
  const {
    travel: {
      single: {
        step4 = () => {
          throw new Error('Default `travel.single.step2`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    step4();
  } catch ({ message = 'An error occurred executing `travel.single.step2`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadTravelSingleStep4();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadTravelSingleStep4);

    document.head.appendChild(script);
  }
})();
