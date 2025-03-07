import React, { useState } from 'react';
import './Recommended.css';
import Button from '../components/Button';

function Recommended({handleClick, selectedCategory}) {


  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          
          <Button 
          onClickHandler={handleClick} 
          value="" title="All Products" 
          className={selectedCategory === "" ? "selected" : ""} 
          />

          <Button 
            onClickHandler={handleClick} 
            value="Nike" 
            title="Nike" 
            className={selectedCategory === "Nike" ? "selected" : ""}
          />

          <Button 
            onClickHandler={handleClick} 
            value="Adidas" 
            title="Adidas" 
            className={selectedCategory === "Adidas" ? "selected" : ""}
          />

          <Button 
            onClickHandler={handleClick} 
            value="Puma" 
            title="Puma" 
            className={selectedCategory === "Puma" ? "selected" : ""}
          />
          
          <Button 
            onClickHandler={handleClick} 
            value="Vans" 
            title="Vans" 
            className={selectedCategory === "Vans" ? "selected" : ""}
          />
        </div>
      </div>
    </>
  );
}

export default Recommended;
