import './Chatbot.css';
import React, { useState, useRef } from 'react';

function Chatbot() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [response, setResponse] = useState("");
    // const lastMessage = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setError('');
        // setInput('');
        setResponse('');
        setSubmitted(true);
        try {
            // chatbot - need set up server
            const res = await fetch('http://localhost:5000/api/chatbot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ input }),
            }
            );
            const data = await res.json();
            console.log("API response data", data);
            if (data.error) {
                setError(data.error);
            } else {
                // setInput(data.input); dont change this, undefined -> this is input
                setResponse(data.reply);
            }
            } catch (err) {
                setError('Network error: ' + err.message);
            } finally {
                setLoading(false);
            }
    };
    const handleInputChange = (e) => {
        setInput(e.target.value);
        setSubmitted(false);
        setResponse('');
        setError('');
    };
    const handleClear = (e) => {
        setInput('');
        setResponse('');
        setSubmitted(false);
        setError('');
    };
    return (
        <div className="chatbot">
            <h1>Require Clarification?</h1>
            <div className="chatbot-inputs">
                <input
                    type="text"
                    value= {input}
                    onChange={handleInputChange}
                    placeholder='Type your question here...'
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && input.trim() && !loading) {
                            handleSubmit();
                        }
                    }}
                />
                <button onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Thinking...' : 'Ask Away!'}
                </button>
                <button onClick={handleClear} disabled={loading || !input}>
                    Clear
                </button>
            </div>
            <div className="chatbot-response">
                {error && <p className="error">{error}</p>}
                {!error && submitted && <p className="response">{response}</p>}
            </div>
        </div>
    )
}
export default Chatbot;