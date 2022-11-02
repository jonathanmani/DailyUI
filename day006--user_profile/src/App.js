import "./App.css";
import "./components/SideBanner";
import data from "./data/profile"
import SideBanner from "./components/SideBanner";
import InfoBanner from "./components/InfoBanner";

function App() {
    const profileData = data
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
        </>
    )
}

export default App;
