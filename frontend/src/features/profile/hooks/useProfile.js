import { useCallback, useState } from "react";

import { getProfile } from "../services/profileService";

function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getProfile();

      setProfile(data);
    } catch (err) {
      setError(
        err?.response?.data?.message ||
          "Failed to fetch profile."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    profile,
    loading,
    error,
    fetchProfile,
  };
}

export default useProfile;