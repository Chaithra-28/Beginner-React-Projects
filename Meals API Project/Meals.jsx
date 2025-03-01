import axios from 'axios'

import React, { useEffect, useState } from 'react'

import "../style.css";

const Meals = () => {

    const [items, setItems] = useState([])

    
    //If API call happens frequently (e.g., polling or re-fetching), it's good to abort requests on unmount:

    useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
        try {
            const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood", {
                signal: controller.signal
            });
            setItems(res.data.meals);
        } catch (err) {
            if (err.name !== "AbortError") {
                console.log(err);
            }
        }
    };

    fetchData();

    return () => controller.abort(); // Cleanup on unmount
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
