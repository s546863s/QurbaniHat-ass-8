const QurbaniTips = () => {
  const tips = [
    {
      title: "Age Verification",
      desc: "Cows must be at least 2 years old, and goats should be at least 1 year old. Check their teeth to confirm.",
      icon: "🦷"
    },
    {
      title: "Physical Health",
      desc: "Ensure the animal is not blind, lame, or sick. Check that ears, tail, and horns are intact.",
      icon: "🐄"
    },
    {
      title: "Natural Diet",
      desc: "Avoid animals fed with steroids. Prefer those raised on organic grass and natural feed.",
      icon: "🌿"
    }
  ];

  return (
    <section className="my-24 px-4 md:px-12 bg-base-200 py-16 rounded-[2.5rem]">
      <div className="text-center mb-16">
        <span className="badge badge-primary badge-outline font-semibold mb-3">Buying Guide</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary">
          Essential Qurbani Tips
        </h2>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">
          Important guidelines to help you choose the right and healthy animal for your sacrifice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div 
            key={index} 
            className="group card bg-base-100 shadow-xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-primary relative overflow-hidden"
          >
            {/* Background Number Decal */}
            <div className="absolute -right-4 -top-4 text-9xl font-bold opacity-5 text-primary group-hover:opacity-10 transition-opacity">
              {index + 1}
            </div>

            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-5xl mb-6 group-hover:rotate-12 transition-transform">
              {tip.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
              {tip.title}
            </h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              {tip.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QurbaniTips;