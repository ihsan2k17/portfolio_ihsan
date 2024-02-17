import { useState } from "react";
import { aboutInterface } from "../../../../utils/cardaboutus";
import AboutSlideStyle from './aboutslider.module.css'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

interface props {
    aboutImages: aboutInterface[];

}

const CardAboutSlider = ({ aboutImages }: props) => {
    const [aboutIndex, setAboutIndex] = useState(0);
    const nextImg = () => {
        setAboutIndex(index => {
            if (index === aboutImages.length - 1) return 0
            return index + 1
        })
    }
    const previousImg = () => {
        setAboutIndex(index => {
            if (index === 0) return aboutImages.length - 1
            return index - 1
        })
    }
    return (
        <section className={AboutSlideStyle.containerProfiles}>
            <div className={AboutSlideStyle.cardContainerProfiles}>
                {aboutImages.map(profile => {
                    return (
                        <img
                            key={profile.id}
                            src={profile.Image}
                            alt={profile.name}
                            className={AboutSlideStyle.img_profile}
                            aria-label={`image ${profile.name}`}
                            style={{
                                translate: `${-100 * aboutIndex}%`
                            }}
                        />
                    )
                })}
            </div>
            <button
                key={aboutIndex - 1}
                onClick={previousImg}
                className={AboutSlideStyle.img_slider_btn_left}
                aria-label='View Previous Image'>
                <FaCaretLeft className={AboutSlideStyle.img_slider_icon} />
            </button>
            <button
                key={aboutIndex + 1}
                onClick={nextImg}
                className={AboutSlideStyle.img_slider_btn_right}
                aria-label={`View Next Image`}>
                <FaCaretRight className={AboutSlideStyle.img_slider_icon} />
            </button>
        </section>
    )
}

export default CardAboutSlider