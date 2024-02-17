import { motion } from 'framer-motion'
import aboutStyles from './desAbout.module.css'
import CardExperience from '../cardexperience/CardExperience'

const DescriptionAbout = () => {
    return (
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                bounce: 0.6,
                duration:1.2
            }}
            className={aboutStyles.divKet}>
            <div>
                <motion.div
                    initial={{ y: 30, opacity: 0, scale:0.8 }}
                    whileInView={{ y: 0, opacity: 1, scale:1 }}
                    transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2
                    }}
                >
                    <h2>Profil Singkat</h2>
                    <p className={aboutStyles.stylesp}>
                        📅 <span className={aboutStyles.label}>Tanggal Lahir:</span> 27 Juli 1999
                    </p>
                    <p className={aboutStyles.stylesp}>
                        📍 <span className={aboutStyles.label}>Asal:</span> Jakarta
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: -30, opacity: 0, scale:0.8 }}
                    whileInView={{ y: 0, opacity: 1, scale:1 }}
                    transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2
                    }}
                >
                    <h2>Pendidikan</h2>
                    <p>
                        🎓 S1 Teknik Informatika, Universitas Mercubuana (GPK Akhir: 3.29)
                    </p>
                </motion.div>
                <motion.div
                    initial={{ y: 30, opacity: 0, scale:0.8 }}
                    whileInView={{ y: 0, opacity: 1,scale:1}}
                    transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2
                    }}
                >
                    <h2>Pengalaman Kerja</h2>
                    <CardExperience />
                </motion.div>
                <motion.div
                    initial={{ y: -30, opacity: 0, scale:0.8 }}
                    whileInView={{ y: 0, opacity: 1, scale:1 }}
                    transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 1.2
                    }}
                >
                    <h2>Keahlian</h2>
                    <p>💻 Bahasa Pemrograman: C#, JavaScript/TypeScript, PHP</p>
                    <p>🎨 Desain Grafis dan UI/UX</p>
                    <p>📸 Fotografi dan Videografi Sederhana</p>
                    <p>✂️ Editor Video</p>
                </motion.div>
                <h2>Pengalaman Organisasi</h2>
                <p>
                    Saya pernah aktif sebagai kepala divisi design di Himpunan Mahasiswa
                    Teknik Informatika selama masa kuliah,
                    di mana saya terlibat dalam berbagai proyek kreatif.
                </p>
            </div>
        </motion.div>
    )
}

export default DescriptionAbout