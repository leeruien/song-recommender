import React, { useState } from 'react';
import './App.css';
import Dropdown from './Dropdown';

function App() {
  const [selectedValues, setSelectedValues] = useState({
    category1: '',
    category2: '',
    category3: '',
    category4: '',
    category5: '',
  });

  const handleChange = (category, value) => {
    setSelectedValues((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>AI Song Recommender</h1>
      </header>

      <main className="App-main">
        <div className="dropdown-container">
          <Dropdown
            label="Mood"
            options={['happy', 'emotional', 'neutral', 'angry']}
            value={selectedValues.category1}
            onChange={(value) => handleChange('category1', value)}
          />
          <Dropdown
            label="Language"
            options={['Chinese', 'English', 'Japanese', 'Korean', 'Others']}
            value={selectedValues.category2}
            onChange={(value) => handleChange('category2', value)}
          />
          <Dropdown
            label="Genre"
            options={['Country', 'Hip hop', 'Rock', 'Pop', 'Classical']}
            value={selectedValues.category3}
            onChange={(value) => handleChange('category3', value)}
          />
          <Dropdown
            label="Time Period"
            options={['1970', '1980', '1990', '2000', '2010', '2020']}
            value={selectedValues.category4}
            onChange={(value) => handleChange('category4', value)}
          />
          <div className="optional-input">
            <label htmlFor="optionalInput">Other (optional):</label>
            <input
              id="optionalInput"
              type="text"
              placeholder="Type something..."
              value={selectedValues.optionalInput}
              onChange={(e) => handleChange('optionalInput', e.target.value)}
            />
          </div>
        </div>

        <div className="output-box">
          <h3>AI Output</h3>
          <p>{Object.values(selectedValues).some(v => v) ? JSON.stringify(selectedValues, null, 2) : "Please select options above."}</p>
        </div>
      </main>
    </div>
  );
}

export default App;