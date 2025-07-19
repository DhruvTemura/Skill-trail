const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Career recommendations database (in production, this would be more sophisticated)
const CAREER_DATABASE = [
  {
    title: "Data Scientist",
    category: "Technology",
    description: "Analyze complex data to help companies make strategic decisions using statistical methods and machine learning.",
    salaryRange: "$85,000 - $130,000",
    jobGrowth: "+22% (Much faster than average)",
    workStyle: "Team-based with independent analysis",
    location: "Remote/Hybrid friendly",
    skills: ["Python", "R", "SQL", "Machine Learning", "Statistics", "Data Analysis"],
    keyTasks: [
      "Collect and analyze large datasets",
      "Build predictive models",
      "Present insights to stakeholders",
      "Collaborate with cross-functional teams"
    ],
    companies: ["Google", "Netflix", "Airbnb", "Microsoft", "Amazon"],
    matchCriteria: {
      interests: ["technology", "data"],
      technicalSkills: ["Python", "Machine Learning", "Data Analysis", "SQL"],
      softSkills: ["Problem Solving", "Critical Thinking", "Communication"],
      workStyle: ["both", "individual"],
      workLocation: ["remote", "hybrid"]
    }
  },
  {
    title: "Full Stack Developer",
    category: "Technology",
    description: "Build end-to-end web applications, working on both frontend user interfaces and backend systems.",
    salaryRange: "$70,000 - $120,000",
    jobGrowth: "+13% (Faster than average)",
    workStyle: "Collaborative team environment",
    location: "Remote/Hybrid/On-site",
    skills: ["JavaScript", "React", "Node.js", "Databases", "Git", "Web Development"],
    keyTasks: [
      "Develop responsive web applications",
      "Design and implement APIs",
      "Collaborate with designers and product managers",
      "Debug and optimize application performance"
    ],
    companies: ["Spotify", "Shopify", "Stripe", "Figma", "Discord"],
    matchCriteria: {
      interests: ["technology"],
      technicalSkills: ["JavaScript", "React", "Node.js", "Web Development"],
      softSkills: ["Problem Solving", "Teamwork", "Communication"],
      workStyle: ["team", "both"],
      workLocation: ["remote", "hybrid", "office"]
    }
  },
  {
    title: "Product Manager",
    category: "Business",
    description: "Guide product development from conception to launch, working with engineering, design, and business teams.",
    salaryRange: "$95,000 - $150,000",
    jobGrowth: "+19% (Much faster than average)",
    workStyle: "Highly collaborative",
    location: "Hybrid preferred",
    skills: ["Strategic Thinking", "Communication", "Data Analysis", "Leadership", "Project Management"],
    keyTasks: [
      "Define product roadmap and strategy",
      "Conduct market research",
      "Coordinate with development teams",
      "Analyze user feedback and metrics"
    ],
    companies: ["Meta", "Uber", "Slack", "Zoom", "Notion"],
    matchCriteria: {
      interests: ["business", "technology"],
      technicalSkills: ["Project Management", "Data Analysis"],
      softSkills: ["Leadership", "Communication", "Strategic Thinking"],
      workStyle: ["team", "both"],
      workLocation: ["hybrid", "office"]
    }
  },
  {
    title: "UX/UI Designer",
    category: "Design",
    description: "Create intuitive and engaging user experiences for digital products through research and design.",
    salaryRange: "$65,000 - $110,000",
    jobGrowth: "+13% (Faster than average)",
    workStyle: "Collaborative with creative autonomy",
    location: "Remote/Hybrid friendly",
    skills: ["Design Thinking", "UI/UX Design", "User Research", "Prototyping", "Creativity"],
    keyTasks: [
      "Conduct user research and testing",
      "Create wireframes and prototypes",
      "Collaborate with developers",
      "Design system maintenance"
    ],
    companies: ["Adobe", "Figma", "Canva", "Dribbble", "InVision"],
    matchCriteria: {
      interests: ["design", "technology"],
      technicalSkills: ["UI/UX Design"],
      softSkills: ["Creativity", "Problem Solving", "Communication"],
      workStyle: ["both", "individual"],
      workLocation: ["remote", "hybrid"]
    }
  },
  {
    title: "DevOps Engineer",
    category: "Technology",
    description: "Streamline development processes and manage infrastructure to ensure reliable software deployment.",
    salaryRange: "$80,000 - $140,000",
    jobGrowth: "+21% (Much faster than average)",
    workStyle: "Cross-functional collaboration",
    location: "Remote friendly",
    skills: ["Cloud Computing", "DevOps", "Python", "Linux", "Cybersecurity"],
    keyTasks: [
      "Automate deployment processes",
      "Monitor system performance",
      "Manage cloud infrastructure",
      "Collaborate with development teams"
    ],
    companies: ["AWS", "Docker", "HashiCorp", "GitLab", "Datadog"],
    matchCriteria: {
      interests: ["technology"],
      technicalSkills: ["Python", "Cloud Computing", "DevOps", "Cybersecurity"],
      softSkills: ["Problem Solving", "Critical Thinking"],
      workStyle: ["team", "both"],
      workLocation: ["remote", "hybrid"]
    }
  },
  {
    title: "Digital Marketing Specialist",
    category: "Marketing",
    description: "Create and execute digital marketing campaigns across various online platforms to drive brand awareness and sales.",
    salaryRange: "$45,000 - $75,000",
    jobGrowth: "+10% (Faster than average)",
    workStyle: "Creative and analytical",
    location: "Remote/Hybrid/On-site",
    skills: ["Digital Marketing", "Social Media", "Content Creation", "Analytics", "SEO"],
    keyTasks: [
      "Develop marketing strategies",
      "Create content for social media",
      "Analyze campaign performance",
      "Manage online advertising"
    ],
    companies: ["HubSpot", "Hootsuite", "Buffer", "Mailchimp", "Salesforce"],
    matchCriteria: {
      interests: ["marketing", "business"],
      technicalSkills: ["Digital Marketing"],
      softSkills: ["Creativity", "Communication", "Critical Thinking"],
      workStyle: ["both", "team"],
      workLocation: ["remote", "hybrid", "office"]
    }
  }
];

// Calculate match confidence based on user profile
const calculateMatchConfidence = (career, profile) => {
  let score = 0;
  let maxScore = 0;

  // Interest matching (30% weight)
  const interestWeight = 30;
  if (career.matchCriteria.interests && profile.interests) {
    const matchingInterests = career.matchCriteria.interests.filter(interest => 
      profile.interests.includes(interest)
    );
    score += (matchingInterests.length / career.matchCriteria.interests.length) * interestWeight;
  }
  maxScore += interestWeight;

  // Technical skills matching (25% weight)
  const techSkillWeight = 25;
  if (career.matchCriteria.technicalSkills && profile.technicalSkills) {
    const matchingTechSkills = career.matchCriteria.technicalSkills.filter(skill => 
      profile.technicalSkills.includes(skill)
    );
    score += (matchingTechSkills.length / career.matchCriteria.technicalSkills.length) * techSkillWeight;
  }
  maxScore += techSkillWeight;

  // Soft skills matching (20% weight)
  const softSkillWeight = 20;
  if (career.matchCriteria.softSkills && profile.softSkills) {
    const matchingSoftSkills = career.matchCriteria.softSkills.filter(skill => 
      profile.softSkills.includes(skill)
    );
    score += (matchingSoftSkills.length / career.matchCriteria.softSkills.length) * softSkillWeight;
  }
  maxScore += softSkillWeight;

  // Work style matching (15% weight)
  const workStyleWeight = 15;
  if (career.matchCriteria.workStyle && profile.workStyle) {
    if (career.matchCriteria.workStyle.includes(profile.workStyle)) {
      score += workStyleWeight;
    }
  }
  maxScore += workStyleWeight;

  // Work location matching (10% weight)
  const workLocationWeight = 10;
  if (career.matchCriteria.workLocation && profile.workLocation) {
    if (career.matchCriteria.workLocation.includes(profile.workLocation)) {
      score += workLocationWeight;
    }
  }
  maxScore += workLocationWeight;

  return Math.round((score / maxScore) * 100);
};

// Generate match reasons
const generateMatchReasons = (career, profile) => {
  const reasons = [];

  // Check technical skills
  if (career.matchCriteria.technicalSkills && profile.technicalSkills) {
    const matchingSkills = career.matchCriteria.technicalSkills.filter(skill => 
      profile.technicalSkills.includes(skill)
    );
    if (matchingSkills.length > 0) {
      reasons.push(`Strong match with your ${matchingSkills.slice(0, 2).join(', ')} skills`);
    }
  }

  // Check interests
  if (career.matchCriteria.interests && profile.interests) {
    const matchingInterests = career.matchCriteria.interests.filter(interest => 
      profile.interests.includes(interest)
    );
    if (matchingInterests.length > 0) {
      reasons.push(`Aligns with your interest in ${matchingInterests[0]}`);
    }
  }

  // Check work preferences
  if (career.matchCriteria.workLocation && profile.workLocation) {
    if (career.matchCriteria.workLocation.includes(profile.workLocation)) {
      reasons.push(`Fits your preference for ${profile.workLocation} work`);
    }
  }

  // Check career goals
  if (profile.careerGoals && profile.careerGoals.includes('high-salary')) {
    reasons.push('High salary potential matches your goals');
  }

  return reasons.slice(0, 4); // Return max 4 reasons
};

// @route   POST /api/recommendations
// @desc    Get career recommendations based on user profile
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    // Get user profile
    const profile = await Profile.findOne({ userId });
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found. Please complete your profile first.'
      });
    }

    // Calculate recommendations
    const recommendations = CAREER_DATABASE.map(career => {
      const confidence = calculateMatchConfidence(career, profile);
      const matchReasons = generateMatchReasons(career, profile);

      return {
        id: Math.random().toString(36).substr(2, 9),
        title: career.title,
        confidence,
        category: career.category,
        description: career.description,
        salaryRange: career.salaryRange,
        jobGrowth: career.jobGrowth,
        workStyle: career.workStyle,
        location: career.location,
        skills: career.skills,
        matchReasons,
        keyTasks: career.keyTasks,
        companies: career.companies
      };
    }).filter(rec => rec.confidence > 30) // Filter out low confidence matches
      .sort((a, b) => b.confidence - a.confidence) // Sort by confidence
      .slice(0, 6); // Return top 6 recommendations

    res.json({
      success: true,
      data: {
        profile: {
          name: profile.name,
          interests: profile.interests,
          skills: [...profile.technicalSkills, ...profile.softSkills],
          preferences: {
            workStyle: profile.workStyle,
            workLocation: profile.workLocation,
            salary: profile.careerGoals.includes('high-salary') ? 'high' : 'moderate',
            workLifeBalance: profile.careerGoals.includes('work-life-balance') ? 'important' : 'moderate'
          }
        },
        recommendations
      }
    });

  } catch (error) {
    console.error('Recommendations error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while generating recommendations'
    });
  }
});

module.exports = router;