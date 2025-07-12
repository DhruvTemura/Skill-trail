import React, { useState } from 'react';
import { ArrowRight, Brain, Target, TrendingUp, Users, Star, CheckCircle, Play } from 'lucide-react';

const Home = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your unique profile to identify optimal career paths"
    },
    {
      icon: <Target className="w-8 h-8 text-green-500" />,
      title: "Personalized Recommendations",
      description: "Get top 3-5 career matches based on your interests, skills, and work preferences"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Custom Learning Paths",
      description: "Receive step-by-step roadmaps with courses, resources, and timelines to reach your goals"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Career Success Stories",
      description: "Join thousands who've transformed their careers with our personalized guidance"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Data Scientist at Google",
      content: "This platform helped me transition from marketing to data science. The learning path was spot-on!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "UX Designer at Spotify",
      content: "The AI recommendations opened my eyes to careers I never considered. Now I'm living my dream job!",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Product Manager at Microsoft",
      content: "The personalized roadmap saved me months of confusion. Clear, actionable, and effective.",
      rating: 5
    }
  ];

  const stats = [
    {number: '50k+', label: 'Careers Matched'},
    {number: '95%', label: 'Success Rate'},
    {number: '200%', label: 'Career Paths'},
    {number: '4.9/5', label: 'User Rating'}
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white'>
        {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CareerGenie
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
              <a href="#testimonials" className="hover:text-blue-400 transition-colors">Success Stories</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}