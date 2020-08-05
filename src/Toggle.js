import React, { useState } from 'react';

const Toggle = () => {

  const [ isHappy, setIsHappy ] = useState(true)
  const [ isInLove, setIsInLove ] = useState(true)

  const toggleIsHappy = () => {
    setIsHappy(!isHappy)
  }

  const toggleIsInLove = () => {
    setIsInLove(!isInLove) 
  }

  return(
    <div>
      <img 
        onClick={toggleIsHappy} 
        style={{height: "100px", width: "100px", margin: "20px 40px"}} 
        src={isHappy ? require('./emojis/happy.png') : require('./emojis/sad.png')} 
        />

      <img 
        onClick={toggleIsInLove}
        style={{height: "100px", width: "100px", margin: "20px auto"}} 
        src={isInLove ? require('./emojis/smile.png') : require('./emojis/inlove.png')} />
    </div>
  )
}

export default Toggle;