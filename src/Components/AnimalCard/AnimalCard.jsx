import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";



const AnimalCard = ({animal}) => {
    console.log(animal);
    return (
        <div>
                 
          <div
            key={animal._id || animal.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
          >
            <figure className="h-64 relative overflow-hidden">
                
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={animal.image}
                alt={animal.name}
                width={500}
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
                <span className="badge badge-outline text-xs">
                  {animal.breed}
                </span>
              </div>

              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {animal.description}
              </p>

              <div className="flex gap-4 mt-4 text-sm font-medium">
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  Weight: {animal.weight}
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  Age: {animal.age}
                </span>
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
        
        </div>
    );
};

export default AnimalCard;