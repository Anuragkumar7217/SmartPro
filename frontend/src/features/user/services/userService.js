import api from "../../../services/api";

const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data.data;
};

const updateUserRole = async (
  userId,
  role
) => {
  const response = await api.patch(
    `/users/${userId}/role`,
    {
      role,
    }
  );

  return response.data;
};

const activateUser = async (
  userId
) => {
  const response = await api.patch(
    `/users/${userId}/activate`
  );

  return response.data;
};

const deactivateUser = async (
  userId
) => {
  const response = await api.patch(
    `/users/${userId}/deactivate`
  );

  return response.data;
};

export default {
  getAllUsers,
  updateUserRole,
  activateUser,
  deactivateUser,
};