import { useState } from 'react'
import imageSlideStyle from './imageslide.module.css'
import { FaCaretRight, FaCaretLeft } from "react-icons/fa6";

interface props {
    Slides: string[],
    alt: string
}
const ImageSlider = ({ Slides, alt }: props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImg = () => {
        setCurrentIndex(index => {
            if (index === Slides.length - 1) return 0
            return index + 1
        })
    }
    const previousImg = () => {
        setCurrentIndex(index => {
            if (index === 0) return Slides.length - 1
            return index - 1
        })
    }
    return (
        <section className={imageSlideStyle.card_img_slide}>
            <div className={imageSlideStyle.cardSlide}>
                {Slides.map(url => (
                    <img
                        src={url}
                        key={url}
                        alt={alt}
                        className={imageSlideStyle.img_slider_img}
                        aria-label={`image ${url}`}
                        style={{
                            translate: `${-100 * currentIndex}%`
                        }} />
                ))}
            </div>
            <button
                key={currentIndex - 1}
                onClick={previousImg}
                className={imageSlideStyle.img_slider_btn_left}
                aria-label='View Previous Image'>
                <FaCaretLeft className={imageSlideStyle.img_slider_icon} />
            </button>
            <button
                key={currentIndex + 1}
                onClick={nextImg}
                className={imageSlideStyle.img_slider_btn_right}
                aria-label={`View Next Image`}>
                <FaCaretRight className={imageSlideStyle.img_slider_icon} />
            </button>
        </section>
    )
}

export default ImageSlider