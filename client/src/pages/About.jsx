import MasterLyout from "../MasterLyout"
import Intro from "../components/About/Intro"
import Banner from "../components/Shared/Banner"
import Stats from "../components/About/Stats"
import Add from "../components/About/Add"
import MilesStones from "../components/About/MilesStones"

const About = () => {
  return (
    <MasterLyout>
    <Banner title="About Us" image="url(images/about_background.jpg)" />
    <Intro />
    <Stats />
    <Add />
    <MilesStones />
    </MasterLyout>
    
  )
}

export default About