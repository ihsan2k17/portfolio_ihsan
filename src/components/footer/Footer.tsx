import { Link } from 'react-router-dom'
import './footer.css'
import { mediaSocial } from '../constants/media_sosial'
import { FaVoicemail, FaWhatsapp } from 'react-icons/fa6'
import { useState } from 'react'
import Modals from '../modal/Modals'
import CardSubs from '../card/cardsubs/CardSubs'

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className='footer'>
            <div className="sb--footer section--padding">
                <div className="sb--footer-links">
                    <div className="sb--footer-links-div">
                        <h4>Social Media</h4>
                        <div className="card--medsos">
                            {mediaSocial.map((data) => (
                                <Link to={data.link} key={data.id}>
                                    <img
                                        src={data.image}
                                        alt={data.name}
                                        className='cardsocmedimg' />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="sb--footer-links-div">
                        <h4>Pages</h4>
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Project">Project</Link>
                    </div>
                    <div className="sb--footer-links-div">
                        <h4>Contact Us</h4>
                        <Link to="https://wa.me/qr/XFBM3IKKJUB7E1" className="sb--footer-contact-us">
                            <FaWhatsapp />
                            <p>085156425204</p>
                        </Link>
                        <Link to="" className="sb--footer-contact-us" onClick={openModal}>
                            <FaVoicemail />
                            <p>satupiramid@gmail.com</p>
                        </Link>
                    </div>
                </div>
                <div className='hr'></div>
                <div className="sb--footer-below">
                    <div className="sb--footer-copyright">
                        <p>@{new Date().getFullYear()} Made By Ihsan. Powered by React and Freepik for Design</p>
                    </div>
                    <div className="sb--footer-below-links">
                        <Link to="">
                            <div><p>Terms & Conditions</p></div>
                        </Link>
                        <Link to="">
                            <div><p>Privacy</p></div>
                        </Link>
                        <Link to="">
                            <div><p>Security</p></div>
                        </Link>
                    </div>
                </div>
            </div>
            <Modals showModal={isModalOpen} closeModal={closeModal}>
                <CardSubs/>
            </Modals>
        </div>
    )
}

export default Footer