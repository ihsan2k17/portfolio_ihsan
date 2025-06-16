import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { MyProfiles } from '../../../utils/myprofiles';
import ProfileSlider from '../../scroll/slider/profileslider/ProfileSlider'
import aboutStyles from './cardprofab.module.css'
import {motion} from 'framer-motion'

const CardProfileAbout = () => {
    const profileImages = MyProfiles;
    const handleDownload1 = () => {
        try{
            const url = 'https://ihsan-fauzi.vercel.app/Muhammad_Ihsan_Fauzi_CV.pdf';
            const filename = 'Muhammad_Ihsan_Fauzi_CV.pdf';
        
            const a = document.createElement('a');
            a.href = url;
            a.setAttribute('download', filename);
            a.setAttribute('target', '_blank');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch(error) {
            console.error('Error during download:', error);
        }
    }
    return (
        <div className={aboutStyles.containerProfile}>
            <div className={aboutStyles.divProfile}>
                <div className={aboutStyles.subDivProfile}>
                    <div className={aboutStyles.divImage}>
                        <ProfileSlider profileImages={profileImages} />
                    </div>
                    <motion.div
                        className={aboutStyles.NameSubName}
                        initial={{ x: -30, opacity: 0, scale:0.7 }}
                        whileInView={{ x: 0, opacity: 1, scale:1 }}
                        transition={{
                            type: "spring",
                            bounce: 0.5, duration: 1.5
                        }}
                    >
                        <h1>Muhammad Ihsan Fauzi</h1>
                        <p>"Saya Ingin Makan"</p>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{ x: 30, opacity: 0, scale:0.7 }}
                whileInView={{ x: 0, opacity: 1, scale:1 }}
                transition={{
                    type: "just",
                    delay: 0.5,
                    duration: 1
                }}
                className={aboutStyles.divDescription}>
                <p>
                    Halo, saya Ihsan! Seorang profesional berambisi dengan latar belakang dalam teknik informatika,
                    dan saat ini menjabat sebagai IT Development
                    di sebuah perusahaan group dengan anak Perusahaan nya yang bergerak dibidang Koperasi Simpan Pinjam.
                </p>
                <span
                    className={aboutStyles.cardCV}
                    onClick={() => handleDownload1()}
                >
                    <h1>Download CV</h1>
                    <FaArrowRightFromBracket className={aboutStyles.cvlogos} />
                </span>
            </motion.div>
        </div>
    )
}

export default CardProfileAbout
