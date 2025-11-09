import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all the components you will create
import Homepage from './Homepage';
import Login from './Login';
import Register from './register';
// You will create these next
// import FarmerDashboard from './FarmerDashboard';
// import BuyerDashboard from './BuyerDashboard';
// import AdminPanel from './AdminPanel';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Add routes for your other pages as you create them */}
                    {/* <Route path="/farmer" element={<FarmerDashboard />} /> */}
                    {/* <Route path="/buyer" element={<BuyerDashboard />} /> */}
                    {/* <Route path="/admin" element={<AdminPanel />} /> */}

                    {/* Route for the ML Prediction feature (Optional, but highly recommended) */}
                    {/* <Route path="/predict" element={<PredictionTool />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;