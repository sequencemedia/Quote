/* eslint no-console: "off" */

(function bookmarklet() {
  function execute() {
    const {
      travel: {
        single: {
          step3: {
            applyBupaMember = () => {
              throw new Error('Default `quote.travel.single.step3.applyBupaMember`.');
            }
          } = {}
        } = {}
      } = {}
    } = window.bupaGlobal || {};

    try {
      applyBupaMember();
    } catch ({ message = 'An error occurred executing `quote.travel.single.step3.applyBupaMember`.' }) {
      console.error(message);
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
}());
