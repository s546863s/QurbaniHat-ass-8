import Link from "next/link";
import AnimalCard from "../AnimalCard/AnimalCard";
import 'animate.css';

const FeaturedAnimals = async () => {
  let animals = [];

  try {
    const res = await fetch("https://qurbani-hat-ass-8.vercel.app/data.json", {
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
  <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight animate__animated animate__fadeInDown">
    Featured Animals
  </h2>
  <p className="text-gray-500 mt-3 max-w-lg mx-auto font-medium animate__animated animate__fadeInUp animate__delay-1s">
    Check out our best collection of healthy and verified livestock.
  </p>
  <div className="divider divider-primary w-24 mx-auto animate__animated animate__zoomIn animate__delay-1s"></div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
           {featured.map(animal => (<AnimalCard animal={animal} key={animal.id} /> ) )
           
           
           }

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
