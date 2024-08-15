const Funds = require('../db/models/Funds');
const Votes = require('../db/models/Votes');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const createFund = catchAsync(async (req, res, next) => {
  const body = req.body;

  const newFund = await Funds.create({
    title: body.title,
    description: body.description,
    pointsPerVolunteer: body.pointsPerVolunteer,
    managerId: body.managerId,
  });

  if (!newFund) {
    return next(new AppError('Failed to create the fund', 400));
  }

  return res.status(201).json({
    status: 'success',
    data: newFund,
  });
});

const getAllFunds = catchAsync(async (req, res, next) => {
  const funds = await Funds.findAll();

  const fundsWithVotes = await Promise.all(
    funds.map(async (fund) => {
      const totalVotes = await Votes.count({ where: { fundId: fund.id } });
      return { ...fund.dataValues, totalVotes };
    })
  );

  if (fundsWithVotes.length === 0) {
    return next(new AppError('No funds found', 404));
  }

  return res.status(200).json({
    status: 'success',
    data: fundsWithVotes,
  });
});

const updateFund = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, pointsPerVolunteer, managerId } = req.body;

  const fund = await Funds.findByPk(id);

  if (!fund) {
    return next(new AppError('Fund not found', 404));
  }

  fund.title = title || fund.title;
  fund.description = description || fund.description;
  fund.pointsPerVolunteer = pointsPerVolunteer || fund.pointsPerVolunteer;
  fund.managerId = managerId || fund.managerId;

  await fund.save();

  return res.status(200).json({
    status: 'success',
    data: fund,
  });
});

const deleteFund = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const fund = await Funds.findByPk(id);

  if (!fund) {
    return next(new AppError('Fund not found', 404));
  }

  await fund.destroy();

  return res.status(204).json({
    status: 'success',
    data: null,
  });
});

module.exports = {
  createFund,
  getAllFunds,
  updateFund,
  deleteFund,
};
