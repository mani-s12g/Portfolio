import React from "react";
import GradientDiv from "../../components/ui/GradientDiv/GradientDiv";
import styles from "./Certifications.module.css";
import { certify } from "../../config/projects";
import EmphasisText from "../../components/ui/GradientDiv/Emphasis/EmphasisText";
// import ff from "."

function Certifications() {
  return (
    <div>
      <GradientDiv
        keywords={certify.certiKeywords}
        gradientStart="#ffff80"
        gradientEnd="#ff9580"
      />
      <div className="inter-body">
        {certify.certIntro.map((part, i) =>
          typeof part === "string" ? (
            part
          ) : (
            <EmphasisText key={i} color={part.color}>
              {part.text}
            </EmphasisText>
          )
        )}
      </div>
      {/* <h2>Certifications</h2> */}
      <section className={styles.certifications}>
        {certify.cartifications.map((item, index) => {
          return (
            <div className={styles.certFlex} key={index}>
              <div className={styles.card}>
                <div className={styles.cardIn}>
                  <img src={item.logo} alt={item.title} />
                  <h3>{item.title}</h3>
                  <small>{item.learningInstitute}</small>
                </div>
                <button
                  className={styles.viewBtn}
                  onClick={() =>
                    window.open(
                      item.credentials,
                      "_blank"
                    )
                  }
                >
                  <span className="cursor-grow">Show credential →</span>
                </button>
              </div>
            </div>
          );
        })}

        {/* <div className={styles.card}>
            <img src="/certs/coursera.png" alt="Coursera Logo" />
            <h3>Coursera Machine Learning</h3>
            <a
              href="https://link-to-certificate.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </div> */}
      </section>
    </div>
  );
}

export default Certifications;
