import { useEffect, useMemo, useState } from "react";

import {
  Box,
  Divider,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";

import StatusChip from "../../../components/common/StatusChip";
import RFQInfoCard from "../../rfq/components/RFQInfoCard";
import QuotationItemsTable from "./QuotationItemsTable";

function CreateQuotationDrawer({
  open,
  onClose,
  rfq,
  vendors = [],
  quotations = [],
  onSubmit,
  loading,
}) {
  const [vendor, setVendor] = useState("");
  const [remarks, setRemarks] = useState("");
  const [items, setItems] = useState([]);

  const availableVendors = useMemo(() => {
    return vendors.filter(
      (vendor) =>
        !quotations.some(
          (quotation) =>
            quotation.vendor?._id === vendor._id
        )
    );
  }, [vendors, quotations]);

  useEffect(() => {
    if (!rfq) return;

    setVendor(availableVendors[0]?._id || "");
    setRemarks("");

    setItems(
      (rfq.purchaseRequest?.items || []).map(
        (item) => ({
          itemName: item.itemName,
          quantity: item.quantity,
          unitPrice: "",
        })
      )
    );
  }, [rfq, availableVendors]);

  const handlePriceChange = (
    index,
    value
  ) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              unitPrice: value,
            }
          : item
      )
    );
  };

  const grandTotal = useMemo(() => {
    return items.reduce(
      (sum, item) =>
        sum +
        item.quantity *
          (Number(item.unitPrice) || 0),
      0
    );
  }, [items]);

  const handleSubmit = () => {
    if (!vendor) return;

    const hasInvalidPrice = items.some(
      (item) =>
        !item.unitPrice ||
        Number(item.unitPrice) <= 0
    );

    if (hasInvalidPrice) {
      return;
    }

    onSubmit({
      rfq: rfq._id,
      vendor,
      remarks,
      items: items.map((item) => ({
        itemName: item.itemName,
        quantity: item.quantity,
        unitPrice: Number(item.unitPrice),
      })),
    });
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: {
              xs: "100%",
              sm: 640,
            },
            maxWidth: 600,
          },
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#443faa",
            }}
          >
          Add Quotation
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
          Create quotation for this RFQ.
          </Typography>
        </Box>

        <Divider />

        <Stack spacing={3}>
          <RFQInfoCard rfq={rfq} />

          <QuotationItemsTable
            vendors={availableVendors}
            quotations={quotations}
            vendor={vendor}
            onVendorChange={setVendor}
            items={items}
            onPriceChange={handlePriceChange}
            grandTotal={grandTotal}
            remarks={remarks}
            onRemarksChange={setRemarks}
            loading={loading}
            onCancel={onClose}
            onSubmit={handleSubmit}
          />
        </Stack>
      </Box>
    </Drawer>
  );
}

export default CreateQuotationDrawer;