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