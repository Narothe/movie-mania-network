import React, { useState, useEffect } from "react";
import moviesData from "../elements/moviesData.json";
import TopContainer from "../elements/TopContainer";
import Footnote from "../elements/Footnote";
import HorizontalGap from "../elements/horizontalGap";
import styles from"../styles/Add.module.css";

const Add = () => {

    const [setLastId] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Udało się pobrać dane");

                const data = moviesData;
                const maxId = Math.max(...data.map((movie) => movie.id));
                setLastId(maxId);
                console.log('Ostatni numer id:', maxId);

            } catch (error) {
                console.error("Błąd podczas pobierania danych:", error);
            }
        };

        fetchData();
    });


    const handleSubmit = () => {
        console.log('Zapis danych przy pomocy API (aktualnie brak możliwości zapisu)')
        alert('Zapis danych przy pomocy API (aktualnie brak możliwości zapisu)');

    };

    return (
        <div className={styles.addContainer}>
            <TopContainer text={'Add a Movie'}/>
            <HorizontalGap gap={'Form for adding a movie'}/>

            <form onSubmit={handleSubmit} className={styles.addForm}>
                <div className={styles.addLabels}>
                    <label className={styles.addLabel}>
                        Image Source:
                        <input
                            className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                            type="text"
                            name="src"
                        />
                    </label>
                </div>
                <div className={styles.addLabels}>
                    <label className={styles.addLabel}>
                        Title:
                        <input
                            className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                            type="text"
                            name="title"
                        />
                    </label>
                </div>
                <div className={styles.addLabels}>
                    <label className={styles.addLabel}>
                        Type:
                        <input
                            className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                            type="text"
                            name="type"
                        />
                    </label>
                </div>
                <div className={styles.addLabels}>
                    <label className={styles.addLabel}>
                        Short description:
                        <input
                            className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                            type="text"
                            name="description"
                        />
                    </label>
                </div>
                <div className={styles.addLabels}>
                    <label className={styles.addLabel}>
                        Rate (1-10):
                        <input
                            className={`${styles.formControl} form-control me-2 ${styles.addMargin}`}
                            type="number"
                            name="rate"
                        />
                    </label>
                </div>
                <div className={styles.addLabels}>
                    <label className={styles.addLabel}>
                        Long Description:
                        <textarea
                            className={`${styles.formControl} form-control me-2 ${styles.addHeight} ${styles.addMargin}`}
                            type="text"
                            name="long_description"
                        />
                    </label>
                </div>
                <button className={`btn ${styles.btnColor}`} type="submit">Add Movie</button>
            </form>
            <div className={styles.detailsFootnote}>
                <Footnote/>
            </div>
        </div>
    );
};

export default Add;
