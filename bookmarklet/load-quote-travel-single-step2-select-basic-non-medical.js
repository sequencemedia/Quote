function loadQuoteTravelSingleStep2SelectBasicNonMedcial () {
  const {
    travel: {
      single: {
        step2: {
          selectBasicNonMedical = () => {
            throw new Error('Default `quote.travel.single.step2.selectBasicNonMedical`.')
          }
        } = {}
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    selectBasicNonMedical();
  } catch ({ message = 'An error occurred executing `quote.travel.single.step2.selectBasicNonMedical`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuoteTravelSingleStep2SelectBasicNonMedcial();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', loadQuoteTravelSingleStep2SelectBasic);

    document.head.appendChild(script);
  }
})();
