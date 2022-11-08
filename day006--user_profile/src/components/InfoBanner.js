import React from "react";

const InfoBanner = ({number, email, github, portfolio, linkedin}) => {
  return(
    <div className="infoDiv">
        <h2>General</h2>
        <div>Phone: {number}</div>
        <div>Email: {email}</div>
        <a className="github" href={github} target="blank_">Github</a>
        <a className="portfolio" href={portfolio} target="blank_">Portfolio</a>
        <a className="linkedin" href={linkedin} target="blank_">Linkedin</a>
        
    </div>
  ) 
};

export default InfoBanner;
