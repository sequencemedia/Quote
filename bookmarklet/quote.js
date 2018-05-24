/* eslint no-console: "off" */

(function bookmarklet() {
  function execute() {
    const {
      quote = () => {
        throw new Error('Default `quote`.');
      }
    } = window.bupaGlobal || {};

    try {
      quote();
    } catch ({ message = 'An error occurred executing `quote`.' }) {
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
