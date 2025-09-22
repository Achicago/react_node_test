import React from 'react';
import Sidebar from "../../components/admin/Sidebar";
import TaskFilter from "../../components/tasks/TaskFilter";

const AdminTaskFilter = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Task Management - Filter & Search</h1>
        <TaskFilter />
      </div>
    </div>
  );
};

export default AdminTaskFilter;