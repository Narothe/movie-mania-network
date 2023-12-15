import React from "react";
import TopContainer from "../elements/TopContainer";

const Signup = () => {
    const handleSubmit = () => {
        console.log('Zarejestrowano nowe konto')
        alert('Konto utworzone! (aktualnie brak możliwości utworzenia konta)');
    };
    return (
        <div >
            <p>signup</p>
        </div>
    );
};

export default Signup;
