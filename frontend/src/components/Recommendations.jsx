import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  Globe,
  Loader2
} from 'lucide-react';

const Recommendations = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState(null);
  const [careerRecommendations, setCareerRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('confidence');
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
  fetchRecommendations();
  }, []);

  const fetchRecommendations = async () => {
    try {
      setLoading(true);
      const userId = localStorage.getItem('userId');
    
      if (!userId) {
        setError('No profile found. Please complete your profile first.');
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:5000/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
    
      if (data.success) {
        setUserProfile(data.data.profile);
        setCareerRecommendations(data.data.recommendations);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      setError('Error loading recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };



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
  <>
    {/* Loading State */}
    {loading && (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-400" />
          <p className="text-gray-300">Generating your personalized recommendations...</p>
        </div>
      </div>
    )}

    {/* Error State */}
    {error && (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-6 text-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.href = '/profile'}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all"
          >
            Complete Profile
          </button>
        </div>
      </div>
    )}

    {/* Main Content (Only shown if not loading/error) */}
    {!loading && !error && userProfile && (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        {/* Header */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold">SkillTrail</h1>
            <Button variant="outline" size="sm" onClick={() => navigate("/profile")}>
              Edit Profile
            </Button>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Welcome, {userProfile.name}</h2>
          <p className="text-center text-gray-300 mb-6">
            Based on your preferences and skills, here are some personalized career recommendations:
          </p>

          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search careers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="match">Sort by Match %</option>
              <option value="salary">Sort by Salary</option>
              <option value="growth">Sort by Growth Rate</option>
            </select>
          </div>

          {/* Recommendation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{rec.role}</h3>
                <p className="text-sm text-gray-400 mb-2">Field: {rec.field}</p>
                <p className="text-sm text-gray-400 mb-2">Avg Salary: ₹{rec.salary}</p>
                <p className="text-sm text-gray-400 mb-2">Growth Rate: {rec.growth_rate}%</p>
                <p className="text-sm text-gray-400 mb-4">Match: {rec.match_percent}%</p>
                <p className="text-sm text-gray-300">{rec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </>
)};


export default Recommendations;
