const Votes = require('../db/models/Votes');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const createVote = catchAsync(async (req, res, next) => {
  const { fundId } = req.body;
  const userId = req.user.id;

  if (!fundId) {
    return next(new AppError('fundId is required', 400));
  }

  // Check if the user has already voted for this fund
  const existingVote = await Votes.findOne({ where: { fundId, userId } });

  if (existingVote) {
    return next(new AppError('User has already voted for this fund', 400));
  }

  // Create a new vote record
  const newVote = await Votes.create({ fundId, userId });

  if (!newVote) {
    return next(new AppError('Failed to cast vote', 500));
  }

  return res.status(201).json({
    status: 'success',
    data: newVote,
  });
});

module.exports = { createVote };
