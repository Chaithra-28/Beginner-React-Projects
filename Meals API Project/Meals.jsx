import axios from 'axios'

import React, { useEffect, useState } from 'react'

import "../style.css";

const Meals = () => {

    const [items, setItems] = useState([])
    

    // Improvements-
    // Use an async function inside useEffect
    // useEffect should not be directly async. Instead, define an async function inside it:

    useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
            setItems(res.data.meals); // Sending the data to 'items'
        } catch (err) {
            console.log(err);
        }
    };

    fetchData();
}, []);


    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section className="card" key={idMeal}> {/* Adding key here */}
                <img src={strMealThumb} alt={strMeal} />
                <section className="content">
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        );
    });

  return (

    <div className='items-container'>{itemsList}</div>

  )
}

export default Meals
