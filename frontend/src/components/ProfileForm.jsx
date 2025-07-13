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

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">What are your main interests? (Select all that apply)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {interestOptions.map(interest => (
                  <div
                    key={interest.id}
                    onClick={() => handleMultiSelect('interests', interest.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.interests.includes(interest.id)
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/10 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{interest.icon}</span>
                      <span className="font-medium">{interest.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Technical Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {technicalSkillOptions.map(skill => (
                  <div
                    key={skill}
                    onClick={() => handleMultiSelect('technicalSkills', skill)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                      formData.technicalSkills.includes(skill)
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/10 hover:border-white/40'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Soft Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                {softSkillOptions.map(skill => (
                  <div
                    key={skill}
                    onClick={() => handleMultiSelect('softSkills', skill)}
                    className={`p-3 rounded-lg border cursor-pointer transition-all text-center ${
                      formData.softSkills.includes(skill)
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-white/20 bg-white/10 hover:border-white/40'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Work Style</label>
                <select
                  value={formData.workStyle}
                  onChange={(e) => handleInputChange('workStyle', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select work style</option>
                  <option value="individual">Individual Work</option>
                  <option value="team">Team Work</option>
                  <option value="both">Both</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Work Location</label>
                <select
                  value={formData.workLocation}
                  onChange={(e) => handleInputChange('workLocation', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select work location</option>
                  <option value="remote">Remote</option>
                  <option value="office">Office</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Team Size Preference</label>
                <select
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select team size</option>
                  <option value="small">Small (2-5 people)</option>
                  <option value="medium">Medium (6-15 people)</option>
                  <option value="large">Large (16+ people)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Work Environment</label>
                <select
                  value={formData.workEnvironment}
                  onChange={(e) => handleInputChange('workEnvironment', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select environment</option>
                  <option value="startup">Startup (Fast-paced, Dynamic)</option>
                  <option value="corporate">Corporate (Structured, Stable)</option>
                  <option value="agency">Agency (Client-focused, Varied)</option>
                  <option value="freelance">Freelance (Independent, Flexible)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">What are your primary career goals?</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {careerGoalOptions.map(goal => (
                  <div
                    key={goal.id}
                    onClick={() => handleMultiSelect('careerGoals', goal.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      formData.careerGoals.includes(goal.id)
                        ? 'border-purple-500 bg-purple-500/20'
                        : 'border-white/20 bg-white/10 hover:border-white/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{goal.icon}</span>
                      <span className="font-medium">{goal.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Time Commitment for Learning</label>
                <select
                  value={formData.timeCommitment}
                  onChange={(e) => handleInputChange('timeCommitment', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                >
                  <option value="">Select time commitment</option>
                  <option value="1-5">1-5 hours per week</option>
                  <option value="6-10">6-10 hours per week</option>
                  <option value="11-20">11-20 hours per week</option>
                  <option value="20+">20+ hours per week</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Preferred Industries</label>
                <select
                  multiple
                  value={formData.preferredIndustries}
                  onChange={(e) => handleInputChange('preferredIndustries', Array.from(e.target.selectedOptions, option => option.value))}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  size="4"
                >
                  {industryOptions.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
                <p className="text-sm text-gray-400 mt-1">Hold Ctrl/Cmd to select multiple</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.age && formData.education && formData.currentStatus;
      case 2:
        return formData.interests.length > 0;
      case 3:
        return formData.technicalSkills.length > 0 || formData.softSkills.length > 0;
      case 4:
        return formData.workStyle && formData.workLocation;
      case 5:
        return formData.careerGoals.length > 0 && formData.timeCommitment;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold">Career Assessment</h1>
            </div>
            <div className="text-sm text-gray-400">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          {[...Array(totalSteps)].map((_, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;
            const isAccessible = stepNumber <= currentStep;

            return (
              <div key={stepNumber} className="flex items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    isCompleted 
                      ? 'bg-green-500 border-green-500' 
                      : isActive 
                        ? 'bg-blue-500 border-blue-500' 
                        : 'border-white/30 bg-white/10'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    getStepIcon(stepNumber)
                  )}
                </div>
                {stepNumber < totalSteps && (
                  <div className={`w-16 h-1 mx-2 ${
                    stepNumber < currentStep ? 'bg-green-500' : 'bg-white/20'
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">{getStepTitle(currentStep)}</h2>
            <p className="text-gray-300">
              {currentStep === 1 && "Let's start with some basic information about you."}
              {currentStep === 2 && "Help us understand what you're passionate about."}
              {currentStep === 3 && "Tell us about your current skills and expertise."}
              {currentStep === 4 && "What kind of work environment do you prefer?"}
              {currentStep === 5 && "What are you looking to achieve in your career?"}
            </p>
          </div>

          {renderStep()}