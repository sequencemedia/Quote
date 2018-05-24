(function () {
  if (!document.querySelector('#quote-bookmarklet')) {
    const script = document.createElement('script');

    script.setAttribute('type', 'module');
    script.setAttribute('src', `https://rawgit.com/sequencemedia/Quote/master/index.js?${(new Date).valueOf()}`);
    script.setAttribute('id', 'quote-bookmarklet');

    document.head.appendChild(script);
  }
})();
