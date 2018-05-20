(function quote () {
  const { location, location: { pathname } } = window;

  Object
    .keys(sessionStorage)
    .forEach((key) => {
      delete sessionStorage[key];
    });

  location.pathname = /^\/\w{2,3}\/quote/.test(pathname)
    ? pathname.match(/(^\/\w{2,3}\/quote)/).shift()
    : '/en/quote';
})();
