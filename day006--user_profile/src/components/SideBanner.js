import React from 'react'
import userImage from "../images/orange3.png"

const SideBanner = ({name, role, description,skills}) => {
  const skillArray = skills.map(item =>     
    <span key={item} className='skills'>{item}</span> 
  )

  return (
    <div className='sideDiv'>
      <div className='infobanner-imageNameRole'>
        <img src={userImage} alt="profilephotoHello" />
        <h2>{name}</h2>
        <span>{role}</span>
        <p>{description}</p>
      </div>
      
      <h3>Skills</h3>
      <div className='skillsDiv'>{skillArray}</div>
    </div>
    
  )
}

export default SideBanner