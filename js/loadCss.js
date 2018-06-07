
$(window).on("load", function() {

  let bootstrap = document.createElement("link");
  bootstrap.setAttribute('rel', 'stylesheet');
  bootstrap.setAttribute('type', 'text/css');
  bootstrap.setAttribute('href', 'css/bootstrap.css');
  document.getElementsByTagName("head")[0].appendChild(bootstrap);

  let owl = document.createElement("link");
  owl.setAttribute('rel', 'stylesheet');
  owl.setAttribute('type', 'text/css');
  owl.setAttribute('href', 'css/owl.css');
  document.getElementsByTagName("head")[0].appendChild(owl);

  let animate = document.createElement("link");
  animate.setAttribute('rel', 'stylesheet');
  animate.setAttribute('type', 'text/css');
  animate.setAttribute('href', 'css/animate.css');
  document.getElementsByTagName("head")[0].appendChild(animate);

  let main = document.createElement("link");
  main.setAttribute('rel', 'stylesheet');
  main.setAttribute('type', 'text/css');
  main.setAttribute('href', 'css/main.css');
  document.getElementsByTagName("head")[0].appendChild(main);


});