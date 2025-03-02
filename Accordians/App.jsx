import React from 'react'

import { accordionData } from './utils/content'
import Accordian from './Components/Accordian'

const App = () => {

  return (

    <div>
            {accordionData.map((item) => (
                <Accordian key={item.id} title={item.title} content={item.content} />
            ))}
        </div>

  )
}

export default App
