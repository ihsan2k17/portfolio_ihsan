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
    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDownload1 = () => {
        try {
            const url = 'https://ihsan-fauzi.vercel.app/Muhammad_Ihsan_Fauzi_CV.pdf';
            const filename = 'Muhammad_Ihsan_Fauzi_CV.pdf';
        
            const a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', filename);
            a.setAttribute('target', '_blank');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error('Error during download:', error);
        }
    }

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
                        Sebagai IT Development Di perusahaan Koperasi Simpan Pinjam, saya memliki Pengalaman dalam Pengembangan & modifikasi Web Forms,
                        Penambahan fitur: Export Excel, tampilan filter/view, integrasi Crystal Report 
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
                            className={CardProfileStyle.cardbased}>Im IT Development</motion.h1>
                        <motion.p
                            initial={{ x: 150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                type: "tween",
                                delay: 0.5, duration: 1
                            }}
                        >
                            Saya seorang IT Development di anak perusahaan Dari Giga Sena Group, dengan fokus pada pengembangan dan perbaikan aplikasi internal berbasis Web Forms. 
                            Peran saya melibatkan penerapan logika bisnis ke dalam sistem berbasis perangkat lunak, termasuk penambahan fitur baru, 
                            integrasi Crystal Report, serta optimasi performa aplikasi dan database. Saya memiliki pengalaman dalam mengembangkan 
                            form baru, memodifikasi sistem yang sudah berjalan, serta membuat Stored Procedure dan Index untuk meningkatkan efisiensi data. Diluar itu
                            saya juga. pernah terlibat dalam pengembangan aplikasi fullstack dengan menggunakan teknologi seperti Node.js, Express, TypeScript, 
                            .NET Core API di sisi backend, dan React Native di sisi frontend. di Perusahaan tempat saya bekerja sebelum nya. Saya senang mengeksplorasi solusi teknis 
                            yang praktis
                        </motion.p>
                    </div>
                    <motion.span onClick={()=> handleDownload1()} className={CardProfileStyle.cardcv}>
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
