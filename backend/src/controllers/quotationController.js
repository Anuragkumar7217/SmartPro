const quotationService = require("../services/quotationService");

const createQuotation = async (req, res) => {
  try {
    const quotation = await quotationService.createQuotation(
      req.body,
      req.user.id
    );

    res.status(201).json({
      success: true,
      data: quotation,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getQuotationsByRFQ = async (req, res) => {
  try {
    const quotations =
      await quotationService.getQuotationsByRFQ(
        req.params.rfqId
      );

    res.json({
      success: true,
      data: quotations,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const getQuotationById = async (req, res) => {
  try {
    const quotation =
      await quotationService.getQuotationById(
        req.params.id
      );

    res.json({
      success: true,
      data: quotation,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

const getQuotationComparison = async (req, res) => {
  try {
    const comparison =
      await quotationService.getQuotationComparison(
        req.params.rfqId
      );

    res.json({
      success: true,
      data: comparison,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createQuotation,
  getQuotationsByRFQ,
  getQuotationById,
  getQuotationComparison,
};