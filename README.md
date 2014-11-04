# back-to-top

A component that shows/hides an element when the user has scrolled a certain % of the page, and scrolls to the top of the page when clicked.

## Example

    var backToTop = require('back-to-top');
    backToTop({
      element:        document.querySelector('.js-back-to-top'),
      hideClass:      'u-hidden',
      hideDistance:   0.25
    });