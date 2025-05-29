import React from 'react'
import { Head } from '@inertiajs/react';
import { ThemeProvider } from '../Components/Admin/ThemeSwitcher/ThemeProvider';
import MainNav from '../Components/Admin/Navigation/MainNav';
import Header from '../Components/Admin/Header/Header';
import Footer from '../Components/Admin/Footer/Footer'


const AdminLayout = ({children,title}) => {
  return (
      <ThemeProvider>
      <div className="admin-layout" data-sidebar-behaviour="fixed" data-navigation-color="inverted">
        <Head title={title}>
          <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any" />
        </Head>
        
        <MainNav />
        
        <main className="main-content">
          <Header />
          {children}
          <Footer />
        </main>
        
        
      </div>
    </ThemeProvider>
  );
}

export default AdminLayout