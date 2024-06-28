'use client';
import React, { useState, useEffect } from 'react';

const CategoryAvailabilityManager = () => {
  const [categories, setCategories] = useState([
    { name: 'Bar', available: true },
    { name: 'Shisha', available: true },
    { name: 'Snacks', available: true },
    { name: 'Tea', available: true },
   
  ]);

  useEffect(() => {
    fetchCategoryAvailability();
  }, []);

  const fetchCategoryAvailability = async () => {
    const response = await fetch("/api/menu-category-availability");
    const data = await response.json();
    const updatedCategories = categories.map(category => {
      const availabilityData = data.find(item => item.categoryName === category.name);
      return availabilityData ? { ...category, available: availabilityData.available } : category;
    });
    setCategories(updatedCategories);
  };

  const handleToggleAvailability = async (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].available = !updatedCategories[index].available;
    setCategories(updatedCategories);

    await fetch("/api/menu-category-availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        categoryName: updatedCategories[index].name,
        available: updatedCategories[index].available,
      }),
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Manage Category Availability</h2>
      {categories.map((category, index) => (
        <div key={category.name} className="flex items-center justify-between mb-2">
          <span>{category.name}</span>
          <button
            onClick={() => handleToggleAvailability(index)}
            className={`px-4 py-2 rounded ${
              category.available ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
          >
            {category.available ? 'Available' : 'Unavailable'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CategoryAvailabilityManager;