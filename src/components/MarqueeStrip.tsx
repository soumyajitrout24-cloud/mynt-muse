const MarqueeStrip = () => {
  const text = "Discretion ✦ Excellence ✦ Exclusivity ✦ Premium ✦ Professional ✦ ";
  const repeatedText = text.repeat(8);

  return (
    <div className="overflow-hidden py-9 bg-card border-y border-primary/50">
      <div className="marquee-strip whitespace-nowrap">
        <span className="font-elegant text-sm md:text-base tracking-[0.3em] uppercase text-primary/180">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeStrip;
