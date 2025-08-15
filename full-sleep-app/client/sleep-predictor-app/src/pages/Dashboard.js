import React, { useState, useEffect } from 'react';
import './Dashboard.css';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
//import data from cleaned_sleep_data under models


function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Important Sleep Metrics</h1>
            <div className="metrics">
            </div>
        </div>
    )
}

export default Dashboard;