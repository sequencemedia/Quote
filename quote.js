export default function quote () {
  const { location, location: { pathname } } = window;

  if (location.toString().includes('bupaglobal')) {
    Object
      .keys(sessionStorage)
      .forEach((key) => {
        delete sessionStorage[key];
      });

    location.pathname = /^\/\w{2,3}\/quote/.test(pathname)
      ? pathname.match(/(^\/\w{2,3}\/quote)/).shift()
      : pathname.match(/(^\/\w{2,3})/).shift() + '/quote';
  }
}
