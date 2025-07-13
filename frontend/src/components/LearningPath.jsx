import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Target, 
  Clock, 
  Star, 
  CheckCircle, 
  PlayCircle, 
  Download, 
  Share2, 
  Calendar,
  TrendingUp,
  Award,
  Users,
  Globe,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Lightbulb,
  Code,
  FileText,
  Video,
  Link,
  BarChart3,
  Timer
} from 'lucide-react';

const LearningPath = () => {
  const [selectedCareer, setSelectedCareer] = useState('Data Scientist');
  const [activeModule, setActiveModule] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('intermediate');
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months');

  // Mock data - in real app, this would come from your API
  const careerOptions = ['Data Scientist', 'Full Stack Developer', 'Product Manager', 'UX/UI Designer', 'DevOps Engineer'];

  const learningPaths = {
    'Data Scientist': {
      title: 'Data Scientist Learning Path',
      description: 'Master the skills needed to become a data scientist and work with big data to drive business decisions.',
      duration: '6-8 months',
      difficulty: 'Intermediate to Advanced',
      totalModules: 8,
      estimatedHours: 240,
      careerOutcome: {
        avgSalary: '$95,000 - $130,000',
        jobGrowth: '+22%',
        topSkills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Data Visualization']
      },
      modules: [
        {
          id: 1,
          title: 'Python Programming Fundamentals',
          duration: '3-4 weeks',
          difficulty: 'Beginner',
          hours: 30,
          description: 'Learn Python syntax, data structures, and basic programming concepts.',
          topics: ['Variables & Data Types', 'Control Structures', 'Functions', 'Object-Oriented Programming'],
          resources: [
            { type: 'video', title: 'Python Crash Course', provider: 'YouTube', duration: '6 hours', url: '#' },
            { type: 'course', title: 'Python for Everybody', provider: 'Coursera', duration: '20 hours', url: '#' },
            { type: 'practice', title: 'HackerRank Python', provider: 'HackerRank', duration: '4 hours', url: '#' }
          ],
          projects: ['Calculator App', 'Text Analysis Tool'],
          prerequisites: []
        },
        {
          id: 2,
          title: 'Data Manipulation with Pandas',
          duration: '2-3 weeks',
          difficulty: 'Beginner',
          hours: 25,
          description: 'Master data manipulation and analysis using the Pandas library.',
          topics: ['DataFrames', 'Data Cleaning', 'Grouping & Aggregation', 'Merging Data'],
          resources: [
            { type: 'course', title: 'Data Analysis with Python', provider: 'freeCodeCamp', duration: '10 hours', url: '#' },
            { type: 'documentation', title: 'Pandas Official Docs', provider: 'Pandas', duration: '15 hours', url: '#' }
          ],
          projects: ['Sales Data Analysis', 'Customer Segmentation'],
          prerequisites: ['Python Programming Fundamentals']
        },
        {
          id: 3,
          title: 'Statistics & Probability',
          duration: '3-4 weeks',
          difficulty: 'Intermediate',
          hours: 35,
          description: 'Build a strong foundation in statistics essential for data science.',
          topics: ['Descriptive Statistics', 'Probability Distributions', 'Hypothesis Testing', 'Regression Analysis'],
          resources: [
            { type: 'course', title: 'Statistics for Data Science', provider: 'Coursera', duration: '25 hours', url: '#' },
            { type: 'book', title: 'Think Stats', provider: 'O\'Reilly', duration: '10 hours', url: '#' }
          ],
          projects: ['A/B Testing Analysis', 'Statistical Report'],
          prerequisites: ['Data Manipulation with Pandas']
        },
        {
          id: 4,
          title: 'Data Visualization',
          duration: '2-3 weeks',
          difficulty: 'Intermediate',
          hours: 20,
          description: 'Create compelling visualizations to communicate insights effectively.',
          topics: ['Matplotlib', 'Seaborn', 'Plotly', 'Dashboard Creation'],
          resources: [
            { type: 'course', title: 'Data Visualization with Python', provider: 'DataCamp', duration: '12 hours', url: '#' },
            { type: 'video', title: 'Matplotlib Tutorial', provider: 'YouTube', duration: '8 hours', url: '#' }
          ],
          projects: ['Interactive Dashboard', 'Data Story Presentation'],
          prerequisites: ['Statistics & Probability']
        },
        {
          id: 5,
          title: 'Machine Learning Fundamentals',
          duration: '4-5 weeks',
          difficulty: 'Advanced',
          hours: 45,
          description: 'Learn core machine learning algorithms and techniques.',
          topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Evaluation', 'Feature Engineering'],
          resources: [
            { type: 'course', title: 'Machine Learning Course', provider: 'Coursera', duration: '30 hours', url: '#' },
            { type: 'course', title: 'Scikit-learn Tutorial', provider: 'Kaggle', duration: '15 hours', url: '#' }
          ],
          projects: ['Predictive Model', 'Classification Project'],
          prerequisites: ['Data Visualization']
        },
        {
          id: 6,
          title: 'Deep Learning & Neural Networks',
          duration: '4-5 weeks',
          difficulty: 'Advanced',
          hours: 40,
          description: 'Explore deep learning concepts and build neural networks.',
          topics: ['Neural Networks', 'TensorFlow', 'CNN', 'RNN'],
          resources: [
            { type: 'course', title: 'Deep Learning Specialization', provider: 'Coursera', duration: '35 hours', url: '#' },
            { type: 'practice', title: 'Keras Tutorials', provider: 'Keras.io', duration: '5 hours', url: '#' }
          ],
          projects: ['Image Classification', 'Text Analysis Model'],
          prerequisites: ['Machine Learning Fundamentals']
        },
        {
          id: 7,
          title: 'SQL & Database Management',
          duration: '2-3 weeks',
          difficulty: 'Intermediate',
          hours: 25,
          description: 'Master SQL for data extraction and database management.',
          topics: ['SQL Queries', 'Joins', 'Subqueries', 'Database Design'],
          resources: [
            { type: 'course', title: 'SQL for Data Science', provider: 'Coursera', duration: '20 hours', url: '#' },
            { type: 'practice', title: 'SQL Exercises', provider: 'W3Schools', duration: '5 hours', url: '#' }
          ],
          projects: ['Database Analysis', 'Data Pipeline'],
          prerequisites: ['Data Manipulation with Pandas']
        },
        {
          id: 8,
          title: 'Capstone Project',
          duration: '3-4 weeks',
          difficulty: 'Advanced',
          hours: 40,
          description: 'Apply all your skills in a comprehensive end-to-end project.',
          topics: ['Project Planning', 'Data Collection', 'Analysis', 'Presentation'],
          resources: [
            { type: 'project', title: 'Capstone Guidelines', provider: 'Internal', duration: '40 hours', url: '#' }
          ],
          projects: ['End-to-End Data Science Project'],
          prerequisites: ['Deep Learning & Neural Networks', 'SQL & Database Management']
        }
      ]
    }
  };

  const currentPath = learningPaths[selectedCareer];
  const completionPercentage = (completedModules.length / currentPath.totalModules) * 100;

  const toggleModule = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  const markComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getResourceIcon = (type) => {
    switch(type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'practice': return <Code className="w-4 h-4" />;
      case 'book': return <FileText className="w-4 h-4" />;
      case 'documentation': return <FileText className="w-4 h-4" />;
      case 'project': return <Target className="w-4 h-4" />;
      default: return <Link className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8 text-purple-400" />
              <div>
                <h1 className="text-3xl font-bold">Learning Path</h1>
                <p className="text-gray-300">Your personalized roadmap to career success</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all">
                <Share2 className="w-4 h-4" />
                Share Path
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-all">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Career Selection */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h2 className="text-xl font-semibold">Choose Your Career Path</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {careerOptions.map(career => (
              <button
                key={career}
                onClick={() => setSelectedCareer(career)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCareer === career
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
              >
                {career}
              </button>
            ))}
          </div>
        </div>

        {/* Path Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold">{currentPath.title}</h2>
              </div>
              <p className="text-gray-300 mb-6">{currentPath.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-sm text-gray-300">{currentPath.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-green-400" />
                    <div>
                      <p className="font-semibold">Difficulty</p>
                      <p className="text-sm text-gray-300">{currentPath.difficulty}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="font-semibold">Total Modules</p>
                      <p className="text-sm text-gray-300">{currentPath.totalModules} modules</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Timer className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="font-semibold">Study Hours</p>
                      <p className="text-sm text-gray-300">{currentPath.estimatedHours} hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>