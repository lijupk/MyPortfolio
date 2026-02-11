import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contact} id="contact">
            <h2 className="heading">Contact <span className="highlight">Me</span></h2>

            <motion.form
                action="#"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.inputBox}>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                </div>
                <div className={styles.inputBox}>
                    <input type="number" placeholder="Mobile Number" />
                    <input type="text" placeholder="Email Subject" />
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" className="btn" />
            </motion.form>
        </section>
    );
};

export default Contact;
