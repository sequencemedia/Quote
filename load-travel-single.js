function loadTravelSingle () {
  const {
    travel: {
      single: {
        single = () => {
          throw new Error('Default `travel.single.single`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    single();
  } catch ({ message = 'An error occurred executing `travel.single.single`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadTravelSingle();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadTravelSingle);

    document.head.appendChild(script);
  }
})();
