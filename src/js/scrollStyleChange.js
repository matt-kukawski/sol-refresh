export function scrollStyleChange() {
    console.log('scroll track added');
    if (
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
      ) {
        let observer = new IntersectionObserver(entries => {
            if (entries[0].boundingClientRect.y < 0) {
            document.body.classList.add("header-not-at-top");
            console.log('scrolled past down');
            } else {
            document.body.classList.remove("header-not-at-top");
            console.log('scrolled past up');
            }
        });
        const element = document.querySelector("#top-of-site-pixel-anchor");
        observer.observe(element);
      }
};

// 