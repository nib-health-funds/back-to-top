
/**
 * Hook up a back-to-top button - the button will only be visible when the user has scrolled a certain percentage of the page
 * @param   {Object}        options                 The component options
 * @param   {HTMLElement}   options.element         The container
 * @param   {HTMLElement}   [options.hideClass]     The class added to the container when the container should be hidden
 * @param   {HTMLElement}   [options.hideDistance]  The % of the window height for which the container should be hidden
 */
module.exports = function(options) {

  var el = options.element;
  var hc = options.hideClass    || 'is-hidden';
  var hd = options.hideDistance || 0.25;

  window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > window.innerHeight*hd) { //show the back-to-top button when the user has scrolled down x% of the window
      el.classList.remove(hc);
    } else {
      el.classList.add(hc);
    }
  });

  el.addEventListener('click', function() {
    window.scrollTo(0,0);
  });

};
