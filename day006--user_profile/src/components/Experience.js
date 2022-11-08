import React from 'react'

const Experience = ({role, company,location,duration,bulletPoints}) => {
    const description = bulletPoints.map(desc => <li>{desc}</li>)
    
  return (
    <div>
    <h1>{role}</h1>
    <h4>{company}, {location}</h4>
    <h5>{duration}</h5>
    <ul>
        <li>{description}</li>
    </ul>

    </div>
  )
}

export default Experience