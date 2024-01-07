import React, { useState } from "react";
import axios from "axios";
import TopContainer from "../elements/TopContainer";
import Footnote from "../elements/Footnote";
import HorizontalGap from "../elements/horizontalGap";
import styles from "../styles/Add.module.css";
import { useSpring, animated } from "react-spring";

const Add = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Wysyłanie danych na serwer za pomocą funkcji POST i axios
            const response = await axios.post("https://at.usermd.net/api/movies", formData);

            console.log("Dane zostały wysłane pomyślnie:", response.data);

            // Zresetuj formularz lub przekieruj gdzieś po udanym dodaniu
            setFormData({
                title: "",
                image: "",
                content: "",
            });
        } catch (error) {
            console.error("Błąd podczas wysyłania danych:", error);
        }
    };

    const handleChange = (e) => {
        // Aktualizuj stan formularza przy każdej zmianie
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <animated.div style={props}>
            <div className={styles.addContainer}>
                <TopContainer text={"Add a Movie"} />
                <HorizontalGap gap={"Form for adding a movie"} />

                <form onSubmit={handleSubmit} className={styles.addForm}>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            Title:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            Image Source:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            Long Description:
                            <textarea
                                className={`${styles.formControl} form-control me-2 ${styles.addHeight} ${styles.addMargin}`}
                                type="text"
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <button className={`btn ${styles.btnColor}`} type="submit">
                        Add Movie
                    </button>
                </form>
                <div className={styles.detailsFootnote}>
                    <Footnote />
                </div>
            </div>
        </animated.div>
    );
};

export default Add;
