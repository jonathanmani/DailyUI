import "./App.css";
import "./components/SideBanner";
import data from "./data/profile"
import SideBanner from "./components/SideBanner";

function App() {
    const profileData = data
    return(
        <>
          <SideBanner 
            name={profileData.name}
            role={profileData.role} 
            description={profileData.desc}
            skills={profileData.skills}/> 
        </>
    )
}

export default App;
