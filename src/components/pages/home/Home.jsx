import React, { useEffect, useState } from "react";
import { useAuth } from "../../utils/AuthContext";
import { jwtDecode } from "jwt-decode";
import Footnote from "../../elements/footnote/Footnote";
import SignInButton from "../../elements/signinButton/SignInButton";
import LoggedUser from "../../elements/loggedUser/LoggedUser";
import MainLogo from "../../elements/mainLogo/MainLogo";
import { useSpring, animated } from "react-spring";
import styles from "./Home.module.css";
import Movies from "../../elements/movies/Movies";
import ChartComponent from "../statistics/ChartComponent";

const Home = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });
    const { token } = useAuth();
    const decoded = token ? jwtDecode(token) : null;
    const [last7DaysData, setLast7DaysData] = useState([]);

    useEffect(() => {
        document.title = "Movie Mania Network";

        // Dzisiejsza data
        const currentDate = new Date();
        const currentDateString = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

        // Pobierz dane z local storage
        const visitData = JSON.parse(localStorage.getItem("visitData")) || [];

        // Sprawdź, czy mamy już wpis dla dzisiaj
        const todayEntry = visitData.find(entry => entry.date === currentDateString);

        if (todayEntry) {
            // Jeśli mamy wpis dla dzisiaj, zaktualizuj ilość wejść
            todayEntry.count += 1;
        } else {
            // Jeśli nie mamy wpisu dla dzisiaj, dodaj nowy wpis
            visitData.push({ date: currentDateString, count: 1 });
        }

        // Ogranicz tablicę do ostatnich 7 dni
        const last7DaysData = visitData.slice(-7);

        // Zapisz dane z powrotem do local storage
        localStorage.setItem("visitData", JSON.stringify(last7DaysData));

        // Logowanie danych
        console.log('Visit data for the last 7 days:', last7DaysData);

        // Ustaw stan z danymi
        setLast7DaysData(last7DaysData);
    }, [token]); // Ensure useEffect runs when 'token' changes

    if (!token) {
        console.log("Użytkownik niezalogowany");
    } else {
        console.log("Użytkownik zalogowany\n", decoded);
        console.log("Token\n", token);
    }

    return (
        <animated.div style={props}>
            <div className={`container`}>
                <nav className={`d-flex justify-content-center ${styles.homeNav}`}>
                    {token ? <LoggedUser userData={decoded} /> : <SignInButton />}
                    <MainLogo />
                </nav>
                <div>
                    <Movies />
                </div>
                <div className={styles.footnote}>
                    <Footnote />
                </div>
            </div>
        </animated.div>
    );
};

export default Home;
