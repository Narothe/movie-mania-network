import React from "react";
import styles from "./Footnote.module.css";

const Footnote = () => {
    return (
        <footer className="d-flex justify-content-center">
            <p className={styles.footerStyle}>The website was created for a project called <b> "Programowanie reaktywne II" </b>. The
                author of the website is <b> Jakub Dojka </b>.</p>
        </footer>
    );
};

export default Footnote;
