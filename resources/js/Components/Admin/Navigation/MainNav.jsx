import React from 'react';
import NavItem from './NavItem';
import { Link, usePage } from '@inertiajs/react';

export default function MainNav() {
  const { url } = usePage(); // Get the current URL path

  const navItems = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: (
       <svg viewBox="0 0 24 24" className="nav-link-icon" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
          <path d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      title: 'Products',
      icon: (
       <svg  className=" bi bi-box-seam nav-link-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
       </svg>
      ),
      subItems: [
        { title: 'Manage Products', href: '/products' },
        { title: 'Manage Categories', href: '/categories' },
      ],
    },
    {
      title: 'Pages',
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="nav-link-icon" height="18" width="18">
          <defs>
            <style>{`.a {fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;}`}</style>
          </defs>
          <path className="a" d="M17.25,23.25H3.75a1.5,1.5,0,0,1-1.5-1.5V5.25"/>
          <rect className="a" x="5.25" y="0.75" width="16.5" height="19.5" rx="1" ry="1"/>
        </svg>
      ),
      subItems: [
        { title: 'Account', href: '/account' },
        { title: 'User', href: '/user' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Wizard', href: '/wizard' },
        { title: 'Help Center', href: '/help-center' },
        { title: 'Invoice', href: '/invoice' },
        { title: 'API Keys', href: '/api-keys' },
        { title: 'Maintenance', href: '/maintenance' },
        { title: 'Connect Apps', href: '/connect-apps' },
        { title: 'Landing Page', href: '/landing', badge: { text: 'New', variant: 'success' } }
      ]
    },
  ];

  const isActive = (href) => url.startsWith(href);

  return (
    <nav id="main-navbar" className="navbar navbar-vertical navbar-expand-lg scrollbar bg-dark navbar-dark">
      <div className="container-fluid">
        <Link href="/dashboard" className="navbar-brand">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-basket2" viewBox="0 0 16 16">
          <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"/>
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"/>
        </svg>
          <span className="h1">E-Commerce</span>
        </Link>

        <a href="#" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#sidenavCollapse">
          <span className="navbar-toggler-icon"></span>
        </a>

        <div className="collapse navbar-collapse" id="sidenavCollapse">
          <ul className="navbar-nav mb-lg-7">
            {navItems.map((item, index) => {
              const subActive = item.subItems?.some(sub => isActive(sub.href));
              return (
                <NavItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                  href={item.href}
                  active={item.href ? isActive(item.href) : subActive}
                  subItems={item.subItems?.map(sub => ({
                    ...sub,
                    active: isActive(sub.href),
                  }))}
                />
              );
            })}
          </ul>

          <div className="help-box">
            <img src="/assets/images/illustrations/upgrade-illustration.svg" alt="Upgrade" />
            <h6>Upgrade to explore <span className="emphasize">premium</span> features</h6>
            <a className="btn btn-sm btn-primary" href="#">Upgrade to Business</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
