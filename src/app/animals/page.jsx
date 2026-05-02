import AnimalCard from '@/Components/AnimalCard/AnimalCard';
import React from 'react';

const AnimalsPage = async () => {
const res = await fetch("https://qurbani-hat-ass-8.vercel.app/data.json")

const animals = await res.json();



    return (
        <div>
            <h1 className='font-bold text-2xl my-4'>All Animals:</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
           {animals.map(animal => (<AnimalCard animal={animal} key={animal.id} /> ) )
           
           
           
           }

      </div>
        </div>
    );
};

export default AnimalsPage;