import React from 'react'
import Navbar from '../../components/navbar/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import aboutStyles from './about.module.css'
import { mediaSocial } from '../../components/constants/media_sosial'
import DescriptionAbout from '../../components/card/carddescription/DescriptionAbout'
import { Link } from 'react-router-dom'
import CardProfileAbout from '../../components/card/cardprofile/CardProfileAbout'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={aboutStyles.containerAbout}>
        <CardProfileAbout />
        <DescriptionAbout />
        <div className={aboutStyles.divSocmed}>
          {mediaSocial.map((data) => {
            return (
              <Link to={data.link} key={data.id} style={{ justifyContent: "flex-start" }}>
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 0.8 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                  }}
                  className={aboutStyles.cardSocmed}>
                  <motion.img
                    initial={{ rotate: 90, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    whileHover={{ scale: 0.8, rotate: 180, opacity: 0.8 }}
                    whileTap={{scale:0.8, rotate:180, opacity:0.8}}
                    transition={{
                      type: "spring",
                      bounce: 0.5,
                      duration:1.2
                    }}
                    src={data.image} alt={data.name} className={aboutStyles.imgSocmed} key={data.id}/>
                  <p>{data.name}</p>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default About