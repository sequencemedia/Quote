function loadQuoteTravelSingleStep2SelectBasicNonMedicalTripCancellation () {
  const {
    travel: {
      single: {
        step2: {
          selectBasicNonMedicalTripCancellation = () => {
            throw new Error('Default `quote.travel.single.step2.selectBasicNonMedicalTripCancellation`.')
          }
        } = {}
      } = {}
    } = {}
  } = window.bupaGlobal || {};

  try {
    selectBasicNonMedicalTripCancellation();
  } catch ({ message = 'An error occurred executing `quote.travel.single.step2.selectBasicNonMedicalTripCancellation`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuoteTravelSingleStep2SelectBasicNonMedicalTripCancellation();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', loadQuoteTravelSingleStep2SelectBasicNonMedicalTripCancellation);

    document.head.appendChild(script);
  }
})();
