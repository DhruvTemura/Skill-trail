import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProfileForm from './components/ProfileForm';
import Recommendations from './components/Recommendations';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/profile' element={<ProfileForm />} />
        <Route path='/recommendations' element={<Recommendations />} />
      </Routes>
    </div>
  );
}

export default App;
