function loadQuoteTravelSingle () {
  const {
    travel: {
      single: {
        single = () => {
          throw new Error('Default `quote.travel.single`.')
        }
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    single();
  } catch ({ message = 'An error occurred executing `quote.travel.single`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuoteTravelSingle();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadQuoteTravelSingle);

    document.head.appendChild(script);
  }
})();
