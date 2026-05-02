import Image from "next/image";
import {
  FaWeightHanging,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaShoppingCart,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

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
      <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-3/5 relative  md:h-[650px] overflow-hidden group">
            <Image
              src={animal.image}
              alt={animal.name}
              
              fill
              priority
              quality={100}
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute top-8 left-8 flex flex-col gap-3">
              <span className="badge badge-primary p-4 text-lg font-bold shadow-xl border-none">
                {animal.category}
              </span>
              <span className="badge bg-white/90 backdrop-blur-md text-gray-800 p-4 font-semibold border-none shadow-md">
                {animal.breed}
              </span>
            </div>
          </div>

          
          <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-black text-gray-800 mb-2 leading-tight">
                  {animal.name}
                </h1>
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <FaCheckCircle />{" "}
                  <span>Health Verified & Ready for Qurbani</span>
                </div>
              </div>

              <p className="text-gray-500 mb-8 leading-relaxed text-lg italic border-l-4 border-primary/30 pl-4">
                "{animal.description}"
              </p>

              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <FaWeightHanging className="text-primary mb-2 text-xl" />
                  <p className="text-[10px] uppercase text-gray-400 font-bold">
                    Weight
                  </p>
                  <p className="font-extrabold text-gray-700">
                    {animal.weight} kg
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <FaCalendarAlt className="text-primary mb-2 text-xl" />
                  <p className="text-[10px] uppercase text-gray-400 font-bold">
                    Minimum Age
                  </p>
                  <p className="font-extrabold text-gray-700">{animal.age}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <FaMapMarkerAlt className="text-secondary mb-2 text-xl" />
                  <p className="text-[10px] uppercase text-gray-400 font-bold">
                    Origin
                  </p>
                  <p className="font-extrabold text-gray-700">
                    {animal.location || "Bangladesh"}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <FaShieldAlt className="text-emerald-500 mb-2 text-xl" />
                  <p className="text-[10px] uppercase text-gray-400 font-bold">
                    Diet Plan
                  </p>
                  <p className="font-extrabold text-gray-700">100% Organic</p>
                </div>
              </div>
            </div>

            
            <div className="border-t border-gray-100 pt-8 mt-4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">
                    Total Price
                  </p>
                  <p className="text-5xl font-black text-primary">
                    ৳ {animal.price.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button className="btn btn-primary btn-xl w-full text-lg font-bold shadow-2xl rounded-2xl h-auto py-5 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">
                  <FaShoppingCart className="text-2xl" /> Add To Cart
                </button>
                <p className="text-center text-xs text-gray-400 font-medium italic">
                  * Managed by KeenKeeper Logistics. Guaranteed safe delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
