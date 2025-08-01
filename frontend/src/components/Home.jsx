import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/profile" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105">
                Get Started
              </Link>
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
              <Link to="/profile" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
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

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Why Choose CareerGenie?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cutting-edge platform combines AI precision with human insight to deliver 
              career guidance that's both accurate and actionable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all hover:transform hover:scale-105">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section*/}
      <section id='how-it-works' className='py-20 px-4 sm:px-6 lg:px-8 bg-black/20'>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-xl text-gray-300">
              Simple steps to unlock your career potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Complete Your Profile",
                description: "Share your interests, skills, education, and work preferences through our comprehensive assessment."
              },
              {
                step: "02",
                title: "Get AI Recommendations",
                description: "Our advanced ML algorithms analyze your profile and match you with the most suitable career paths."
              },
              {
                step: "03",
                title: "Follow Your Learning Path",
                description: "Receive a personalized roadmap with courses, resources, and timelines to achieve your career goals."
              }
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Success Stories</h2>
            <p className="text-xl text-gray-300">
              See how CareerGenie transformed careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to Transform Your Career?</h2>
          <p className="text-xl">
            Join thousands of professionals who've found their perfect career path with CareerGenie
          </p>
          <Link to="/profile" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            Start Your Free Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Brain className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CareerGenie
            </span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2025 CareerGenie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;