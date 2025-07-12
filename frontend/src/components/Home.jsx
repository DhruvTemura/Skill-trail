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
}