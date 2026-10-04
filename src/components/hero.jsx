const Hero = () => {
  return (
    <header
      id="home"
      className="bg-blue-50 text-blue-950 px-[5%] py-14 flex flex-wrap items-center justify-between gap-8 border-b-4 border-blue-500"
    >
      <div className="max-w-2xl">
        <div className="bg-blue-100 border border-blue-300 text-blue-700 px-4 py-1.5 rounded-full inline-block font-semibold text-sm mb-4 tracking-wide">
          <i className="fas fa-bolt mr-1"></i>
          Instant download
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-blue-950">
          Digital tools for creators & pros
        </h1>

        <p className="text-lg text-blue-800 max-w-lg">
          Get premium assets, templates, and software — delivered instantly.
          No shipping, no waiting.
        </p>
      </div>

      <div className="text-[8rem] text-blue-500 opacity-90 drop-shadow-2xl select-none hidden sm:block">
        <i className="fas fa-download"></i>
      </div>
    </header>
  );
};

export default Hero;