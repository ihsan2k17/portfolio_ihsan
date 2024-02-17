import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar/Navbar";
import { TitleName } from "../../utils/titlename";
import { EndDumy } from "../../components/constants/Project";
import styles from './project.module.css'
import Footer from "../../components/footer/Footer";
import { motion } from "framer-motion";

const Project = () => {
  TitleName('My Project');
  return (
    <div>
      <Navbar />
      <div className={styles.project}>
        <motion.h1
          initial={{ scale:0, opacity: 0 }}
          whileInView={{
            scale:1, opacity:1
          }}
          transition={{
            type: "spring",
            bounce:0.4,
            duration:1
          }}
          className={styles.h1}>This is My Project</motion.h1>
        <motion.p
          initial={{ scale: 2, opacity: 0 }}
          whileInView={{
            scale:1, opacity:1
          }}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration:1
          }}
          className={styles.p}
        >
          Ini adalah beberapa proyek yang telah saya selesaikan. Di antaranya,
          ada proyek yang murni backend,
          beberapa yang sebagian backend, sebagian frontend,
          beberapa yang murni frontend, dan juga beberapa yang fullstack.</motion.p>
        <div
          className={styles.container}>
          {EndDumy.map((project) => {
            const dynamic = `/Project/${project.id}`;
            const firstImage = project.Gambar[0];
            return (
              <Link to={dynamic} key={project.id}>
                <div
                  className={styles.cardContent}>
                  <img className={styles.image} src={firstImage} alt={project.name} />
                  <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{
                      y: 0, opacity: 1
                    }}
                    transition={{
                      type: "spring",
                      bounce:0.8,
                      delay: 0.8, duration: 2
                    }}
                    className={styles.intro}>
                    <div className={styles.fonts}>
                      <h3>{project.name}</h3>
                      <h3>{project.type}</h3>
                    </div>
                  </motion.div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
