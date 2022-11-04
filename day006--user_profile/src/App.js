import "./App.css";
import "./components/SideBanner";
import data from "./data/profile"
import SideBanner from "./components/SideBanner";
import InfoBanner from "./components/InfoBanner";
import Experience from "./components/Experience";


function App() {
    const profileData = data 
    console.log('experience from the app: ', profileData.experience)
    console.log('role from the app: ', profileData.experience[0].role)

    let exp = profileData.experience.map((exp,index) => {
        console.log('index:', index)
        return (
            <Experience 
                role={exp[index].role}
                company={exp[index].company}
                location ={exp[index].location}
                duration={exp[index].duration}
                bulletPoints={exp[index].bullets}
            />
        )
    })
    
    
    return(
        <>
          <SideBanner 
            name={profileData.name}
            role={profileData.role} 
            description={profileData.desc}
            skills={profileData.skills}/> 
        <InfoBanner
            number={profileData.contact.phone}
            email={profileData.contact.email}
            github={profileData.contact.github}
            portfolio={profileData.contact.portfolio}
            linkedin={profileData.contact.linkedin}/>   
        {exp}
        </>
    )
}

export default App;
