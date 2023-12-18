import React, { useState, useEffect } from "react";
import moviesData from "../elements/moviesData.json";
import TopContainer from "../elements/TopContainer";
import Footnote from "../elements/Footnote";

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
        <div className="add-container">
            <TopContainer text={'Add a Movie'}/>
            <h4>Form for adding a movie</h4>
            <hr/>
            <form onSubmit={handleSubmit} className="add-form">
                <div className="add-labels">
                    <label className="add-label">
                        Image Source:
                        <input
                            className="form-control me-2 add-margin"
                            type="text"
                            name="src"
                        />
                    </label>
                </div>
                <div className="add-labels">
                    <label className="add-label">
                        Title:
                        <input
                            className="form-control me-2 add-margin"
                            type="text"
                            name="title"
                        />
                    </label>
                </div>
                <div className="add-labels">
                    <label className="add-label">
                        Type:
                        <input
                            className="form-control me-2 add-margin"
                            type="text"
                            name="type"
                        />
                    </label>
                </div>
                <div className="add-labels">
                    <label className="add-label">
                        Short description:
                        <input
                            className="form-control me-2 add-margin"
                            type="text"
                            name="description"
                        />
                    </label>
                </div>
                <div className="add-labels">
                    <label className="add-label">
                        Rate (1-10):
                        <input
                            className="form-control me-2 add-margin"
                            type="number"
                            name="rate"
                        />
                    </label>
                </div>
                <div className="add-labels">
                    <label className="add-label">
                        Long Description:
                        <textarea
                            className="form-control me-2 add-super-height add-margin"
                            type="text"
                            name="long_description"
                        />
                    </label>
                </div>
                <button className="btn btn-color" type="submit">Add Movie</button>
            </form>
            <div className="details-footnote">
                <Footnote/>
            </div>
        </div>
    );
};

export default Add;
