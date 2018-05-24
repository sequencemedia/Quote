function loadTravelSingleStep3 () {
  const {
    travel: {
      single: {
        step3 = () => {
          throw new Error('Default `travel.single.step2`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    step3();
  } catch ({ message = 'An error occurred executing `travel.single.step2`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadTravelSingleStep3();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadTravelSingleStep3);

    document.head.appendChild(script);
  }
})();
