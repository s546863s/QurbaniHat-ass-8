import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FeaturedAnimals = async () => {
  
  let animals = [];
  try {
    const res = await fetch("https://qurbani-hat-ass-8.vercel.app/animals.json", {
      cache: "no-store", 
    });
    animals = await res.json();
  } catch (error) {
    console.error("Error fetching animals:", error);
  }

  
  const featured = animals.slice(2, 8);

  return (
    <section className="my-20 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-heading">
          Featured Animals
        </h2>
        <p className="text-gray-500 mt-2">
          Check out our best collection of healthy and verified livestock.
        </p>
        <div className="divider divider-primary w-24 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((animal) => (
          <div
            key={animal._id || animal.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
          >
            <figure className="h-64 relative overflow-hidden">
            <Image 
  src={animal.image} // এখানে href এর বদলে src হবে
  alt={animal.name}
  width={500} // Next.js ইমেজ ব্যবহারের জন্য উইডথ এবং হাইট দেওয়া বাধ্যতামূলক (অথবা fill ব্যবহার করতে হবে)
  height={500}
  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
/>
              <div className="absolute top-4 right-4 badge badge-primary p-3 font-bold shadow-md">
                ৳ {animal.price}
              </div>
            </figure>
            
            <div className="card-body p-6">
              <div className="flex justify-between items-start">
                <h3 className="card-title text-xl font-bold">{animal.name}</h3>
                <span className="badge badge-outline text-xs">{animal.breed}</span>
              </div>
              
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {animal.description}
              </p>

              <div className="flex gap-4 mt-4 text-sm font-medium">
                <span className="bg-gray-100 px-3 py-1 rounded-full">Weight: {animal.weight}</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">Age: {animal.age}</span>
              </div>

              <div className="card-actions justify-end mt-6">
                <Link
                  href={`/animals/${animal._id || animal.id}`}
                  className="btn btn-primary btn-block text-white"
                >
                  View Details <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link href="/animals" className="btn btn-outline btn-primary px-10">
          See All Animals
        </Link>
      </div>
    </section>
  );
};

export default FeaturedAnimals;