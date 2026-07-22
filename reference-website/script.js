// Keep anchored sections below the wrapped mobile header.

(() => {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const updateMobileHeaderHeight = () => {
    const isMobile = window.matchMedia(
      "(max-width: 600px)"
    ).matches;

    const height = isMobile
      ? Math.ceil(header.getBoundingClientRect().height)
      : 0;

    document.documentElement.style.setProperty(
      "--mobile-header-height",
      `${height}px`
    );
  };

  updateMobileHeaderHeight();

  window.addEventListener(
    "load",
    updateMobileHeaderHeight
  );

  window.addEventListener(
    "resize",
    updateMobileHeaderHeight
  );

  if ("ResizeObserver" in window) {
    const headerObserver = new ResizeObserver(
      updateMobileHeaderHeight
    );

    headerObserver.observe(header);
  }
})();
