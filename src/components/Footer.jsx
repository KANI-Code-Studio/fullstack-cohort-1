const Footer = () => {
  return (
    <footer class="w-full py-xl px-gutter bg-surface-container-lowest dark:bg-surface-container-highest border-t border-outline-variant relative z-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between items-start max-w-container-max mx-auto gap-8">
        <div class="flex flex-col gap-4">
          <span class="font-headline-sm text-headline-sm flex items-center font-bold text-primary">
            <img src="./kani_icon.png" class="h-10 w-10" alt="" />
             KANI
          </span>
          <p class="font-body-md text-body-md text-on-surface-variant">
            © 2026 KANI Code Studio. Build your future, block by block.
          </p>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/*          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all hover:translate-x-1"
            href="#"
          >
            Curriculum
          </a>
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all hover:translate-x-1"
            href="#"
          >
            Pricing
          </a>
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all hover:translate-x-1"
            href="#"
          >
            Mentors
          </a>
          <a
            class="font-body-md text-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim underline transition-all hover:translate-x-1"
            href="#"
          >
            FAQ
          </a>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
