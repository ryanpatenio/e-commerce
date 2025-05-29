import React from 'react'
import NotificationItems from './NotificationItems'
import { Link } from '@inertiajs/react'

const Notifications = () => {
  return (
    <>
   
     <Link className="d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mx-1 mx-lg-2 w-40px h-40px position-relative link-secondary" data-bs-toggle="offcanvas" href="#offcanvasNotifications" role="button" aria-controls="offcanvasNotifications">
        <svg viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,21.75a2.087,2.087,0,0,0,4.005,0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M12 3L12 0.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
            <path d="M12,3a7.5,7.5,0,0,1,7.5,7.5c0,7.046,1.5,8.25,1.5,8.25H3s1.5-1.916,1.5-8.25A7.5,7.5,0,0,1,12,3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
        </svg>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
            20+<span className="visually-hidden">unread messages</span>
        </span>
    </Link>

    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNotifications" aria-labelledby="offcanvasNotificationsLabel">
      <div className="offcanvas-header px-5">
        <h3 className="offcanvas-title" id="offcanvasNotificationsLabel">Notifications</h3>
        <div className="d-flex align-items-start">
          <div className="dropdown">
            <a
              href="#"
              className="dropdown-toggle no-arrow w-20px h-20px me-2 text-body"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={(e) => e.preventDefault()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="16" width="16">
                <g fill="currentColor">
                  <circle cx="3.25" cy="12" r="3.25" />
                  <circle cx="12" cy="12" r="3.25" />
                  <circle cx="20.75" cy="12" r="3.25" />
                </g>
              </svg>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="me-2 text-secondary" height="14" width="14">
                    <g fill="currentColor">
                      <path d="M23.22,2.06a1.49,1.49,0,0,0-2,.59l-8.5,15.43L6.46,11.29a1.5,1.5,0,1,0-2.21,2l7.64,8.34a1.52,1.52,0,0,0,2.42-.29L23.81,4.1A1.5,1.5,0,0,0,23.22,2.06Z" />
                      <path d="M2.61,14.63a1.5,1.5,0,0,0-2.22,2l4.59,5a1.52,1.52,0,0,0,2.11.09,1.49,1.49,0,0,0,.1-2.12Z" />
                      <path d="M10.3,13a1.41,1.41,0,0,0,2-.54L16.89,4.1a1.5,1.5,0,1,0-2.62-1.45L9.68,11A1.41,1.41,0,0,0,10.3,13Z" />
                    </g>
                  </svg>
                  Mark all as read
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="me-2 text-secondary" height="14" width="14">
                    <g fill="currentColor">
                      <path d="M21.5,2.5H2.5a2,2,0,0,0-2,2v3a1,1,0,0,0,1,1h21a1,1,0,0,0,1-1v-3A2,2,0,0,0,21.5,2.5Z" />
                      <path d="M21.5,10H2.5a1,1,0,0,0-1,1v8.5a2,2,0,0,0,2,2h17a2,2,0,0,0,2-2V11A1,1,0,0,0,21.5,10Zm-6.25,3.5A1.25,1.25,0,0,1,14,14.75H10a1.25,1.25,0,0,1,0-2.5h4A1.25,1.25,0,0,1,15.25,13.5Z" />
                    </g>
                  </svg>
                  Archive all
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="me-2 text-secondary" height="14" width="14">
                    <g fill="currentColor">
                      <path d="M21,19.5a1,1,0,0,0,0-2A1.5,1.5,0,0,1,19.5,16V11.14a8.65,8.65,0,0,0-.4-2.62l-11,11Z" />
                      <path d="M14.24,21H9.76a.25.25,0,0,0-.24.22,2.64,2.64,0,0,0,0,.28,2.5,2.5,0,0,0,5,0,2.64,2.64,0,0,0,0-.28A.25.25,0,0,0,14.24,21Z" />
                      <path d="M1,24a1,1,0,0,0,.71-.28l22-22a1,1,0,0,0-1.42-1.42l-5,5A7.31,7.31,0,0,0,13,3.07V1a1,1,0,0,0-2,0V3.07a8,8,0,0,0-6.5,8.07V16A1.5,1.5,0,0,1,3,17.5a1,1,0,0,0,0,2h.09L.29,22.29a1,1,0,0,0,0,1.42A1,1,0,0,0,1,24Z" />
                    </g>
                  </svg>
                  Disable notifications
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="me-2 text-secondary" height="14" width="14">
                    <g fill="currentColor">
                      <rect x="4.25" y="4.5" width="5.75" height="7.25" rx="1.25" />
                      <path d="M24,10a3,3,0,0,0-3-3H19V2.5a2,2,0,0,0-2-2H2a2,2,0,0,0-2,2V20a3.5,3.5,0,0,0,3.5,3.5h17A3.5,3.5,0,0,0,24,20ZM3.5,21.5A1.5,1.5,0,0,1,2,20V3a.5.5,0,0,1,.5-.5h14A.5.5,0,0,1,17,3V20a3.51,3.51,0,0,0,.11.87.5.5,0,0,1-.09.44.49.49,0,0,1-.39.19ZM22,20a1.5,1.5,0,0,1-3,0V9.5a.5.5,0,0,1,.5-.5H21a1,1,0,0,1,1,1Z" />
                      <rect x="12" y="6.05" width="3.5" height="2" rx="0.75" />
                      <rect x="12" y="10.05" width="3.5" height="2" rx="0.75" />
                      <rect x="4" y="14.05" width="11.5" height="2" rx="0.75" />
                      <rect x="4" y="18.05" width="9" height="2" rx="0.75" />
                    </g>
                  </svg>
                  What's new?
                </a>
              </li>
            </ul>
          </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      </div>
      
        {/* Notification Items */}
        
        <NotificationItems />
    </div>
 </>
  )
}

export default Notifications