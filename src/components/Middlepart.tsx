import React from "react";
import "../styles/middlepart.css";

const Middlepart = () => {
  return (
    <>
      <main>
        <section>
          <div
            className="hero-section"
            style={{ backgroundImage: "url('/pic1.jpg')" }}
          >
            <div className="hero-content">
              <p className="subtitle">it&apos;s me</p>
              <h1 className="title">
                KAMLESH <br /> KUMAR
              </h1>
              <p className="role">FullStack Developer</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="image-container">
            <div
              className="about-image"
              style={{ backgroundImage: "url('/pic2.jpg')" }}
            ></div>
          </div>
          <div className="about-content">
            <h2>About Myself</h2>
            <p>
              &#39;Welcome to my portfolio! I&apos;m a passionate and skilled full-stack
              developer with a deep understanding of both front-end and back-end
              technologies. My goal is to build seamless, responsive, and efficient
              applications that provide a great user experience while meeting
              business goals. Let&apos;s create something amazing together!&#39;
            </p>
          </div>
        </section>

        <section className="services-section">
          <h2>Service Offers</h2>
          <p className="services-description">
            &quot;I offer end-to-end web development services, from crafting intuitive
            front-end designs to building robust back-end solutions.&quot;
          </p>
          <div className="services-grid">
            <div className="service-item">
              <i className="fa fa-television"></i>
              <p className="service-title">Web Design</p>
              <p className="service-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias
                optio quae doloremque.
              </p>
            </div>
            <div className="service-item">
              <i className="fa fa-mobile"></i>
              <p className="service-title">Application Development</p>
              <p className="service-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias
                optio quae doloremque.
              </p>
            </div>
            <div className="service-item">
              <i className="fa fa-desktop"></i>
              <p className="service-title">Web Development</p>
              <p className="service-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias
                optio quae doloremque.
              </p>
            </div>
            <div className="service-item">
              <i className="fa fa-database"></i>
              <p className="service-title">DBMS</p>
              <p className="service-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas alias
                optio quae doloremque.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Middlepart;
