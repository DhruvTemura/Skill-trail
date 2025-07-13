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