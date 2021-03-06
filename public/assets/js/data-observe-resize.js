//https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/
// Only run if ResizeObserver is supported.
$(document).ready(function () {
  if ("ResizeObserver" in self) {
    // Create a single ResizeObserver instance to handle all
    // container elements. The instance is created with a callback,
    // which is invoked as soon as an element is observed as well
    // as any time that element's size changes.
    var ro = new ResizeObserver(function (entries) {
      // Default breakpoints that should apply to all observed
      // elements that don't define their own custom breakpoints.
      var defaultBreakpoints = { SM: 384, MD: 576, LG: 768, XL: 960 };

      entries.forEach(function (entry) {
        // If breakpoints are defined on the observed element,
        // use them. Otherwise use the defaults.
        var breakpoints = entry.target.dataset.breakpoints
          ? JSON.parse(entry.target.dataset.breakpoints)
          : defaultBreakpoints;

        // Update the matching breakpoints on the observed element.
        Object.keys(breakpoints).forEach(function (breakpoint) {
          var minWidth = breakpoints[breakpoint];
          if (entry.contentRect.width >= minWidth) {
            entry.target.classList.add(breakpoint);
          } else {
            entry.target.classList.remove(breakpoint);
          }
        });
      });
    });

    // Find all elements with the `data-observe-resizes` attribute
    // and start observing them.

    var elements = document.querySelectorAll("[data-observe-resizes]");
    console.log(elements);
    for (var element, i = 0; (element = elements[i]); i++) {
      console.log("fghjk");
      ro.observe(element);
    }
  }
});
