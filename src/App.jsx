
import './App.css'
import Comments from './sections/Comments'
import Contact from './sections/Contact'
import ExperienceSection from './sections/ExperienceSection'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import NavBar from './sections/NavBar'
import ShowCaseSection from './sections/ShowCaseSection'
import TechStack from './sections/TechStack'

function App() {

  return (
    <>
    <NavBar/>
    <Hero/>
    <ShowCaseSection/>
    <FeatureCards/>
    <ExperienceSection/>
    <TechStack/>
    <Comments/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
