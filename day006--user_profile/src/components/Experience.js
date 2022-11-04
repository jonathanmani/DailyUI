import React from 'react'

const Experience = ({role, company,location,duration,bulletPoints}) => {
    console.log('role:', role)

    console.log('bulletPoints:',bulletPoints)
    const description = bulletPoints.map(desc => <li>desc</li>)
    console.log(description)

  return (
    <>
    <h1>{role}</h1>
    <h3>{company}{location}</h3>
    <h5>{duration}</h5>
    <ul>
        <li>{description}</li>
    </ul>

    </>
  )
}

export default Experience