import React, { useState } from 'react'

import '../style.css'

const ToggleBackgroundColor = () => {

    const [backgroundColor, setBackgroundColor] = useState('white');
    const [textColor, setTextColor] = useState('#1b1b1b');
    const [buttonStyle, setButtonStyle] = useState('#white');

    const handleCilck = () => {

        setBackgroundColor(backgroundColor === 'white' ? '#1b1b1b' : 'white')
        setTextColor(textColor === '#1b1b1b' ? 'white' : '#1b1b1b')
        setButtonStyle(buttonStyle === 'white' ? '#1b1b1b' : 'white')
    }

        
  return (

    <div style={{ backgroundColor, color: textColor }}>

        <button 
        onClick={handleCilck} 
        style={{ 
            buttonStyle, 
            color: textColor, 
            border:`2px solid ${textColor}` }} >
                { backgroundColor === '#1b1b1b' ? 'Black Theme' : 'white Theme'}
            </button>

            <section className="content">
                <h1>That is the <br />
                Stupidest Font <br />
                I have ever seen</h1>
            </section>

    </div>

  )
}

export default ToggleBackgroundColor
