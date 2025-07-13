import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  BookOpen, 
  ArrowRight,
  CheckCircle,
  Filter,
  Download,
  Share2,
  Lightbulb,
  Target,
  Briefcase,
  Globe
} from 'lucide-react';

const Recommendations = () => {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('confidence');
  const [showDetails, setShowDetails] = useState({});

  // Mock data - in real app, this would come from your API
  const userProfile = {
    name: "Alex Johnson",
    interests: ["Technology", "Data Analysis", "Problem Solving"],
    skills: ["Python", "JavaScript", "Communication", "Critical Thinking"],
    preferences: {
      workStyle: "both",
      workLocation: "hybrid",
      salary: "high",
      workLifeBalance: "important"
    }
  };

  const careerRecommendations = [
    {
      id: 1,
      title: "Data Scientist",
      confidence: 94,
      category: "Technology",
      description: "Analyze complex data to help companies make strategic decisions using statistical methods and machine learning.",
      salaryRange: "$85,000 - $130,000",
      jobGrowth: "+22% (Much faster than average)",
      workStyle: "Team-based with independent analysis",
      location: "Remote/Hybrid friendly",
      skills: ["Python", "R", "SQL", "Machine Learning", "Statistics"],
      matchReasons: [
        "Strong match with your Python skills",
        "Aligns with your interest in data analysis",
        "Fits your preference for hybrid work",
        "High salary potential matches your goals"
      ],
      keyTasks: [
        "Collect and analyze large datasets",
        "Build predictive models",
        "Present insights to stakeholders",
        "Collaborate with cross-functional teams"
      ],
      companies: ["Google", "Netflix", "Airbnb", "Microsoft", "Amazon"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      confidence: 89,
      category: "Technology",
      description: "Build end-to-end web applications, working on both frontend user interfaces and backend systems.",
      salaryRange: "$70,000 - $120,000",
      jobGrowth: "+13% (Faster than average)",
      workStyle: "Collaborative team environment",
      location: "Remote/Hybrid/On-site",
      skills: ["JavaScript", "React", "Node.js", "Databases", "Git"],
      matchReasons: [
        "Perfect match with your JavaScript skills",
        "Aligns with your technology interests",
        "Flexible work arrangements available",
        "Strong job market demand"
      ],
      keyTasks: [
        "Develop responsive web applications",
        "Design and implement APIs",
        "Collaborate with designers and product managers",
        "Debug and optimize application performance"
      ],
      companies: ["Spotify", "Shopify", "Stripe", "Figma", "Discord"]
    },
    {
      id: 3,
      title: "Product Manager",
      confidence: 78,
      category: "Business",
      description: "Guide product development from conception to launch, working with engineering, design, and business teams.",
      salaryRange: "$95,000 - $150,000",
      jobGrowth: "+19% (Much faster than average)",
      workStyle: "Highly collaborative",
      location: "Hybrid preferred",
      skills: ["Strategic Thinking", "Communication", "Data Analysis", "Leadership"],
      matchReasons: [
        "Strong communication skills are essential",
        "Combines technology and business interests",
        "Leadership potential identified",
        "Hybrid work options available"
      ],
      keyTasks: [
        "Define product roadmap and strategy",
        "Conduct market research",
        "Coordinate with development teams",
        "Analyze user feedback and metrics"
      ],
      companies: ["Meta", "Uber", "Slack", "Zoom", "Notion"]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      confidence: 72,
      category: "Design",
      description: "Create intuitive and engaging user experiences for digital products through research and design.",
      salaryRange: "$65,000 - $110,000",
      jobGrowth: "+13% (Faster than average)",
      workStyle: "Collaborative with creative autonomy",
      location: "Remote/Hybrid friendly",
      skills: ["Design Thinking", "Figma", "User Research", "Prototyping"],
      matchReasons: [
        "Problem-solving skills translate well",
        "Growing interest in user experience",
        "Creative and analytical balance",
        "Flexible work arrangements"
      ],
      keyTasks: [
        "Conduct user research and testing",
        "Create wireframes and prototypes",
        "Collaborate with developers",
        "Design system maintenance"
      ],
      companies: ["Adobe", "Figma", "Canva", "Dribbble", "InVision"]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      confidence: 68,
      category: "Technology",
      description: "Streamline development processes and manage infrastructure to ensure reliable software deployment.",
      salaryRange: "$80,000 - $140,000",
      jobGrowth: "+21% (Much faster than average)",
      workStyle: "Cross-functional collaboration",
      location: "Remote friendly",
      skills: ["AWS", "Docker", "Kubernetes", "Python", "Linux"],
      matchReasons: [
        "Technical skills foundation",
        "Problem-solving orientation",
        "Growing field with high demand",
        "Remote work opportunities"
      ],
      keyTasks: [
        "Automate deployment processes",
        "Monitor system performance",
        "Manage cloud infrastructure",
        "Collaborate with development teams"
      ],
      companies: ["AWS", "Docker", "HashiCorp", "GitLab", "Datadog"]
    }
  ];

  const filteredRecommendations = careerRecommendations
    .filter(career => filterBy === 'all' || career.category.toLowerCase() === filterBy)
    .sort((a, b) => {
      if (sortBy === 'confidence') return b.confidence - a.confidence;
      if (sortBy === 'salary') return b.salaryRange.localeCompare(a.salaryRange);
      return a.title.localeCompare(b.title);
    });

  const toggleDetails = (id) => {
    setShowDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-400 bg-green-500/20';
    if (confidence >= 75) return 'text-blue-400 bg-blue-500/20';
    if (confidence >= 60) return 'text-yellow-400 bg-yellow-500/20';
    return 'text-gray-400 bg-gray-500/20';
  };

  const getConfidenceWidth = (confidence) => {
    return `${confidence}%`;
  };