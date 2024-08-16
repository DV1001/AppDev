// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignInSide from './components/SignInSide'; 
import StartGardeningPage from './components/StartGardeningPage';
import ExploreKitsPage from './components/ExploreKitsPage';
import GardenTools from './components/GardenTools';
import PlantDetails from './components/PlantDetails';
import SignUpSide from './components/SignUpSide';
import Tracker from './components/Tracker';
import Planner from './components/Planner';
import Identity from './components/Identity';
import Account from './components/Account';
import ToolDetail from './ToolDetail';
import Schedule from './components/Schedule';
import PlantList from './components/PlantList';
import PlantDetail from './components/PlantDetails';
import Faq from './components/Faq';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Account />} /> 
        <Route path="/gardening-kits" element={<ExploreKitsPage />} />
        <Route path="/start-gardening" element={<StartGardeningPage />} /> 
        <Route path="/garden-tools" element={<GardenTools />} /> 
        <Route path="/tools/:id" element={<ToolDetail />} />
        <Route path="/sign-in" element={<SignInSide />} />
        <Route path="/sign-up" element={<SignUpSide/>} />
        <Route path="/plant/:id" element={<PlantDetails />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/track" element={<Tracker />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/list" element={<PlantList/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </Router>
  );
}

export default App;
