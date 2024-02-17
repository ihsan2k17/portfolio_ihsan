import { FormEvent, useRef } from 'react'
import SubsStyle from './cardsubs.module.css'
import emailjs from '@emailjs/browser'

const CardSubs = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.
                sendForm(
                    'service_i9cbloa', 'template_clvvwc3', form.current, {
                    publicKey: 'bozHc3ZuLyGBQNQDS'
                })
                .then(
                    () => {
                        console.log('success');
                    },
                    (error) => {
                        console.log('failed', error.text)
                    }

                )
        }
    }
    return (
        <div className={SubsStyle.div}>
            <form ref={form} onSubmit={sendEmail} className={SubsStyle.form}>
                <label
                    htmlFor="from_name"
                    className={SubsStyle.label}>
                    Name
                </label>
                <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    placeholder='Your Name'
                    className={SubsStyle.input}
                // tambahkan atribut lainnya jika diperlukan
                />

                <label
                    htmlFor="from_email"
                    className={SubsStyle.label}>
                    Email
                </label>
                <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    placeholder='Your Email'
                    className={SubsStyle.input}
                // tambahkan atribut lainnya jika diperlukan
                />

                <label
                    htmlFor="message"
                    className={SubsStyle.label}
                >Message</label>
                <textarea
                    id="message"
                    name="message"
                    cols={30}
                    rows={10}
                    className={SubsStyle.textarea}
                // tambahkan atribut lainnya jika diperlukan
                />

                <input type="submit" value="Send" className={SubsStyle.input} />
            </form>
        </div>
    )
}

export default CardSubs