import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from 'react-spring';

const NotFound = () => {
    const props = useSpring({opacity: 1, from: {opacity: 0}});

    useEffect(() => {
        document.title = 'Movie Mania Network';
    }, []);

    return (
        <animated.div style={props}>
            <div className="jumbotron">
                <h1 className="display-4">404 - Not found!</h1>
                <p className="lead">Page you are looking for does not exist.</p>
                <hr className="my-4"/>
                <p>Go back to Home</p>
                <Link className="btn btn-primary btn-lg" to="/" role="button">Home</Link>
            </div>
        </animated.div>
    );
};

export default NotFound;
