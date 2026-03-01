const Loader = () => {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999]"
      style={{ backgroundColor: '#064e3b' }} // dark emerald
    >

      {/* Logo */}
      <img
        src="/logoo.png"
        alt="Mynt Girlfriend"
        className="w-48 md:w-64 mb-12"
      />

      {/* Dots Loader */}
      <div className="flex gap-3">
        <span
          className="w-3 h-3 rounded-full animate-bounce"
          style={{ backgroundColor: '#FFD700' }} // golden
        ></span>
        <span
          className="w-3 h-3 rounded-full animate-bounce delay-150"
          style={{ backgroundColor: '#FFD700' }}
        ></span>
        <span
          className="w-3 h-3 rounded-full animate-bounce delay-300"
          style={{ backgroundColor: '#FFD700' }}
        ></span>
      </div>

    </div>
  );
};

export default Loader;