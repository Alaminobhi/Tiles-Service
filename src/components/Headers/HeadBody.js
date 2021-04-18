import React from 'react';
import { Link } from 'react-router-dom';

const HeadBody = () => {
    return (
        <main className="text-center p-5">
            <h1 style={{ color: "#3a4256" }}> Marble & Tiles <br/> Fitting Service </h1>
            <p className="text-dark"><b> Obhi Marble Service is the best Service Provider of Marble and Tiles Installation,<br/> We always provide the best quality Floor Polishing and Bathroom Tiles & Marble Fitting... </b></p>
            <Link className="btn btn-success" to="/contact"> Contact US </Link>
            <div>
                <marquee behavior="scroll" direction="left" scrollamount="8"><h4 className="text-danger mt-2">Welcome to Our Marbel and Tiles Fitting Service! </h4> </marquee>

            </div>
        </main>
    );
};

export default HeadBody;