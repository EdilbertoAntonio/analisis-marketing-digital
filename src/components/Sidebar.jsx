import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/sidebar.css';

const SIDEBAR_ITEMS = [
  { name: 'Dashboard', icon: 'dashboard', to: '/Dashboard' },
  { name: 'Campaign Registration', icon: 'description', to: '/CampaignsRegistration' },
  { name: 'Campaign Table', icon: 'table', to: '/CampaignsTable' }
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <nav className="sidebar-nav">
        <SidebarHeader 
          collapsed={collapsed} 
          onToggle={toggleSidebar} 
        />
        <NavItems 
          items={SIDEBAR_ITEMS} 
          collapsed={collapsed} 
        />
      </nav>
    </aside>
  );
};

const SidebarHeader = ({ collapsed, onToggle }) => (
  <ul>
    <li>
      <div className="collapse-button continer-flex sidebar-link" onClick={onToggle}>
        <i className="material-symbols-outlined">
          {collapsed ? 'menu' : 'menu_open'}
        </i>
        {!collapsed && <div className="sidebar-header">KPIs</div>}
      </div>
    </li>
  </ul>
);

const NavItems = ({ items, collapsed }) => (
  <ul>
    {items.map((item) => (
      <li key={item.name}>
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            `sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <i className="material-symbols-outlined">{item.icon}</i>
          {!collapsed && <span>{item.name}</span>}
        </NavLink>
      </li>
    ))}
  </ul>
);