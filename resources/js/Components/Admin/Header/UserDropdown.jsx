import React from 'react'

const UserDropdown = () => {
  return (
    <>
   
   <div className="dropdown">
  <a
    href="javascript: void(0);"
    className="dropdown-toggle no-arrow d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mx-1 mx-lg-2 w-40px h-40px"
    role="button"
    data-bs-toggle="dropdown"
    data-bs-auto-close="outside"
    aria-haspopup="true"
    aria-expanded="false"
    data-bs-offset="0,0"
  >
    <div className="avatar avatar-circle avatar-sm avatar-online">
      <img
        src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
        alt="..."
        className="avatar-img"
        width={40}
        height={40}
      />
    </div>
  </a>
  <div className="dropdown-menu">
    <div className="dropdown-item-text">
      <div className="d-flex align-items-center">
        <div className="avatar avatar-sm avatar-circle">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/053f2dfd0df2f52c41e903a21d177b0b44abc9b1/1282c/assets/images/profiles/profile-06.jpeg"
            alt="..."
            className="avatar-img"
            width={40}
            height={40}
          />
        </div>
        <div className="flex-grow-1 ms-3">
          <h4 className="mb-0">Ellie Tucker</h4>
          <p className="card-text">ellie.tucker@dashly.com</p>
        </div>
      </div>
    </div>
    <hr className="dropdown-divider" />
    {/* Dropdown */}
    <div className="dropdown dropend">
      <a
        className="dropdown-item dropdown-toggle"
        href="javascript: void(0);"
        id="statusDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-offset="-16,10"
      >
        Set status
      </a>
      <div
        className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu"
        aria-labelledby="statusDropdown"
      >
        <a className="dropdown-item" href="javascript: void(0);">
          <span className="legend-circle bg-success me-2" />
          Available
        </a>
        <a className="dropdown-item" href="javascript: void(0);">
          <span className="legend-circle bg-danger me-2" />
          Busy
        </a>
        <a className="dropdown-item" href="javascript: void(0);">
          <span className="legend-circle bg-warning me-2" />
          Away
        </a>
        <a className="dropdown-item" href="javascript: void(0);">
          <span className="legend-circle bg-gray-500 me-2" />
          Appear offline
        </a>
        <hr className="dropdown-divider" />
        <a className="dropdown-item" href="javascript: void(0);">
          Reset status
        </a>
      </div>
    </div>
    {/* End Dropdown */}
    <a className="dropdown-item" href="javascript: void(0);">
      Profile &amp; account
    </a>
    <a className="dropdown-item" href="javascript: void(0);">
      Settings
    </a>
    <hr className="dropdown-divider" />
    <a className="dropdown-item" href="javascript: void(0);">
      Sign out
    </a>
  </div>
</div>

   </>
  )
}

export default UserDropdown