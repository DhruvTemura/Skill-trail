import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    interests: '',
    preferredWorkStyle: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/recommend', formData);
      navigate('/recommendations', { state: response.data }); // Pass data to next page
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Tell us about yourself</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="interests" placeholder="Interests (comma separated)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <input name="preferredWorkStyle" placeholder="Preferred Work Style (e.g. Remote)" onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Get Recommendations
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
