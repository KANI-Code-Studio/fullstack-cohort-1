const Home = () => {
  return (
    <main className="flex-grow pt-[100px] pb-xl mesh-bg relative">
      <section className="max-w-container-max mx-auto px-sm md:px-gutter py-lg md:py-xl flex flex-col md:flex-row items-center gap-xl fade-in-up">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full border border-outline-variant/50">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></span>
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              NEXT COHORT ENROLLING
            </span>
          </div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
            Stop Watching. <br />
            Start{" "}
            <span className="text-primary relative inline-block">
              Building.
              <svg
                className="absolute w-full h-3 -bottom-1 left-0 text-secondary-fixed-dim/40"
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q50,10 100,5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                ></path>
              </svg>
            </span>
            <br /> Master Full Stack.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Escape tutorial hell with a dopamine-driven, modular approach to
            coding. Learn to build and deploy production-ready apps using
            industry-standard tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              className="cta-button relative inline-flex justify-center items-center px-6 py-4 bg-secondary text-on-secondary font-headline-sm text-headline-sm font-bold rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-200 active:scale-95 overflow-hidden"
              href="https://payments.cashfree.com/forms/fullstack-cohort-1"
            >
              Secure Your Spot
            </a>
            <a
              className="inline-flex justify-center items-center px-6 py-4 bg-transparent border-2 border-primary text-primary font-body-md text-body-md font-bold rounded-lg hover:bg-primary/5 transition-colors duration-200 active:scale-95"
              href="https://kani-group.notion.site/Full-Stack-Cohort-1-Curriculum-Index-376210d2e88e80c8b32af77eca6524c1"
            >
              View Full Curriculum
            </a>
          </div>
        </div>
        <div className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary-container/20 blur-3xl -z-10 rounded-full"></div>
          <div className="lego-card rounded-xl overflow-hidden relative transform rotate-1 transition-transform duration-500 float-y-1">
            <div className="bg-surface-container border-b border-outline-variant px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="font-label-mono text-[12px] text-on-surface-variant ml-2">
                app.js
              </span>
            </div>
            <div className="code-block p-6 font-label-mono text-label-mono overflow-x-auto">
              <pre>
                <code>
                  <span className="text-tertiary-fixed-dim">import</span> &#123;{" "}
                  <span>LegoStack</span> &#125;{" "}
                  <span className="text-tertiary-fixed-dim">from</span>{" "}
                  <span className="text-secondary-fixed-dim">
                    '@fullstack/core'
                  </span>
                  ;{"\n\n"}
                  <span className="text-primary-fixed-dim">const</span>{" "}
                  <span>developer</span> ={" "}
                  <span className="text-tertiary-fixed-dim">new</span>{" "}
                  <span>LegoStack</span>(&#123;
                  {"\n  "}
                  <span className="text-secondary-fixed-dim">mode:</span>{" "}
                  <span className="text-secondary-fixed-dim">
                    'dopamine-driven'
                  </span>
                  ,{"\n  "}
                  <span className="text-secondary-fixed-dim">blocks:</span> [
                  <span className="text-secondary-fixed-dim">'React'</span>,{" "}
                  <span className="text-secondary-fixed-dim">'Node'</span>,{" "}
                  <span className="text-secondary-fixed-dim">'DB'</span>]{"\n"}
                  &#125;);
                  {"\n\n"}
                  <span className="text-primary-fixed-dim">await</span>{" "}
                  <span>developer</span>.
                  <span className="text-tertiary-fixed-dim">
                    escapeTutorialHell
                  </span>
                  ();
                  {"\n"}
                  <span>console</span>.
                  <span className="text-tertiary-fixed-dim">log</span>(
                  <span className="text-secondary-fixed-dim">
                    "Deployed 🚀"
                  </span>
                  );
                </code>
              </pre>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 lego-card p-4 rounded-lg flex items-center gap-3 float-y-2">
            <span
              className="material-symbols-outlined text-secondary text-3xl"
              data-icon="check_circle"
            >
              check_circle
            </span>
            <div>
              <p className="font-body-md text-body-md font-bold text-on-surface">
                Live Deployment
              </p>
              <p className="font-body-md text-sm text-on-surface-variant">
                In under 5 minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-sm md:px-gutter py-lg md:py-xl fade-in-up delay-200 mt-12 bg-white rounded-3xl lego-notch-top relative z-10 shadow-sm border-t border-outline-variant/30 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline-md text-headline-md md:font-display-lg md:text-display-lg text-on-surface mb-4">
            We do things differently here.
            <br /> <span className="text-primary">Lego Block Engineering.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Stop trying to memorize the entire ocean. Build a boat instead. We
            teach you to connect modular pieces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12">
          <div className="lego-card rounded-xl p-md flex flex-col h-full group fade-in-up delay-100">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined" data-icon="bolt">
                bolt
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
              Dopamine-Driven Development
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Rapid visual feedback loops. You won't wait 4 weeks to see
              something on screen. We build UI blocks first, wiring them up
              layer by layer.
            </p>
          </div>
          <div className="lego-card rounded-xl p-md flex flex-col h-full group fade-in-up delay-200">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined"
                data-icon="construction"
              >
                construction
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
              Modern Tooling
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow mb-4">
              Learn the stack that startups actually use today, not outdated
              boilerplate.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="tech-chip-react font-label-mono text-label-mono px-2 py-1 rounded inline-block float-y-1">
                React
              </span>
              <span className="tech-chip-mongo font-label-mono text-label-mono px-2 py-1 rounded inline-block float-y-2">
                MongoDB
              </span>
              <span className="tech-chip-fastapi font-label-mono text-label-mono px-2 py-1 rounded inline-block float-y-3">
                Express
              </span>
            </div>
          </div>
          <div className="lego-card rounded-xl p-md flex flex-col h-full group fade-in-up delay-300">
            <div className="w-12 h-12 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
              <span
                className="material-symbols-outlined"
                data-icon="view_in_ar"
              >
                view_in_ar
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">
              Modular Architecture
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">
              Connecting frontend to backend, block by block. Understand the
              'why' behind APIs, state management, and database schemas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
