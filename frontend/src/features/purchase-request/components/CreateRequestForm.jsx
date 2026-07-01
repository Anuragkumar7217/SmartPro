import { useState } from "react";

import {
  Alert,
  Paper,
  Stack,
} from "@mui/material";

import SubmitButton from "../../auth/components/forms/SubmitButton";

import RequestInformation from "./RequestInformation";
import RequestItemsTable from "./RequestItemsTable";

import { purchaseRequestService } from "../services/purchaseRequestService";

function CreateRequestForm() {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await purchaseRequestService.createPurchaseRequest(
        formData
      );

      alert("Purchase Request Created Successfully");

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
      setError(
        err.response?.data?.message ||
          "Something went wrong"
      );
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
        p: 4,
        borderRadius: 3,
        bgcolor: "#FFFFFF",
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

        <RequestItemsTable
          items={formData.items}
          handleItemChange={
            handleItemChange
          }
          addItem={addItem}
          removeItem={removeItem}
        />

        {error && (
          <Alert severity="error">
            {error}
          </Alert>
        )}

        <SubmitButton
          type="submit"
          loading={loading}
          loadingText="Creating..."
        >
          Create Purchase Request
        </SubmitButton>
      </Stack>
    </Paper>
  );
}

export default CreateRequestForm;