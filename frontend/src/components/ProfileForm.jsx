import React, { useState } from 'react';
import { User, GraduationCap, Brain, Briefcase, Target, ArrowRight, ArrowLeft, CheckCircle, Star } from 'lucide-react';

const ProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    age: '',
    education: '',
    cgpa: '',
    currentStatus: '',
    
    // Interests
    interests: [],
    
    // Skills
    technicalSkills: [],
    softSkills: [],
    
    // Work Preferences
    workStyle: '',
    workLocation: '',
    teamSize: '',
    workEnvironment: '',
    
    // Career Goals
    careerGoals: [],
    timeCommitment: '',
    preferredIndustries: []
  });

  const totalSteps = 5;

  const interestOptions = [
    { id: 'technology', label: 'Technology & Software', icon: '💻' },
    { id: 'design', label: 'Design & Creativity', icon: '🎨' },
    { id: 'business', label: 'Business & Strategy', icon: '📊' },
    { id: 'data', label: 'Data & Analytics', icon: '📈' },
    { id: 'marketing', label: 'Marketing & Sales', icon: '📢' },
    { id: 'healthcare', label: 'Healthcare & Medicine', icon: '⚕️' },
    { id: 'education', label: 'Education & Training', icon: '📚' },
    { id: 'finance', label: 'Finance & Investment', icon: '💰' },
    { id: 'engineering', label: 'Engineering & Manufacturing', icon: '⚙️' },
    { id: 'media', label: 'Media & Communication', icon: '📺' },
    { id: 'research', label: 'Research & Development', icon: '🔬' },
    { id: 'social', label: 'Social Impact & NGO', icon: '🤝' }
  ];

  const technicalSkillOptions = [
    'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Machine Learning', 
    'Data Analysis', 'UI/UX Design', 'Project Management', 'Digital Marketing',
    'Cloud Computing', 'Cybersecurity', 'Mobile Development', 'DevOps',
    'Blockchain', 'AI/ML', 'Data Science', 'Web Development'
  ];

  const softSkillOptions = [
    'Leadership', 'Communication', 'Problem Solving', 'Critical Thinking',
    'Creativity', 'Teamwork', 'Time Management', 'Adaptability',
    'Emotional Intelligence', 'Negotiation', 'Public Speaking', 'Mentoring'
  ];

  const careerGoalOptions = [
    { id: 'high-salary', label: 'High Salary Potential', icon: '💰' },
    { id: 'work-life-balance', label: 'Work-Life Balance', icon: '⚖️' },
    { id: 'creative-freedom', label: 'Creative Freedom', icon: '🎨' },
    { id: 'leadership', label: 'Leadership Opportunities', icon: '👑' },
    { id: 'remote-work', label: 'Remote Work Options', icon: '🏠' },
    { id: 'continuous-learning', label: 'Continuous Learning', icon: '📖' },
    { id: 'social-impact', label: 'Social Impact', icon: '🌍' },
    { id: 'job-security', label: 'Job Security', icon: '🔒' },
    { id: 'innovation', label: 'Innovation & Technology', icon: '🚀' },
    { id: 'entrepreneurship', label: 'Entrepreneurship', icon: '💼' }
  ];

  const industryOptions = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'E-commerce',
    'Entertainment', 'Automotive', 'Aerospace', 'Energy', 'Real Estate',
    'Consulting', 'Government', 'Non-profit', 'Agriculture', 'Fashion'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Profile submitted successfully! Redirecting to recommendations...');
  };

  const getStepIcon = (step) => {
    const icons = [User, GraduationCap, Brain, Briefcase, Target];
    const Icon = icons[step - 1];
    return <Icon className="w-6 h-6" />;
  };

  const getStepTitle = (step) => {
    const titles = [
      'Personal Information',
      'Interests & Passions',
      'Skills Assessment',
      'Work Preferences',
      'Career Goals'
    ];
    return titles[step - 1];
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Age</label>
                <select
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select age range</option>
                  <option value="18-22">18-22</option>
                  <option value="23-27">23-27</option>
                  <option value="28-32">28-32</option>
                  <option value="33-37">33-37</option>
                  <option value="38+">38+</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Education Level</label>
                <select
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">CGPA/Percentage</label>
                <input
                  type="text"
                  value={formData.cgpa}
                  onChange={(e) => handleInputChange('cgpa', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                  placeholder="e.g., 8.5 or 85%"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Current Status</label>
              <select
                value={formData.currentStatus}
                onChange={(e) => handleInputChange('currentStatus', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="">Select current status</option>
                <option value="student">Student</option>
                <option value="fresh-graduate">Fresh Graduate</option>
                <option value="working-professional">Working Professional</option>
                <option value="career-changer">Career Changer</option>
                <option value="unemployed">Unemployed</option>
              </select>
            </div>
          </div>
        );