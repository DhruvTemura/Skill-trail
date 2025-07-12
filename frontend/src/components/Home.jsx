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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Perfect Career
                </span>
                <br />
                with AI Precision
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Let our advanced AI analyze your unique profile and unlock personalized career paths 
                that align perfectly with your interests, skills, and aspirations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setIsVideoPlaying(true)}
                className="border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white/10 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 font-semibold">AI Analysis Complete</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Data Scientist</span>
                    <span className="text-green-400 font-semibold">94% Match</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-[94%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>UX Designer</span>
                    <span className="text-blue-400 font-semibold">87% Match</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-[87%]"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Product Manager</span>
                    <span className="text-purple-400 font-semibold">82% Match</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-[82%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}