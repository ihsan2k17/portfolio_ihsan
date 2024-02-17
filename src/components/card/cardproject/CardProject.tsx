// CardProject.jsx

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { EndDumy } from '../../constants/Project'
import animation from '../../../assets/animations/container_animation3.json'
import Lottie from 'lottie-react'
import CardProjectStyles from './cardproject.module.css'

const CardProject = () => {
    return (
        <motion.div className={CardProjectStyles.projectContainer}>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "tween",
                    duration: 1
                }}
                className={CardProjectStyles.titleProject}>
                <h1>This Project</h1>
                <p>
                    Some of my Project, Here are several projects that I have accomplished, and currently,
                    I am in the development stage. Below is a summary of some of these projects <Link to="/Project" className={CardProjectStyles.card__button}>More Project</Link>
                </p>
            </motion.div>
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "tween",
                    duration: 1
                }}
                className={CardProjectStyles.divcard}>
                <div className={CardProjectStyles.card__container}>
                    {EndDumy.map((data) => {
                        const firstImage = data.Gambar[0];
                        const link = `/Project/${data.id}`
                        return (
                            <motion.div
                                initial={{ scale: 0.9 }}
                                whileHover={{ scale: 1 }}
                                key={data.id} className={CardProjectStyles.card__list}>
                                <img src={firstImage} alt="profile" className={CardProjectStyles.card__images} />
                                <div className={CardProjectStyles.card__data}>
                                    <span className={CardProjectStyles.card__name}>{data.name}</span>
                                    <h2 className={CardProjectStyles.card__type}>{data.type}</h2>
                                    <p className={CardProjectStyles.card__description}>{data.description}</p>
                                    <Link to={link} className={CardProjectStyles.card__button}>Read More</Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
                <motion.div className={CardProjectStyles.cardanimation2}>
                    <Lottie animationData={animation} />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default CardProject;
