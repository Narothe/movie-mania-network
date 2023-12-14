import React, { useState, useEffect } from "react";
import moviesData from "../elements/moviesData.json";

const Add = () => {

    const [lastId, setLastId] = useState(0);

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
    }, []);


    const handleSubmit = () => {
        console.log('Zapis danych przy pomocy API (aktualnie brak możliwości zapisu)')
    };

    return (
        <div>
            <h2>Add a Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Image Source:
                    <input
                        type="text"
                        name="src"
                    />
                </label>
                <br />
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                    />
                </label>
                <br />
                <label>
                    Type:
                    <input
                        type="text"
                        name="type"
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="description"
                    />
                </label>
                <br />
                <label>
                    Rate:
                    <input
                        type="number"
                        name="rate"
                    />
                </label>
                <br />
                <label>
                    Long Description:
                    <textarea
                        name="long_description"
                    />
                </label>
                <br />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default Add;
