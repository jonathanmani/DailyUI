import React from 'react'
import userImage from "../images/orange3.png"

const SideBanner = ({name, role, description,skills}) => {
  const skillArray = skills.map(item =>     
    <div key={item} className='skills'>{item}</div> 
  )

  return (
    <div>
      <div className='infobanner-imageNameRole'>
        <img src={userImage} alt="profilephotoHello" />
        <h1>{name}</h1>
        <span>{role}</span>
        <p>{description}</p>
      </div>
      
      <h3>Skills</h3>
      <div>{skillArray}</div>
    </div>
    
  )
}

export default SideBanner