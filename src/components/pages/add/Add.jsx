import React, { useState } from "react";
import axios from "axios";
import TopContainer from "../../elements/topContainer/TopContainer";
import Footnote from "../../elements/footnote/Footnote";
import HorizontalGap from "../../elements/HorizontalGap";
import styles from "./Add.module.css";
import { useSpring, animated } from "react-spring";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Add = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://at.usermd.net/api/movies", formData);
            setFormData({
                title: "",
                image: "",
                content: "",
            });
            console.log("The data was sent successfully", response.data);
            toast.success("The data was sent successfully!");
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (error) {
            console.error("The data wasn't sent successfully", error);
            toast.error("The data wasn't sent successfully!");
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
