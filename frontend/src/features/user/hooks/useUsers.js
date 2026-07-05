import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import useSnackbar from "../../../hooks/useSnackbar";

import userService from "../services/userService";

function useUsers() {
  const {
    snackbar,
    showSnackbar,
    closeSnackbar,
  } = useSnackbar();

  const [loading, setLoading] =
    useState(true);

  const [actionLoading, setActionLoading] =
    useState(false);

  const [users, setUsers] = useState([]);

  const [selectedUser, setSelectedUser] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [role, setRole] =
    useState("");

  const [status, setStatus] =
    useState("");

  const loadUsers = useCallback(async () => {
    try {
      setLoading(true);

      const data =
        await userService.getAllUsers();

      setUsers(data);
    } catch (error) {
      showSnackbar(
        error?.response?.data?.message ||
          "Failed to load users",
        "error"
      );
    } finally {
      setLoading(false);
    }
  }, [showSnackbar]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

      const matchesSearch =
        fullName.includes(
          search.toLowerCase()
        ) ||
        user.email
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesRole =
        !role ||
        user.role === role;

      const matchesStatus =
        !status ||
        (status === "ACTIVE"
          ? user.isActive
          : !user.isActive);

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }, [
    users,
    search,
    role,
    status,
  ]);

  const stats = useMemo(() => {
    return {
      admins: users.filter(
        (user) =>
          user.role === "ADMIN"
      ).length,

      employees: users.filter(
        (user) =>
          user.role === "EMPLOYEE"
      ).length,

      managers: users.filter(
        (user) =>
          user.role === "MANAGER"
      ).length,

      purchaseTeam: users.filter(
        (user) =>
          user.role ===
          "PURCHASE_TEAM"
      ).length,
    };
  }, [users]);

  const syncUpdatedUser = (
    updatedUser
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === updatedUser._id
          ? updatedUser
          : user
      )
    );

    setSelectedUser(updatedUser);
  };

  const updateRole =
    async (newRole) => {
      if (!selectedUser) return;

      try {
        setActionLoading(true);

        const response =
          await userService.updateUserRole(
            selectedUser._id,
            newRole
          );

        syncUpdatedUser(
          response.data
        );

        showSnackbar(
          response.message,
          "success"
        );
      } catch (error) {
        showSnackbar(
          error?.response?.data
            ?.message ||
            "Failed to update role",
          "error"
        );
      } finally {
        setActionLoading(false);
      }
    };

  const activateUser =
    async () => {
      if (!selectedUser) return;

      try {
        setActionLoading(true);

        const response =
          await userService.activateUser(
            selectedUser._id
          );

        syncUpdatedUser(
          response.data
        );

        showSnackbar(
          response.message,
          "success"
        );
      } catch (error) {
        showSnackbar(
          error?.response?.data
            ?.message ||
            "Failed to activate user",
          "error"
        );
      } finally {
        setActionLoading(false);
      }
    };

  const deactivateUser =
    async () => {
      if (!selectedUser) return;

      try {
        setActionLoading(true);

        const response =
          await userService.deactivateUser(
            selectedUser._id
          );

        syncUpdatedUser(
          response.data
        );

        showSnackbar(
          response.message,
          "success"
        );
      } catch (error) {
        showSnackbar(
          error?.response?.data
            ?.message ||
            "Failed to deactivate user",
          "error"
        );
      } finally {
        setActionLoading(false);
      }
    };

  return {
    loading,
    actionLoading,

    users: filteredUsers,
    selectedUser,
    setSelectedUser,

    search,
    setSearch,

    role,
    setRole,

    status,
    setStatus,

    stats,

    updateRole,
    activateUser,
    deactivateUser,

    snackbar,
    closeSnackbar,
  };
}

export default useUsers;