import React from 'react';
import UserSidebar from "./UserSidebar";
import TaskFilter from "../../components/tasks/TaskFilter";

const UserTaskFilter = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">My Tasks - Filter & Search</h1>
        <TaskFilter />
      </div>
    </div>
  );
};

export default UserTaskFilter;