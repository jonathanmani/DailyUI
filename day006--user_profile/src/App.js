import "./App.css";
import "./components/SideBanner";
import data from "./data/profile"
import SideBanner from "./components/SideBanner";
import InfoBanner from "./components/InfoBanner";
import Experience from "./components/Experience";


function App() {
    const profileData = data 
   
    let exp = profileData.experience.map(exp=> {
        return (
            <Experience
                key={exp.id}
                role={exp.role}
                company={exp.company}
                location ={exp.location}
                duration={exp.duration}
                bulletPoints={exp.bullets}
            />
        )
    })
    
    
    return(
        <div className="grid-container">
          <SideBanner className="grid-sidebanner" 
            name={profileData.name}
            role={profileData.role} 
            description={profileData.desc}
            skills={profileData.skills}/> 
            <div className="grid-infobanner">
                <InfoBanner
                number={profileData.contact.phone}
                email={profileData.contact.email}
                github={profileData.contact.github}
                portfolio={profileData.contact.portfolio}
                linkedin={profileData.contact.linkedin}/> 
                <div className='expDiv'>
                <h2>Experience</h2>
                {exp}
                </div>
        
            </div>
        
        </div>
    )
}

export default App;
