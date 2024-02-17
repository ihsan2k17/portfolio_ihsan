import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import ProfileSlideStyle from './profileslider.module.css'
import { useState } from 'react'
interface Profile {
    id: number;
    name: string;
    Image: string;
}
interface props {
    profileImages: Profile[];

}
const ProfileSlider = ({ profileImages }: props) => {
    const [profilesIndex, setProfilesIndex] = useState(0);
    const nextImg = () => {
        setProfilesIndex(index => {
            if (index === profileImages.length - 1) return 0
            return index + 1
        })
    }
    const previousImg = () => {
        setProfilesIndex(index => {
            if (index === 0) return profileImages.length - 1
            return index - 1
        })
    }
    return (
        <section className={ProfileSlideStyle.containerProfiles}>
            <div className={ProfileSlideStyle.cardContainerProfiles}>
                {profileImages.map(profile => {
                    return (
                        <img
                            key={profile.id}
                            src={profile.Image}
                            alt={profile.name}
                            className={ProfileSlideStyle.img_profile}
                            aria-label={`image ${profile.name}`}
                            style={{
                                translate: `${-100 * profilesIndex}%`
                            }}
                        />
                    )
                })}
            </div>
            <button
                key={profilesIndex - 1}
                onClick={previousImg}
                className={ProfileSlideStyle.img_slider_btn_left}
                aria-label='View Previous Image'>
                <FaCaretLeft className={ProfileSlideStyle.img_slider_icon} />
            </button>
            <button
                key={profilesIndex + 1}
                onClick={nextImg}
                className={ProfileSlideStyle.img_slider_btn_right}
                aria-label={`View Next Image`}>
                <FaCaretRight className={ProfileSlideStyle.img_slider_icon} />
            </button>
        </section>
    )
}

export default ProfileSlider