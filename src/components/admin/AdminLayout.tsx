
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';

export const AdminLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AdminSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <AdminHeader />
        <main className="flex-1 overflow-auto p-6 bg-muted/30">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
