import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

const Add = ({ onAddMovie }) => {
    const history = useNavigate ();

    const [formData, setFormData] = useState({
        src: "",
        title: "",
        type: "",
        description: "",
        rate: "",
        long_description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Generowanie automatycznego ID - możesz użyć np. timestamp
        const id = new Date().getTime();

        // Tworzenie nowego filmu z formularza
        const newMovie = { id, ...formData };

        // Dodawanie filmu i przekierowanie
        onAddMovie(newMovie);
        history.push("/");
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
                        value={formData.src}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Type:
                    <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Rate:
                    <input
                        type="number"
                        name="rate"
                        value={formData.rate}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Long Description:
                    <textarea
                        name="long_description"
                        value={formData.long_description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
};

export default Add;
