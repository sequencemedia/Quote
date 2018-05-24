(function () {
  if (!document.querySelector('#quote-bookmarklet')) {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', `https://rawgit.com/sequencemedia/Quote/master/index.js?${(new Date).valueOf()}`);
    script.setAttribute('id', 'quote-bookmarklet');
    script.addEventListener('load', function () {
      const { quote = () => { throw new Error('Default `quote`.') } } = window.bupaGlobal || {};

      try {
        quote();
      } catch ({ message = 'An error occurred executing `quote`.'}) {
        console.error(message)
      }
    });

    document.head.appendChild(script);
  }
})();
