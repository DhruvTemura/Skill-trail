// src/components/ProfileForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProfileForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    interests: '',
    workstyle: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/recommend', formData);
      const recommendations = res.data;
      navigate('/recommendations', { state: { recommendations } });
    } catch (err) {
      setError('Error fetching recommendations. Try again.');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Career Profile</h2>
        
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input type="text" name="name" onChange={handleChange} value={formData.name} required
                 className="mt-1 p-2 block w-full border rounded-md" />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Skills (comma separated)</span>
          <input type="text" name="skills" onChange={handleChange} value={formData.skills} required
                 className="mt-1 p-2 block w-full border rounded-md" />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Interests (comma separated)</span>
          <input type="text" name="interests" onChange={handleChange} value={formData.interests} required
                 className="mt-1 p-2 block w-full border rounded-md" />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Preferred Workstyle</span>
          <select name="workstyle" onChange={handleChange} value={formData.workstyle} required
                  className="mt-1 p-2 block w-full border rounded-md">
            <option value="">Select</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </label>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Get Recommendations
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
