const rfqService = require("../services/rfqService");

const createRFQ = async (req, res) => {
  try {
    const rfq = await rfqService.createRFQ(
      req.body,
      req.user.id
    );

    res.status(201).json({
      success: true,
      data: rfq,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getRFQs = async (req, res) => {
  try {
    const rfqs = await rfqService.getRFQs();

    res.json({
      success: true,
      data: rfqs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getRFQById = async (req, res) => {
  try {
    const rfq = await rfqService.getRFQById(req.params.id);

    res.json({
      success: true,
      data: rfq,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const issueRFQ = async (req, res) => {
  try {
    const rfq = await rfqService.issueRFQ(req.params.id);

    res.json({
      success: true,
      data: rfq,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const closeRFQ = async (req, res) => {
  try {
    const rfq = await rfqService.closeRFQ(req.params.id);

    res.json({
      success: true,
      data: rfq,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createRFQ,
  getRFQs,
  getRFQById,
  issueRFQ,
  closeRFQ,
};