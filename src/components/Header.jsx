const Header = () => {
  return (
    <header class="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md shadow-sm">
      <div class="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <div class="flex items-center gap-2">
          {/* <span */}
          {/*   class="material-symbols-outlined text-primary dark:text-primary-fixed-dim" */}
          {/*   data-icon="layers" */}
          {/*   data-weight="fill" */}
          {/*   style="font-variation-settings: 'FILL' 1;" */}
          {/* > */}
          {/*   layers */}
          {/* </span> */}
          <img src="./kani_icon.png" alt="" class="text-primary h-10"></img>
          <span class="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            KANI
          </span>
        </div>
        <nav class="desktop-nav gap-6 items-center"></nav>
        <button
          class="cta-button relative bg-primary text-on-primary font-body-md text-body-md font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 active:scale-95 flex items-center gap-2 overflow-hidden"
          onClick={() => {
            window.open(
              "https://payments.cashfree.com/forms/fullstack-cohort-1",
              "_blank",
            );
          }}
        >
          Enroll Now
        </button>
      </div>
    </header>
  );
};

export default Header;
