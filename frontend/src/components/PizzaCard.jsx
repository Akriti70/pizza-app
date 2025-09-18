
import React from 'react'

export default function PizzaCard({ pizza }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h2 className="text-lg font-bold">{pizza.name}</h2>
      <p className="text-gray-600">{pizza.description}</p>
      <p className="text-red-500 font-semibold mt-2">${pizza.price}</p>
      <button className="mt-3 w-full bg-red-500 text-white py-1 rounded hover:bg-red-600">
        Add to Cart
      </button>
    </div>
  )
}