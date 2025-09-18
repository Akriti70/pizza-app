
import React, { useEffect, useState } from 'react'
import PizzaCard from '../components/PizzaCard'
import { supabase } from '../supabaseClient'
import axios from 'axios'

export default function Menu() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
       
        const { data, error } = await supabase.from('pizzas').select('*')
        if (error) throw error
        setPizzas(data)

        

      } catch (err) {
        console.error('Error fetching pizzas:', err.message)
      }
    }

    fetchPizzas()
  }, [])

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pizzas.map(pizza => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </div>
  )
}
