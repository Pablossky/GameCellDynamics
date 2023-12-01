import React from 'react';
import { Link } from 'react-router-dom';
import './TheoryPage.css';

export const TheoryPage = () => {
    return (
        <>
            <div className="textHome">
                <p>Hi! I'm Paweł ("Pablossky") and this site was made to introduce myself better...</p>
                <p>When it came to realization, the first attempt I made was using JAVA framework Spring...</p>
                <p>Thank you for visiting.</p>
            </div>

            <div className="buttonList">
                <Link to="/whatisgame">
                    <button className="btn btn-primary mr-2">What is Game?</button>
                </Link>

                <Link to="/section2">
                    <button className="btn btn-success mr-2">Section 2</button>
                </Link>

                <Link to="/section3">
                    <button className="btn btn-danger">Section 3</button>
                </Link>
                {/* Add more buttons as needed */}
            </div>
        </>
    );
};
