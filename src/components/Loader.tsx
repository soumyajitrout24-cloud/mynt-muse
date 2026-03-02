const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] overflow-hidden bg-gradient-to-br from-[#022c22] via-[#064e3b] to-black">

      {/* Metallic Ambient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl animate-pulse"></div>

      {/* Logo - Proper Shape Glow (No Rectangle) */}
      <img
        src="/logoo.png"
        alt="Mynt Girlfriend"
        className="w-44 md:w-60 mb-10 drop-shadow-[0_0_25px_hsl(var(--gold)/0.7)]"
      />

      {/* Welcome Text - Metallic */}
      <h1 className="text-3xl md:text-4xl font-serif tracking-wide gold-metallic mb-2">
        Welcome to
      </h1>

      <h2 className="text-xl md:text-2xl gold-metallic tracking-[0.3em] uppercase mb-12">
        Mynt Girlfriend
      </h2>

      {/* Metallic Loading Dots */}
      <div className="flex gap-4">
        <span className="w-3 h-3 rounded-full bg-gold animate-bounce shadow-[0_0_20px_hsl(var(--gold)/0.8)]"></span>
        <span className="w-3 h-3 rounded-full bg-gold animate-bounce delay-150 shadow-[0_0_20px_hsl(var(--gold)/0.8)]"></span>
        <span className="w-3 h-3 rounded-full bg-gold animate-bounce delay-300 shadow-[0_0_20px_hsl(var(--gold)/0.8)]"></span>
      </div>

      {/* Tagline */}
      <p className="absolute bottom-10 text-gold/70 tracking-[0.4em] text-xs uppercase">
        Luxury • Elegance • Desire
      </p>

    </div>
  );
};

export default Loader;