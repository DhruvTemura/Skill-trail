import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Brain, TrendingUp, Star, MapPin, DollarSign, Users,
  BookOpen, Target, Filter, Download, Share2, Globe
} from 'lucide-react';

const Recommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [careerRecommendations, setCareerRecommendations] = useState([]);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('confidence');
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    // Check if state data is available
    if (!location.state || !location.state.data || !location.state.profile) {
      console.warn('No recommendation data passed, redirecting to profile form');
      navigate('/profile');
      return;
    }

    setCareerRecommendations(location.state.data);
    setProfileData(location.state.profile);
    setIsLoading(false);
  }, [location, navigate]);

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

  if (isLoading) return <div className="text-center text-white py-20">Loading recommendations...</div>;
  if (error) return <div className="text-center text-red-400 py-20">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-blue-400" />
              <div>
                <h1 className="text-3xl font-bold">Career Recommendations</h1>
                <p className="text-gray-300">Tailored based on your profile</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Summary */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Profile Summary</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 className="text-gray-400">Name</h3>
              <p>{profileData.name}</p>
            </div>
            <div>
              <h3 className="text-gray-400">Skills</h3>
              <p>{profileData.skills}</p>
            </div>
            <div>
              <h3 className="text-gray-400">Interests</h3>
              <p>{profileData.interests}</p>
            </div>
            <div>
              <h3 className="text-gray-400">Workstyle</h3>
              <p>{profileData.workstyle}</p>
            </div>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select value={filterBy} onChange={(e) => setFilterBy(e.target.value)}
                className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm"
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
                className="px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm"
              >
                <option value="confidence">Match Confidence</option>
                <option value="salary">Salary Range</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Showing {filteredRecommendations.length} of {careerRecommendations.length} results
          </div>
        </div>

        {/* Recommendations List */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredRecommendations.map((career, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{career.role}</h3>
                  <p className="text-sm text-gray-300">{career.description}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getConfidenceColor(career.match_score)}`}>
                  {career.match_score}% Match
                </div>
              </div>
              <div className="w-full h-2 bg-white/20 rounded-full mb-4">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: getConfidenceWidth(career.match_score) }} />
              </div>
              <div className="grid grid-cols-2 text-sm gap-3 mb-3">
                <div className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-green-400" />{career.salaryRange}</div>
                <div className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-blue-400" />{career.growthRate}</div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-purple-400" />{career.workStyle}</div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-400" />{career.location}</div>
              </div>
              <button onClick={() => toggleDetails(index)} className="text-sm text-blue-400 hover:underline">
                {showDetails[index] ? 'Hide Details' : 'View Details'}
              </button>
              {showDetails[index] && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold flex items-center gap-1"><Star className="w-4 h-4" /> Required Skills</h4>
                  <div className="flex flex-wrap gap-2 mt-1 mb-3">
                    {career.skills.map((s) => (
                      <span key={s} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">{s}</span>
                    ))}
                  </div>
                  <h4 className="text-sm font-semibold flex items-center gap-1"><Globe className="w-4 h-4" /> Top Companies</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {career.companies.map((c) => (
                      <span key={c} className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded text-xs">{c}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
