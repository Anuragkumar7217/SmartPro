const mongoose = require("mongoose");

const purchaseItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { _id: false }
);

const purchaseRequestSchema = new mongoose.Schema(
  {
    prNumber: {
      type: String,
      required: true,
      unique: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    reason: {
      type: String,
      required: true,
      trim: true,
    },

    items: {
      type: [purchaseItemSchema],
      required: true,
      validate: {
        validator: function (items) {
          return items.length > 0;
        },
        message: "At least one item is required",
      },
    },

    status: {
      type: String,
      enum: [
        "SUBMITTED",
        "APPROVED",
        "REJECTED",
        "RFQ_CREATED",
        "PO_CREATED",
        "COMPLETED",
      ],
      default: "SUBMITTED",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    managerComment: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "PurchaseRequest",
  purchaseRequestSchema
);