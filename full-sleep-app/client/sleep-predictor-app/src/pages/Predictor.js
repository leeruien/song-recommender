import React, { useState } from 'react';
import './Predictor.css';

function Predictor() {
    return (
        <div className="predictor">
            <h1>Sleep Predictor</h1>
            <div className="inputs">
                <input
                    type="text"
                    placeholder="Enter your sleep data"
                />
                <button>Predict Sleep Quality</button>
            </div>
        </div>
    )
}
export default Predictor;