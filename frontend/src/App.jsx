import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProfilePage from './ProfilePage';
import Recommendations from './Recommendations';
import LearningPath from './LearningPath';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/learning-path" element={<LearningPath />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;