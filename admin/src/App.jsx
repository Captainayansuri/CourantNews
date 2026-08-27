import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminRoutes } from './components/admin/AdminRoutes';

export default function App() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="*" element={<AdminLogin />} />
    </Routes>
  );
}