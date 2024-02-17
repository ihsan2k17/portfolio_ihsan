import { useRef } from 'react'
import './home.css'
import '../../components/constants/color.css'
import CardProfile from '../../components/card/cardprofile/CardProfile'
import CardProject from '../../components/card/cardproject/CardProject'
import CardAboutMe from '../../components/card/cardaboutme/CardAboutMe'
import Footer from '../../components/footer/Footer'
import { TitleName } from '../../utils/titlename'
import NavbarHome from '../../components/navbar/navbarhome/NavbarHome'
const Homescreen = () => {
    const profile = useRef(null)
    const about = useRef(null)
    const project = useRef(null)

    TitleName('Homepage')
    
    return (
        <div>
            <NavbarHome profile={profile} about={about} project={project} />
            <div>
                <section ref={profile} className="section"><CardProfile /></section>
                <section ref={project} className="section"><CardProject /></section>
                <section ref={about} className="section"><CardAboutMe /></section>
            </div>
            <Footer/>
        </div>
    )
}

export default Homescreen