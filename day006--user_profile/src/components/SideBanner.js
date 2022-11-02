import React from 'react'
import userImage from "../images/orange3.png"

const SideBanner = ({name, role, description,skills}) => {
  const skillArray = skills.map(item =>{
    return <span>{item}</span>
  })
  return (
    <>
      <img src={userImage} alt="profilephotoHello" />
      <h1>{name}</h1>
      <span>{role}</span>
      <p>{description}</p>
      <h3>Skills</h3>
      <div>{skillArray}</div>
    </>
    
  )
}

export default SideBanner