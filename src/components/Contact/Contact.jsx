import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleIframeLoad = () => {
        if (submitted) {
            setShowSuccess(true);
            const form = document.querySelector('form');
            if (form) form.reset();
            setSubmitted(false);
            setTimeout(() => setShowSuccess(false), 5000);
        }
    };

    return (
        <section className={styles.contact} id="contact">
            <h2 className="heading">Contact <span className="highlight">Me</span></h2>

            <iframe
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: 'none' }}
                onLoad={handleIframeLoad}
            ></iframe>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className={styles.successMessage}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <FaCheckCircle /> Message Sent Successfully!
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeOUi45lvJUy5EVhCpyA-4dAlyHGSGXwW2qWa06-pgfikC5tg/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <input type="hidden" name="fvv" value="1" />
                <input type="hidden" name="fbzx" value="8695148455753551156" />
                <input type="hidden" name="pageHistory" value="0" />

                <div className={styles.inputBox}>
                    <input type="text" name="entry.1250149358" placeholder="Full Name" required />
                    <input type="email" name="entry.1826848636" placeholder="Email Address" required />
                </div>
                <div className={styles.inputBox}>
                    <input type="number" name="entry.122569306" placeholder="Mobile Number" />
                    <input type="text" name="entry.1451405112" placeholder="Email Subject" required />
                </div>
                <textarea name="entry.62604947" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <input type="submit" value="Send Message" className="btn" />


            </motion.form>
        </section>
    );
};

export default Contact;
