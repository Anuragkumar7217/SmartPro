import { useEffect, useRef, useState } from "react";

import {
  Box,
  Divider,
  Drawer,
  Typography,
} from "@mui/material";

import ApprovalActions from "./ApprovalActions";
import ManagerCommentBox from "./ManagerCommentBox";
import RequestInformationCard from "../../../components/common/RequestInformationCard";
import RequestedItemsTable from "../../../components/common/RequestedItemsTable";

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
    if (!validateComment()) return;

    onApprove(request._id, managerComment.trim());
  };

  const handleReject = () => {
    if (!validateComment()) return;

    onReject(request._id, managerComment.trim());
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
            maxWidth: 640,
          },
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          height: "100%",
          overflowY: "auto",
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

        <RequestedItemsTable
          items={request?.items}
        />

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