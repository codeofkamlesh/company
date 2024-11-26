import React from "react";
import styles from "../../styles/contact.module.css";



const Contact = () => {
  return (
    <main className={styles.main}>
      <section className={styles.getInTouchSection}>
        <div className={styles.getInTouchContainer}>
          <h1 className={styles.heading}>Get In Touch</h1>
          <form className={styles.form}>
            <h4 className={styles.formHeading}>
              <u>Drop a Line</u>
            </h4>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className={styles.divider}></div>

      <section className={styles.contactDetailsSection}>
        <div className={styles.contactDetailsContainer}>
          <h4 className={styles.contactHeading}>Contact Me</h4>
          <div className={styles.contactDetail}>
            <i className={`fa fa-phone ${styles.icon}`}></i>
            <span>+921234567890</span>
          </div>
          <div className={styles.contactDetail}>
            <i className={`fa fa-envelope-o ${styles.icon}`}></i>
            <span>Kamlesh_Kumar174@yahoo.com</span>
          </div>
          <div className={styles.contactDetail}>
            <i className={`fa fa-linkedin ${styles.icon}`}></i>
            <a href="https://pk.linkedin.com/in/kamlesh-kumar-a24894ba?trk=public_post_feed-actor-name">
              LinkedIn Profile
            </a>
          </div>
          <div className={styles.contactDetail}>
            <i className={`fa fa-github ${styles.icon}`}></i>
            <a href="https://github.com/codeofkamlesh">GitHub Profile</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
