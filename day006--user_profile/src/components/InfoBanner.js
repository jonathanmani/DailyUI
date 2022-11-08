import React from "react";

const InfoBanner = ({number, email, github, portfolio, linkedin}) => {
  return(
    <div>
        <h2>General</h2>
        <div>Phone: {number}</div>
        <div>Email: {email}</div>
        <a href={github} target="blank_">Github</a>
        <a href={portfolio} target="blank_">Portfolio</a>
        <a href={linkedin} target="blank_">Linkedin</a>
        
    </div>
  ) 
};

export default InfoBanner;
