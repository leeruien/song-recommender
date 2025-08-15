import React from 'react';
import './Home.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const funFacts = [
        "Tiredness peaks at 2 a.m. and 2 p.m.",
        "Dysania is a condition where you find it hard to get out of bed in the morning",
        "Regular exercise improves sleep patterns",
        "Constant internet access can disrupt sleep",
        "Falling asleep should take 10 to 15 minutes"
    ]

    const [index, setIndex] = useState(0);

    const handleNextFact = () => {
        setIndex((prev) => (prev + 1) % funFacts.length);
    }
    return(
        <div className="home">
            <h1 className="welcome-title">Embark on your journey towards better sleep today!</h1>
            <div className="content-container">
            <div className="features-container">
                <h2 className="section-title">Features</h2>
            <p>Explore our variety of features to gain knowledge on your sleep patterns</p>
            <div className="card-container">
                <Link to="/chatbot" className="card">
                    <div className="picture"></div>
                    <h3>Chatbot
                        <p>Ask our AI assistant</p>
                    </h3>
                
                </Link>
                <Link to="/dashboard" className="card">
                    <div className="picture"></div>
                    <h3>Dashboard
                        <p>View sleep disorder metrics</p>
                    </h3>
                </Link>
                <Link to="/predictor" className="card">
                    <div className="picture"></div>
                    <h3>Predictor
                        <p>Get personalized sleep predictions</p>
                    </h3>
                </Link>
            </div>
            </div>
            <div className="funfacts-container">
                <h2>Did You Know?</h2>
                <p>{funFacts[index]}</p>
                <button className="next-fact-button" onClick={handleNextFact}>Next Fact</button>            
            </div>
            </div>
        </div>
    )

}
export default Home;