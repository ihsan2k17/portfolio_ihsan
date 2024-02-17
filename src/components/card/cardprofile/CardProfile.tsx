import animation2 from '../../../assets/animations/container_animation1.json'
import animation1 from '../../../assets/animations/container_animation2.json'
import profiles from '../../../assets/images/profile/msc--mini-07.png'
import Lottie from 'lottie-react'
import CardProfileStyle from './cardprofile.module.css'
import '../../constants/color.css'
import { motion } from 'framer-motion'
import { mediaSocial } from '../../constants/media_sosial'
import { Link } from 'react-router-dom'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useState } from 'react'
import Modals from '../../modal/Modals'
import CardSubs from '../cardsubs/CardSubs'

const CardProfile = () => {
    const namefile = 'http://localhost:5173/cv_ihsan.pdf';
    const handleDownload = (url: string) => {
        try {
            const filename = url.split('/').pop();
            if (!filename || filename.trim() === '') {
                console.error('Invalid filename');
                return;
            }

            const gtg = document.createElement('a');
            gtg.href = url;
            gtg.setAttribute('download', filename);
            document.body.appendChild(gtg);
            gtg.click();
            gtg.remove();
        } catch (error) {
            console.error('Error during download:', error);
        }
    }
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <motion.div className={CardProfileStyle.containerprofile}>
            <div className={CardProfileStyle.cardprofile}>
                <div className={CardProfileStyle.cardnameprofile}>
                    <motion.h1
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{
                            x: 0, opacity: 1
                        }}
                        transition={{
                            type: "spring",
                            delay: 0.8, duration: 1
                        }}
                        className={CardProfileStyle.cardname}>Hi, Im Muhammad <span> Ihsan </span> Fauzi</motion.h1>
                    <motion.p
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "tween",
                            delay:0.5, duration:1
                        }}
                    >
                        Sebagai Spesialis IT di perusahaan manufaktur, saya berpengalaman dalam pemeliharaan perangkat keras,
                        manajemen kabel, dan pengembangan aplikasi. Saya juga berhasil mengekstrak dan memanipulasi data
                        untuk staf serta mengelola situs web perusahaan di naiba.co.id.
                    </motion.p>
                    <div className={CardProfileStyle.cardsocmed}>
                        {mediaSocial.map((data) => (
                            <Link to={data.link} key={data.id}>
                                <img key={data.id} src={data.image} alt={data.name} className={CardProfileStyle.cardsocmedimg} />
                            </Link>
                        ))}
                    </div>
                    <motion.span
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: [-150, 0], opacity: 1 }}
                        transition={{
                            type: "spring",
                            bounce:0.7,
                            duration:1.5
                        }}
                        onClick={openModal}
                        className={CardProfileStyle.buttonhire}
                    >
                        <h1>Hire Me</h1>
                        <div className={CardProfileStyle.cardarrowright}>
                            <FaArrowUpRightFromSquare className={CardProfileStyle.faarrowright} />
                        </div>
                    </motion.span>
                </div>
                <Modals showModal={isModalOpen} closeModal={closeModal}>
                    <CardSubs />
                </Modals>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration:0.8
                    }}
                    className={CardProfileStyle.cardimgprofile}>
                    <img src={profiles} className={CardProfileStyle.cardimg} alt='ImageProfiles' />
                </motion.div>
            </div>
            <motion.div className={CardProfileStyle.cardselfdescription}>
                <div className={CardProfileStyle.cardcontainerselfdescription}>
                    <motion.div
                        initial={{ y: -150, opacity: 0 }}
                        whileInView={{
                            y: 0, opacity: 1
                        }}
                        transition={{
                            type: "spring",
                            delay: 0.5, duration: 1
                        }}
                        className={CardProfileStyle.cardanimation1}>
                        <Lottie animationData={animation2} />
                    </motion.div>
                    <div className={CardProfileStyle.cardtitleworking}>
                        <motion.h1
                            initial={{ x: 150, opacity: 0 }}
                            whileInView={{
                                x: 0, opacity: 1
                            }}
                            transition={{
                                type: "spring",
                                delay: 0.5, duration: 1
                            }}
                            className={CardProfileStyle.cardexperton}>Expert On</motion.h1>
                        <motion.h1
                            initial={{ y: 150, opacity: 0 }}
                            whileInView={{
                                y: 0, opacity: 1
                            }}
                            transition={{
                                type: "spring",
                                delay: 0.5, duration: 1
                            }}
                            className={CardProfileStyle.cardbased}>Im It Specialist on Manufacturing</motion.h1>
                        <motion.p
                            initial={{ x: 150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "tween",
                                delay: 0.5, duration: 1
                            }}
                        >

                            Saya seorang IT Staff di sebuah Perusahaan Manufaktur.
                            Peran saya melibatkan pemanfaatan alat-alat canggih untuk menerapkan logika bisnis
                            melalui berbagai aplikasi perangkat lunak. Saya memiliki pengalaman dalam pengembangan aplikasi,
                            dengan fokus pada satu proyek sukses sebagai Pengembang Fullstack. Keahlian saya
                            melibatkan berbagai teknologi, seperti Node.js, Express, TypeScript, dan .NET Core API di sisi backend,
                            serta React Native dan TypeScript di sisi frontend. Saya juga aktif terlibat dalam aspek-aspek lain dari TI
                            untuk mendukung kelancaran dan inovasi dalam penggunaan teknologi di perusahaan
                        </motion.p>
                    </div>
                    <motion.span onClick={()=> handleDownload(namefile)} className={CardProfileStyle.cardcv}>
                        <h1>Download CV</h1>
                        <FaArrowRightFromBracket className={CardProfileStyle.cvlogos} />
                    </motion.span>
                    <div className={CardProfileStyle.containeranimation2}>
                        <motion.div
                            initial={{ y: -150, opacity: 0 }}
                            whileInView={{
                                y: 0, opacity: 1
                            }}
                            transition={{
                                type: "spring",
                                delay: 0.5, duration: 1
                            }}
                            className={CardProfileStyle.cardanimation2}>
                            <Lottie animationData={animation1} />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default CardProfile