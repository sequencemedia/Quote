/* eslint no-console: "off" */

(function bookmarklet() {
  function execute() {
    const {
      quote: {
        travel: {
          single: {
            single = () => {
              throw new Error('Default `quote.travel.single`.');
            }
          } = {}
        } = {}
      } = {}
    } = window.bupaGlobal || {};

    try {
      single();
    } catch ({ message = 'An error occurred executing `quote.travel.single`.' }) {
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
