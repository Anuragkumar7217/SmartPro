import { useState } from "react";

import {
  Paper,
  Stack,
} from "@mui/material";

import SubmitButton from "../../auth/components/forms/SubmitButton";

import RequestInformation from "./RequestInformation";
import RequestItemsEditor from "./RequestItemsEditor";

import { purchaseRequestService } from "../services/purchaseRequestService";

import AppSnackbar from "../../../components/common/AppSnackbar";

function CreateRequestForm() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    reason: "",
    items: [
      {
        itemName: "",
        quantity: 1,
      },
    ],
  });

  const handleChange = (e) => {
    setError("");

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleItemChange = (
    index,
    field,
    value
  ) => {
    const updatedItems = [...formData.items];

    updatedItems[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          itemName: "",
          quantity: 1,
        },
      ],
    }));
  };

  const removeItem = (index) => {
    if (formData.items.length === 1) return;

    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await purchaseRequestService.createPurchaseRequest(
        formData
      );

      setSnackbar({
        open: true,
        severity: "success",
        message:
          "Purchase Request created successfully.",
      });

      setFormData({
        title: "",
        description: "",
        reason: "",
        items: [
          {
            itemName: "",
            quantity: 1,
          },
        ],
      });
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong";

      setError(message);

      setSnackbar({
        open: true,
        severity: "error",
        message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 1100,
        mx: "auto",
        p: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        borderRadius: 3,
        bgcolor: "background.paper",
      }}
    >
      <Stack
        component="form"
        spacing={3}
        onSubmit={handleSubmit}
      >
        <RequestInformation
          formData={formData}
          handleChange={handleChange}
        />

        <RequestItemsEditor
          items={formData.items}
          handleItemChange={
            handleItemChange
          }
          addItem={addItem}
          removeItem={removeItem}
        />

        <SubmitButton
          type="submit"
          loading={loading}
          loadingText="Creating..."
        >
          Create Purchase Request
        </SubmitButton>
      </Stack>

      <AppSnackbar
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={handleSnackbarClose}
      />
    </Paper>
  );
}

export default CreateRequestForm;