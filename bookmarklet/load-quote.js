function loadQuote () {
  const {
    quote = () => {
      throw new Error('Default `quote`.')
    }
  } = window.bupaGlobal || {};

  try {
    quote();
  } catch ({ message = 'An error occurred executing `quote`.'}) {
    console.error(message)
  }
}

(function () {
  if (document.querySelector('#bupa-global-quote')) {
    loadQuote();
  } else {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', 'https://rawgit.com/sequencemedia/Quote/master/index.js');
    script.setAttribute('id', 'bupa-global-quote');
    script.addEventListener('load', loadQuote);

    document.head.appendChild(script);
  }
})();
