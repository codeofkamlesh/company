import React from "react";
import styles from "../../styles/about.module.css";



const About = () => {
  return (
    <main className={styles.main}>
      <div className={styles.resumeLink}>
        <a
          href="https://milestone-1-static-resume-with-html-css-and-typescript.vercel.app/"
          className={styles.link}
        >
          View Resume
        </a>
      </div>

      <section id="edu-sec" className={styles.section}>
        <div className={styles.sectionContent}>
          <h1 className={styles.title}>Education</h1>
          <hr className={styles.line} />
          <div className={styles.educationItem}>
            <h4 className={styles.subtitle}>
              Diploma In Information Technology (SBTE)
            </h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
              dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.educationItem}>
            <h4 className={styles.subtitle}>
              CBT Computer Operator (Information Technology)
            </h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit elit Lorem ipsum dolor
              sit amet consectetur adipisicing elit...
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.educationItem}>
            <h4 className={styles.subtitle}>
              Certified Cloud and Applied Generative AI Engineering (GIAIC)
            </h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit
              amet consectetur adipisicing elit elit...
            </p>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section id="exp-sec" className={styles.section}>
        <div className={styles.sectionContent}>
          <h1 className={styles.title}>Experience</h1>
          <hr className={styles.line} />
          <div className={styles.educationItem}>
            <h4 className={styles.subtitle}>MS-Office (Word, Excel, PowerPoint)</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit adipisicing elit Lorem ipsum dolor
              sit amet consectetur adipisicing elit...
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.educationItem}>
            <h4 className={styles.subtitle}>Web Designing/Development</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              consectetur adipisicing elit adipisicing elit...
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.educationItem}>
            <h4 className={styles.subtitle}>Application Development</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit consectetur adipisicing elit Lorem ipsum dolor
              sit amet consectetur adipisicing elit...
            </p>
          </div>
          <hr className={styles.line} />
          <div className={styles.educationItem}>
            <h4 className={styles.subtitle}>DBMS (MySQL)</h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit consectetur adipisicing elit...
            </p>
          </div>
        </div>
      </section>

      <hr className={styles.divider} />

      <section className={styles.skills}>
        <h2 className={styles.title}>Programming Skills</h2>
        {[
          { skill: "HTML", width: "98%" },
          { skill: "CSS", width: "95%" },
          { skill: "JavaScript", width: "85%" },
          { skill: "TypeScript", width: "85%" },
          { skill: "Node.js", width: "80%" },
          { skill: "Next.js", width: "80%" },
          { skill: "Python", width: "75%" },
        ].map(({ skill, width }) => (
          <div key={skill} className={styles.skill}>
            <span className={styles.skillName}>{skill}</span>
            <div className={styles.skillBarContainer}>
              <div
                className={styles.skillBar}
                style={{ width }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <hr className={styles.divider} />

      <section className={styles.projects}>
        <h2 className={styles.title}>CLI Based Projects</h2>
        <div className={styles.projectGrid}>
          {Array(12)
            .fill("Calculator")
            .map((title, index) => (
              <div key={index} className={styles.projectCard}>
                <p>{title}</p>
                <a href="https://github.com/codeofkamlesh/First-CLI-calculator.git">
                  https://github.com/codeofkamlesh/First-CLI-calculator.git
                </a>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default About;
