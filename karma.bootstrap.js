window.__karma__.loaded = function() {
  var s = document.createElement('script');
  s.setAttribute('src', 'base/node_modules/steal/steal.js');
  s.setAttribute('main', 'test/test');
  document.head.appendChild(s);

  s.onload = function () {
    steal.done().then(function(){
      if(window.__karma__) {
        window.__karma__.start();
      }
    });
  };
};
