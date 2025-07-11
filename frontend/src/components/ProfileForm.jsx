import React, { useState } from 'react';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    cgpa: '',
    interests: [],
    skills: [],
    workStyle: '',
  });

  const interestOptions = ['Technology', 'Business', 'Design', 'Art', 'Finance'];
  const skillOptions = ['Python', 'JavaScript', 'UI/UX', 'Data Analysis', 'Marketing'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMultiSelect = (type, value) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Profile:', formData);
    // TODO: Send this to backend or ML API
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">SkillTrail - Build Your Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="name" placeholder="Name" value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <input type="text" name="education" placeholder="Education (e.g., B.Tech CSE)" value={formData.education}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />

        <input type="number" step="0.1" name="cgpa" placeholder="CGPA" value={formData.cgpa}
          onChange={handleChange}
          className="w-full p-3 border rounded-md"
        />

        <div>
          <p className="font-medium mb-1">Interests</p>
          <div className="flex flex-wrap gap-2">
            {interestOptions.map((interest) => (
              <button
                type="button"
                key={interest}
                className={`px-4 py-2 border rounded-full ${
                  formData.interests.includes(interest)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100'
                }`}
                onClick={() => handleMultiSelect('interests', interest)}
              >
                {interest}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium mb-1">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skillOptions.map((skill) => (
              <button
                type="button"
                key={skill}
                className={`px-4 py-2 border rounded-full ${
                  formData.skills.includes(skill)
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100'
                }`}
                onClick={() => handleMultiSelect('skills', skill)}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium mb-1">Preferred Work Style</p>
          <select
            name="workStyle"
            value={formData.workStyle}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          >
            <option value="">Select...</option>
            <option value="Remote">Remote</option>
            <option value="On-Site">On-Site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Team">Team Work</option>
            <option value="Individual">Individual</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
          Get Career Recommendations
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
