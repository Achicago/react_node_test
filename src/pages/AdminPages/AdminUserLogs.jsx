import React from 'react';
import Sidebar from "../../components/admin/Sidebar";
import UserLogPage from "../../components/admin/UserLogPage";

const AdminUserLogs = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <UserLogPage />
      </div>
    </div>
  );
};

export default AdminUserLogs;