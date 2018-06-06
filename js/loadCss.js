
$(window).on("load", function() {

  let bootstrap = document.createElement("link");
  bootstrap.setAttribute('rel', 'stylesheet');
  bootstrap.setAttribute('type', 'text/css');
  bootstrap.setAttribute('href', 'css/bootstrap.css');
  document.getElementsByTagName("head")[0].appendChild(bootstrap);

  let owlCar = document.createElement("link");
  owlCar.setAttribute('rel', 'stylesheet');
  owlCar.setAttribute('type', 'text/css');
  owlCar.setAttribute('href', 'css/owl.carousel.css');
  document.getElementsByTagName("head")[0].appendChild(owlCar);

  let owlTrans = document.createElement("link");
  owlTrans.setAttribute('rel', 'stylesheet');
  owlTrans.setAttribute('type', 'text/css');
  owlTrans.setAttribute('href', 'css/owl.transitions.css');
  document.getElementsByTagName("head")[0].appendChild(owlTrans);

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