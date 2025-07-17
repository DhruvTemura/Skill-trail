import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    interests: '',
    workstyle: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      console.log('Received recommendations:', result);
      
      navigate('/recommendations', { state: { data: result, profile: formData } });
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Tell us about yourself</h2>
        
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Skills</span>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            placeholder="e.g., Python, React, ML"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Interests</span>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            required
            placeholder="e.g., AI, Fintech, Design"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">Preferred Workstyle</span>
          <select
            name="workstyle"
            value={formData.workstyle}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select</option>
            <option value="Remote">Remote</option>
            <option value="On-site">On-site</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </label>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
        >
          Get Recommendations
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
