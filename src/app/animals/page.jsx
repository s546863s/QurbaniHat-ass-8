
import AnimalMarquee from "@/Components/AnimalMarquee/AnimalMarquee";
import AnimalsList from "@/Components/AnimalsList/AnimalsList";


export const metadata = {
  title: "All Animals | QurbaniHat - find the best livestock",
  description: "Browse our complete collection of healthy and organic livestock for Qurbani. High-quality cows, goats, and camels available at the best prices.",
  keywords: ["Qurbani animals", "livestock market", "organic cows", "buy goat online", "QurbaniHat"],
  openGraph: {
    title: "All Animals | QurbaniHat",
    description: "Find the healthiest animals for your Qurbani. Quality guaranteed.",
    url: "https://qurbani-hat-ass-8.vercel.app/animals", 
    siteName: "QurbaniHat",
    images: [
      {
        url: "/BLF_5066_1.webp", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const AnimalsPage = async () => {
  const res = await fetch("https://qurbani-hat-ass-8.vercel.app/data.json", {
    cache: "no-store" 
  });

  const animals = await res.json();

  return (
    <div className="container mx-auto px-4 py-10 min-h-screen">
       <div className="mb-4">
         <AnimalMarquee />
       </div>
      <AnimalsList initialAnimals={animals} />
    </div>
  );
};

export default AnimalsPage;