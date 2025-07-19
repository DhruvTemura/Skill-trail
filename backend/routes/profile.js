const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// @route   POST /api/profile
// @desc    Create or update user profile
// @access  Public
router.post('/', async (req, res) => {
  try {
    const {
      name,
      age,
      education,
      cgpa,
      currentStatus,
      interests,
      technicalSkills,
      softSkills,
      workStyle,
      workLocation,
      teamSize,
      workEnvironment,
      careerGoals,
      timeCommitment,
      preferredIndustries,
      userId
    } = req.body;

    // Validation
    if (!name || !age || !education || !cgpa || !currentStatus || !workStyle || !workLocation || !timeCommitment) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Generate userId if not provided (for demo purposes)
    const profileUserId = userId || `user_${Date.now()}`;

    // Check if profile exists
    let profile = await Profile.findOne({ userId: profileUserId });

    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        { userId: profileUserId },
        {
          name,
          age,
          education,
          cgpa,
          currentStatus,
          interests: interests || [],
          technicalSkills: technicalSkills || [],
          softSkills: softSkills || [],
          workStyle,
          workLocation,
          teamSize,
          workEnvironment,
          careerGoals: careerGoals || [],
          timeCommitment,
          preferredIndustries: preferredIndustries || [],
          updatedAt: Date.now()
        },
        { new: true, runValidators: true }
      );
    } else {
      // Create new profile
      profile = new Profile({
        name,
        age,
        education,
        cgpa,
        currentStatus,
        interests: interests || [],
        technicalSkills: technicalSkills || [],
        softSkills: softSkills || [],
        workStyle,
        workLocation,
        teamSize,
        workEnvironment,
        careerGoals: careerGoals || [],
        timeCommitment,
        preferredIndustries: preferredIndustries || [],
        userId: profileUserId
      });

      await profile.save();
    }

    res.json({
      success: true,
      message: 'Profile saved successfully',
      data: profile
    });

  } catch (error) {
    console.error('Profile save error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while saving profile'
    });
  }
});

// @route   GET /api/profile/:userId
// @desc    Get user profile
// @access  Public
router.get('/:userId', async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found'
      });
    }

    res.json({
      success: true,
      data: profile
    });

  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching profile'
    });
  }
});

module.exports = router;