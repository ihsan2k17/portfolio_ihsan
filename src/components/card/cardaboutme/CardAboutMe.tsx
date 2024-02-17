import { motion } from 'framer-motion'
import './cardaboutme.css'
import { FaCheck } from 'react-icons/fa6'
import { skills } from '../../constants/skils'
import { Link } from 'react-router-dom'
import CardAboutSlider from '../../scroll/slider/cardaboutslider/CardAboutSlider'
import { AboutCard } from '../../../utils/cardaboutus'


const CardAboutMe = () => {
    const aboutSlides = AboutCard;
    const tanggalSaatIni = new Date();
    const tanggalMulaiBekerja = new Date('2021-11-01');
    const selisihBulan =
        (tanggalSaatIni.getFullYear() - tanggalMulaiBekerja.getFullYear()) *
        12 + tanggalSaatIni.getMonth() - tanggalMulaiBekerja.getMonth();
    const tahun = Math.floor(selisihBulan / 12);
    const bulan = selisihBulan % 12;
    return (
        <motion.div
            transition={{ staggerChildren: 0.5 }}
            className='aboutcontainer'>
            <motion.div
                initial={{ x: -150, rotate: -45 }}
                whileInView={{ x: 0, rotate: 0 }}
                transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 3
                }}

            >
                <div className="about_images">
                    <CardAboutSlider aboutImages={aboutSlides} />
                </div>
            </motion.div>
            <div className='aboutcardcontainer'>
                <motion.div
                    initial={{ y: 90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 3
                    }}
                    className="aboutcardAboutUs">
                    <h1>About Me</h1>
                    <p>Saya seorang IT Officer dengan lebih dari {` ${tahun}`} tahun {bulan > 0 && `${bulan} bulan`} pengalaman.
                        selama saya disini saya telah belajar banyak hal mulai dari menggunakan
                        teknologi seperti React, Node.js, dan Microsoft SQL Server, dan pemahaman dasar tentang C# dan C++. Selama perjalanan karier saya,
                        saya berhasil menciptakan aplikasi Android yang terintegrasi dengan Web API.
                        Saya menemukan kepuasan dalam menyelesaikan tantangan teknis dan memberikan solusi inovatif. <Link to="/About" className="card__button">Read More</Link>
                    </p>
                </motion.div>
                <motion.div className='aboutcardskills'
                    initial={{ y: -90, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        bounce: 0.4,
                        duration: 3
                    }}
                >
                    <div className='aboutcardskillsname'>
                        {skills.map((map) => (
                            <p key={map.id}><FaCheck /> {map.Name}</p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default CardAboutMe