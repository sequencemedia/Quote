(function () {
  function execute () {
    const {
      travel: {
        single: {
          step3: {
            step3 = () => {
              throw new Error('Default `quote.travel.single.step3`.')
            }
          } = {}
        } = {}
      } = {}
    } = window.bupaGlobal || {};

    try {
      step3();
    } catch ({ message = 'An error occurred executing `quote.travel.single.step3`.'}) {
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
