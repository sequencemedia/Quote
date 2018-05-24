(function () {
  function execute () {
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

  if (document.querySelector('#bupa-global-quote')) {
    execute();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');

    script.addEventListener('load', execute);

    document.head.appendChild(script);
  }
})();
