import Image from "next/image";
import {
  FaWeightHanging,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaShieldAlt,
  FaCheckCircle,
  FaPaw,
} from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch("https://qurbani-hat-ass-8.vercel.app/data.json");
  const animals = await res.json();
  const animal = animals.find((a) => a.id == id);

  return {
    title: animal ? `${animal.name} | QurbaniHat` : "Animal Details",
    description: animal?.description || "Details of the animal",
  };
}

const CardDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://qurbani-hat-ass-8.vercel.app/data.json", {
    cache: "no-store",
  });
  const animals = await res.json();
  const animal = animals.find((a) => a.id == id);

  if (!animal) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-500">Animal Not Found!</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-base-200 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row">
          
          {/* Image Section with Enhanced Visuals */}
          <div className="lg:w-3/5 relative min-h-[400px] md:h-[700px] overflow-hidden group">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              priority
              quality={100}
              className="object-cover transition-transform duration-2000 group-hover:scale-110"
            />
            {/* Gradient Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/20"></div>
            
            <div className="absolute top-8 left-8 flex flex-col gap-3 z-10">
              <span className="badge badge-primary p-5 text-lg font-black shadow-2xl border-none">
                <FaPaw className="mr-2" /> {animal.category}
              </span>
              <span className="badge bg-white/90 backdrop-blur-md text-primary p-5 font-bold border-none shadow-xl">
                {animal.breed}
              </span>
            </div>
          </div>

          {/* Details Content Section */}
          <div className="lg:w-2/5 p-8 md:p-14 flex flex-col justify-between bg-linear-to-b from-white to-gray-50">
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-green-100 shadow-sm">
                  <FaCheckCircle className="animate-pulse" /> Health Verified & Ready
                </div>
                <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                  {animal.name}
                </h1>
              </div>

              <p className="text-gray-500 mb-10 leading-relaxed text-lg font-medium border-l-4 border-primary/40 pl-6 py-2 bg-primary/5 rounded-r-2xl italic">
                {animal.description}
              </p>

              {/* Enhanced Info Grid */}
              <div className="grid grid-cols-2 gap-5 mb-10">
                <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/item">
                  <FaWeightHanging className="text-primary mb-3 text-2xl group-hover/item:scale-110 transition-transform" />
                  <p className="text-[11px] uppercase text-gray-400 font-black tracking-widest">Weight</p>
                  <p className="font-black text-xl text-gray-800">{animal.weight} kg</p>
                </div>
                
                <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/item">
                  <FaCalendarAlt className="text-secondary mb-3 text-2xl group-hover/item:scale-110 transition-transform" />
                  <p className="text-[11px] uppercase text-gray-400 font-black tracking-widest">Age</p>
                  <p className="font-black text-xl text-gray-800">{animal.age}</p>
                </div>

                <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/item">
                  <FaMapMarkerAlt className="text-orange-500 mb-3 text-2xl group-hover/item:scale-110 transition-transform" />
                  <p className="text-[11px] uppercase text-gray-400 font-black tracking-widest">Origin</p>
                  <p className="font-black text-xl text-gray-800">{animal.location || "Bangladesh"}</p>
                </div>

                <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group/item">
                  <FaShieldAlt className="text-emerald-500 mb-3 text-2xl group-hover/item:scale-110 transition-transform" />
                  <p className="text-[11px] uppercase text-gray-400 font-black tracking-widest">Food</p>
                  <p className="font-black text-xl text-gray-800">100% Organic</p>
                </div>
              </div>
            </div>

            {/* Pricing and Action Section */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs text-gray-400 font-black uppercase tracking-[0.2em] mb-1">
                    Booking Price
                  </p>
                  <p className="text-6xl font-black text-primary drop-shadow-sm">
                    ৳{animal.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <button className="relative overflow-hidden group/btn btn btn-primary border-none bg-linear-to-r from-primary via-secondary to-primary bg-[length:200%_auto] hover:bg-right transition-all duration-700 h-20 rounded-[1.5rem] shadow-[0_15px_30px_rgba(234,88,12,0.3)]">
                  <div className="flex items-center justify-center gap-4 text-white">
                    <FaShoppingCart className="text-2xl group-hover/btn:animate-bounce" />
                    <span className="text-xl font-black tracking-wide">Confirm Booking</span>
                  </div>
                  {/* Subtle Shine Overlay */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-linear-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                </button>
                
                <div className="flex items-center justify-center gap-2 text-gray-400">
                   <div className="h-[1px] w-8 bg-gray-200"></div>
                   <p className="text-[10px] font-bold uppercase tracking-tighter">
                     Verified by QurbaniHat Logistics
                   </p>
                   <div className="h-[1px] w-8 bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;