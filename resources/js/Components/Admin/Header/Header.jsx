import React from 'react';
import ThemeSwitcher from '@/Components/Admin/ThemeSwitcher/ThemeSwitcher';
import Notifications from './Notifications';
import UserDropdown from './UserDropdown';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="container-fluid d-flex py-6 mb-4">
      {/* Search form */}
      <SearchBar />
      
      {/* Header buttons */}
      <div className="d-flex align-items-center ms-auto me-n1 me-lg-n2">
        <ThemeSwitcher />
        
        
        <div className="vr bg-gray-700 mx-2 mx-lg-3"></div>
        
        <Notifications />
        
        <div className="vr bg-gray-700 mx-2 mx-lg-3"></div>
        
        <UserDropdown />
      </div>
    </header>
  );
}