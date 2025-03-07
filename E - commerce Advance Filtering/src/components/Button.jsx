import React from 'react'

function Button({onClickHandler, value, title, className}) {
  
  return (
    <button 
    onClick={onClickHandler} 
    value={value} 
    className={`btns ${className}`}> {/*Dynamic class Application*/}
      {title}
    </button>
  )
}

export default Button
