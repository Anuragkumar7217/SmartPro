import { useEffect, useRef, useState } from "react";

import {
  Box,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";

import ApprovalActions from "./ApprovalActions";
import ManagerCommentBox from "./ManagerCommentBox";
import RequestInformationCard from "./RequestInformationCard";
import RequestedItemsTable from "./RequestedItemsTable";

function ApprovalDrawer({
  open,
  request,
  loading = false,
  onClose,
  onApprove,
  onReject,
}) {
  const [managerComment, setManagerComment] = useState("");
  const [commentError, setCommentError] = useState(false);
  const [shake, setShake] = useState(false);

  const commentInputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setManagerComment(request?.managerComment || "");
      setCommentError(false);
      setShake(false);
    }
  }, [open, request]);

  const validateComment = () => {
    if (managerComment.trim()) {
      return true;
    }

    setCommentError(true);
    setShake(true);

    commentInputRef.current?.focus();

    setTimeout(() => {
      setShake(false);
    }, 600);

    return false;
  };

  const handleCommentChange = (value) => {
    setManagerComment(value);

    if (commentError && value.trim()) {
      setCommentError(false);
    }
  };

  const handleApprove = () => {
    if (!validateComment()) {
      return;
    }

    onApprove(request._id, managerComment.trim());
  };

  const handleReject = () => {
    if (!validateComment()) {
      return;
    }

    onReject(request._id, managerComment.trim());
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: {
            xs: "100%",
            sm: 500,
            md: 650,
          },
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          height: "100%",
          overflowY: "auto",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            fontWeight={700}
          >
            Review Purchase Request
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
          >
            Review the purchase request before approving or rejecting it.
          </Typography>
        </Box>

        <Divider />

        <RequestInformationCard request={request} />

        <Box>
          <Typography
            variant="h6"
            fontWeight={700}
            mb={2}
          >
            Requested Items
          </Typography>

          <RequestedItemsTable
            items={request?.items}
          />
        </Box>

        <ManagerCommentBox
          ref={commentInputRef}
          value={managerComment}
          onChange={handleCommentChange}
          error={commentError}
          shake={shake}
        />

        <ApprovalActions
          loading={loading}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </Box>
    </Drawer>
  );
}

export default ApprovalDrawer;