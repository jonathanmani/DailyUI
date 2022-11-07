import React from 'react'

const Experience = ({role, company,location,duration,bulletPoints}) => {
    const description = bulletPoints.map(desc => <li>{desc}</li>)
    
  return (
    <>
    <h1>{role}</h1>
    <h4>{company}, {location}</h4>
    <h5>{duration}</h5>
    <ul>
        <li>{description}</li>
    </ul>

    </>
  )
}

export default Experience