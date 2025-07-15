import React, { useState, useEffect } from 'react';
import {
  Brain, TrendingUp, Star, MapPin, Clock, DollarSign, Users,
  BookOpen, ArrowRight, CheckCircle, Filter, Download, Share2,
  Lightbulb, Target, Briefcase, Globe
} from 'lucide-react';

const Recommendations = () => {
  const [careerRecommendations, setCareerRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('confidence');
  const [showDetails, setShowDetails] = useState({});

  // Static user profile (replace with real auth data if needed)
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

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/recommend", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            interests: userProfile.interests,
            skills: userProfile.skills,
            preferences: userProfile.preferences
          })
        });

        if (!response.ok) {
          throw new Error("Failed to fetch recommendations");
        }

        const data = await response.json();
        setCareerRecommendations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  const filteredRecommendations = careerRecommendations
    .filter(career => filterBy === 'all' || career.category?.toLowerCase() === filterBy)
    .sort((a, b) => {
      if (sortBy === 'confidence') return (b.match_score || 0) - (a.match_score || 0);
      if (sortBy === 'salary') return b.salaryRange?.localeCompare(a.salaryRange);
      return a.role?.localeCompare(b.role);
    });

  const toggleDetails = (id) => {
    setShowDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-400 bg-green-500/20';
    if (confidence >= 75) return 'text-blue-400 bg-blue-500/20';
    if (confidence >= 60) return 'text-yellow-400 bg-yellow-500/20';
    return 'text-gray-400 bg-gray-500/20';
  };

  const getConfidenceWidth = (confidence) => `${confidence}%`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-3xl font-bold">Career Recommendations</h1>
                <p className="text-gray-300">Personalized career paths based on your profile</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all">
                <Download className="w-4 h-4" />
                Download Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Profile Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">{userProfile.name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">{userProfile.name}</h2>
              <p className="text-gray-300">Profile analyzed successfully</p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <div>
              <h3 className="font-semibold text-sm text-gray-300 mb-2">TOP INTERESTS</h3>
              <div className="flex flex-wrap gap-1">
                {userProfile.interests.map((i) => (
                  <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">{i}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-300 mb-2">KEY SKILLS</h3>
              <div className="flex flex-wrap gap-1">
                {userProfile.skills.slice(0, 3).map((s) => (
                  <span key={s} className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">{s}</span>
                ))}
                {userProfile.skills.length > 3 && (
                  <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded text-xs">
                    +{userProfile.skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-300 mb-2">WORK STYLE</h3>
              <p className="text-sm capitalize">{userProfile.preferences.workStyle} • {userProfile.preferences.workLocation}</p>
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-300 mb-2">RECOMMENDATIONS</h3>
              <p className="text-sm">{filteredRecommendations.length} matches found</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="design">Design</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="confidence">Match Confidence</option>
                <option value="salary">Salary Range</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Showing {filteredRecommendations.length} of {careerRecommendations.length} recommendations
          </div>
        </div>

        {/* Conditional Display */}
        {isLoading ? (
          <div className="text-center text-gray-300 py-20">Loading recommendations...</div>
        ) : error ? (
          <div className="text-center text-red-400 py-20">Error: {error}</div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredRecommendations.map((career, index) => (
              <div key={index} className="bg-white/10 rounded-2xl border border-white/20 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{career.role}</h3>
                    <p className="text-gray-300 text-sm mt-2">{career.description}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getConfidenceColor(career.match_score)}`}>
                    {career.match_score}% Match
                  </div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: getConfidenceWidth(career.match_score) }} />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-400" />{career.salaryRange}</div>
                  <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-400" />{career.growthRate}</div>
                  <div className="flex items-center gap-2"><Users className="w-4 h-4 text-purple-400" />{career.workStyle}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" />{career.location}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => toggleDetails(index)} className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg">
                    <BookOpen className="w-4 h-4" />
                    {showDetails[index] ? 'Hide Details' : 'View Details'}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <Target className="w-4 h-4" />
                    Get Learning Path
                  </button>
                </div>
                {showDetails[index] && (
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Star className="w-4 h-4" />Skills</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {career.skills.map((s) => (
                        <span key={s} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">{s}</span>
                      ))}
                    </div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2"><Globe className="w-4 h-4" />Top Companies</h4>
                    <div className="flex flex-wrap gap-2">
                      {career.companies.map((c) => (
                        <span key={c} className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs">{c}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
