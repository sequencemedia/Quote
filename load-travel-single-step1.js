function loadTravelSingleStep1 () {
  const {
    travel: {
      single: {
        step1 = () => {
          throw new Error('Default `travel.single.step1`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    step1();
  } catch ({ message = 'An error occurred executing `travel.single.step1`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadTravelSingleStep1();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadTravelSingleStep1);

    document.head.appendChild(script);
  }
})();
