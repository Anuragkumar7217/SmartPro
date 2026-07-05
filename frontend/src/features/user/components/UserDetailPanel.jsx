import {
  Alert,
  Stack,
} from "@mui/material";

import Loader from "../../../components/common/Loader";

import UserInfoCard from "./UserInfoCard";
import UserRoleCard from "./UserRoleCard";
import UserActions from "./UserActions";

function UserDetailPanel({
  user,
  loading = false,
  onRoleChange,
  onActivate,
  onDeactivate,
}) {
  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return (
      <Alert severity="info">
        Select a User from the left to view its details.
      </Alert>
    );
  }

  return (
    <Stack spacing={3}>
      <UserInfoCard user={user} />

      <UserRoleCard
        user={user}
        loading={loading}
        onRoleChange={onRoleChange}
      />

      <UserActions
        user={user}
        loading={loading}
        onActivate={onActivate}
        onDeactivate={onDeactivate}
      />
    </Stack>
  );
}

export default UserDetailPanel;