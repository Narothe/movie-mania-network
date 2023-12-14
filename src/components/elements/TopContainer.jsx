import React from "react";
import SmallerMainLogo from "./SmallerMainLogo";

const TopContainer = (props) => {
    const text = props.text;
    return (
        <div className="top-container">
            <h3>{text}</h3>
            <SmallerMainLogo/>
        </div>
    );
};

export default TopContainer;
