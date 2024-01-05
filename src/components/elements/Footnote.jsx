import React from "react";
import styles from "../styles/Footnote.module.css";

const Footnote = () => {
    return (
        <footer className="d-flex justify-content-center">
            <p className={styles.footerStyle}>The website was created for a project called <b> "Programowanie reaktywne II" </b>. The
                author of the website is <b> Jakub Dojka </b>. All photographs on the site are used from free sources or were
                created by the author.</p>
        </footer>
    );
};

export default Footnote;
