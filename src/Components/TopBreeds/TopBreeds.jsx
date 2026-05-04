import Link from "next/link";

const TopBreeds = () => {
  const breeds = [
    { name: "Bengal Local", count: "45+ Available", color: "bg-primary" },
    { name: "Shahiwal", count: "20+ Available", color: "bg-secondary" },
    { name: "Brahman", count: "12+ Available", color: "bg-accent" },
    { name: "Gir Cow", count: "8+ Available", color: "bg-info" },
    { name: "Black Bengal Goat", count: "30+ Available", color: "bg-neutral" }
  ];

  return (
    <section className="my-24 px-4 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-l-4 border-primary pl-4">
        <div>
          <h2 className="text-3xl font-bold font-heading uppercase tracking-wider">
            Top Popular Breeds
          </h2>
          <p className="text-gray-500 italic">
            Select from the finest breeds in our collection
          </p>
        </div>
        <Link href="/animals" className="btn btn-ghost text-primary hover:bg-transparent text-lg font-bold group">
          View All <span className="group-hover:translate-x-2 transition-transform">→</span>
        </Link>
      </div>

      <div className="flex flex-wrap gap-6 justify-center md:justify-start">
        {breeds.map((breed, index) => (
          <Link 
            key={index}
            href={`/animals?breed=${breed.name.replace(/\s+/g, '-').toLowerCase()}`}
            className="flex items-center gap-4 bg-white border border-gray-100 p-5 rounded-2xl hover:shadow-xl hover:border-primary/30 cursor-pointer transition-all min-w-[240px] group"
          >
            {/* ডট এনিমেশন যা হোভারে আরও বড় হবে */}
            <div className={`relative flex h-3 w-3`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${breed.color} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${breed.color}`}></span>
            </div>
            
            <div>
              <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{breed.name} <span></span> </h4>
              <span className="text-sm text-gray-400 font-medium">{breed.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopBreeds;