import { Link } from '@inertiajs/react';

const NavItem = ({ title, icon, href, active = false, subItems = [] }) => {
  const hasSubItems = subItems.length > 0;
  const collapseId = `${title.replace(/\s+/g, '')}Collapse`;

  return (
    <li className={`nav-item ${hasSubItems ? 'dropdown' : ''}`}>
      <Link
        className={`nav-link d-flex align-items-center justify-content-between ${active ? 'active' : ''}`}
        href={hasSubItems ? `#${collapseId}` : href}
        data-bs-toggle={hasSubItems ? 'collapse' : undefined}
        role={hasSubItems ? 'button' : undefined}
        aria-expanded={hasSubItems ? active : undefined}
        aria-controls={hasSubItems ? collapseId : undefined}
      >
        <div className="d-flex align-items-center">
          {icon}
          <span className="ms-2">{title}</span>
        </div>
        {hasSubItems && <i className="bi bi-chevron-down small ms-auto"></i>}
      </Link>

      {hasSubItems && (
        <div className={`collapse ${active ? 'show' : ''}`} id={collapseId}>
          <ul className="nav flex-column ms-3">
            {subItems.map((subItem, index) => (
              <li key={index} className="nav-item">
                <Link
                  href={subItem.href}
                  className={`nav-link ${subItem.active ? 'active' : ''}`}
                >
                  <span>{subItem.title}</span>
                  {subItem.badge && (
                    <span className={`badge text-bg-${subItem.badge.variant} rounded-pill ms-auto`}>
                      {subItem.badge.text}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default NavItem;
