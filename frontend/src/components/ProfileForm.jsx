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