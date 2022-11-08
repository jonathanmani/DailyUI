import React from 'react'

const Experience = ({role, company,location,duration,bulletPoints}) => {
    const description = bulletPoints.map(desc => <li>{desc}</li>)
    
  return (
    <div>
    <h3>{role} - {company}</h3>
    <h4>{location}</h4>
    <h5>{duration}</h5>
    <ul>
        <li>{description}</li>
    </ul>

    </div>
  )
}

export default Experience