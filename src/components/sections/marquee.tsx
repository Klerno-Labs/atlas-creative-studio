const Marquee = () => (
  <div className="w-full py-6 bg-surface">
    <div className="flex whitespace-nowrap overflow-hidden">
      {["Web Design", "Branding", "3D Motion", "Creative Strategy"].map((item, index) => (
        <span key={index} className="mx-4 text-xl text-accent">{item}</span>
      ))}
    </div>
  </div>
);

export default Marquee;