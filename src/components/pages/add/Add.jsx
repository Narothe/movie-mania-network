import React, { useState } from "react";
import axios from "axios";
import TopContainer from "../../elements/topContainer/TopContainer";
import Footnote from "../../elements/footnote/Footnote";
import HorizontalGap from "../../elements/topContainer/HorizontalGap";
import styles from "./Add.module.css";
import { useSpring, animated } from "react-spring";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/AuthContext";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import SignInButton from "../../elements/signinButton/SignInButton";
// import MainLogo from "../../elements/mainLogo/MainLogo";

const Add = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    const navigate = useNavigate();
    const requiredFields = ["title", "image", "genre", "rate", "productionYear", "backgroundImage", "content"];
    const { token } = useAuth();

    const [formData, setFormData] = useState({
        title: "",
        image: "",
        content: "",
        genre: "",
        rate: 0,
        productionYear: 0,
        backgroundImage: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.rate < 0 || formData.rate > 10) {
            toast.error("Rate should be between 0 and 10.", {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
            });
            return;
        }

        if (!token) {
            toast.error("You need to be logged in to add a movie.", {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
            });
            return;
        }

        try {
            const response = await axios.post("https://at.usermd.net/api/movies", formData);
            setFormData({
                title: "",
                image: "",
                content: "",
                genre: "",
                rate: 0,
                productionYear: 0,
                backgroundImage: "",
            });
            console.log("The data was sent successfully", response.data);
            toast.success("The data was sent successfully!", {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
            });
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (error) {
            console.error("The data wasn't sent successfully", error);
            toast.error("The data wasn't sent successfully!", {
                style: {
                    backgroundColor: 'rgba(49, 46, 49, 0.5)',
                    color: '#FFE1BF',
                },
            });
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <animated.div style={props}>
            <div className={styles.addContainer}>
                <nav className={`d-flex justify-content-center`}>
                    {token ? <LoggedUser/> : <SignInButton/>}
                </nav>
                <div className={styles.properWidth}>
                    <TopContainer text={"Add a Movie"}/>
                </div>
                <HorizontalGap gap={"Form for adding a movie"}/>

                <form onSubmit={handleSubmit} className={styles.addForm}>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            <span className={styles.requiredSymbol}>*</span>
                            Title:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="text"
                                name="title"
                                maxLength="100"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            <span className={styles.requiredSymbol}>*</span>
                            Image Source:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            <span className={styles.requiredSymbol}>*</span>
                            Genre:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="text"
                                name="genre"
                                maxLength="100"
                                value={formData.genre}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            <span className={styles.requiredSymbol}>*</span>
                            Rate:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="number"
                                name="rate"
                                min="0"
                                max="10"
                                value={formData.rate}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            <span className={styles.requiredSymbol}>*</span>
                            Production year:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="number"
                                name="productionYear"
                                min="0"
                                value={formData.productionYear}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            Background image:
                            <input
                                className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                                type="text"
                                name="backgroundImage"
                                value={formData.backgroundImage}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className={styles.addLabels}>
                        <label className={styles.addLabel}>
                            <span className={styles.requiredSymbol}>*</span>
                            Long Description:
                            <textarea
                                className={`${styles.formControl} form-control me-2 ${styles.addHeight} ${styles.addMargin}`}
                                type="text"
                                name="content"
                                maxLength="2000"
                                value={formData.content}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <button className={`btn ${styles.btnColor}`} type="submit">
                        Add Movie
                    </button>
                </form>
                <div className={styles.detailsFootnote}>
                    <Footnote/>
                </div>
            </div>
        </animated.div>
    );
};

export default Add;
