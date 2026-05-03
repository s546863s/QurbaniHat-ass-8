"use client";
import React, { useState } from 'react';
import AnimalCard from '@/Components/AnimalCard/AnimalCard';
import { FaSortAmountDown, FaSortAmountUpAlt } from 'react-icons/fa';

const AnimalsList = ({ initialAnimals }) => {
  const [animals, setAnimals] = useState(initialAnimals);
  const [sortOrder, setSortOrder] = useState("");

  const handleSort = (order) => {
    setSortOrder(order);
    const sortedData = [...animals].sort((a, b) => {
      if (order === "lowToHigh") {
        return a.price - b.price;
      } else if (order === "highToLow") {
        return b.price - a.price;
      }
      return 0;
    });
    setAnimals(sortedData);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className='font-black text-3xl text-gray-800 font-heading'>
          All <span className="text-primary">Animals</span>
        </h1>

        {/* Sorting Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-outline btn-primary rounded-xl flex items-center gap-2 shadow-sm">
            <FaSortAmountDown /> {sortOrder === "lowToHigh" ? "Price: Low to High" : sortOrder === "highToLow" ? "Price: High to Low" : "Sort by Price"}
          </label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-2xl bg-base-100 rounded-2xl w-52 border border-gray-100 mt-2">
            <li>
              <button onClick={() => handleSort("lowToHigh")} className="flex items-center gap-2">
                <FaSortAmountUpAlt className="text-primary" /> Low to High
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("highToLow")} className="flex items-center gap-2">
                <FaSortAmountDown className="text-primary" /> High to Low
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {animals.map(animal => (
          <AnimalCard animal={animal} key={animal.id} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsList;