function loadTravelSingleStep2 () {
  const {
    travel: {
      single: {
        step2 = () => {
          throw new Error('Default `travel.single.step2`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    step2();
  } catch ({ message = 'An error occurred executing `travel.single.step2`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadTravelSingleStep2();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadTravelSingleStep2);

    document.head.appendChild(script);
  }
})();
