import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState<any>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/users/current-user",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const result = await response.json();
      if (response.ok) {
        setUser(result.data);
      } else {
        setUser(null);
      }
    };
    if (token) fetchUser();
  }, [token]);

  if (!token) {
    return (
      <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          Profile
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black">
          Access denied
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          Please login first to view this page.
        </p>
        <Link
          to="/login"
          className="mt-6 inline-flex rounded-full bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800"
        >
          Go to login
        </Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
        <p className="mt-4 text-sm text-gray-600">Retrieving profile...</p>
      </div>
    );
  }

  const avatarUrl = user?.avatar?.url || "";
  const avatarSrc = avatarUrl.includes("placeholder")
    ? `https://ui-avatars.com/api/?name=${user.username}&background=111111&color=fff`
    : avatarUrl;

  return (
    <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
      <div className="flex items-center gap-4 border-b border-gray-200 pb-6">
        <div className="h-16 w-16 overflow-hidden rounded-full bg-gray-100 ring-1 ring-gray-200">
          <img
            src={avatarSrc}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-black">
            {user.username}
          </h2>
          <p className="mt-1 text-sm text-gray-600">Verified user</p>
        </div>
      </div>

      <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3">
          <span className="text-gray-500">Email</span>
          <span className="font-medium text-black">{user.email}</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3">
          <span className="text-gray-500">Role</span>
          <span className="font-medium text-black">{user.role}</span>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-gray-200 px-4 py-3">
          <span className="text-gray-500">Status</span>
          <span className="font-medium text-black">Active</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
