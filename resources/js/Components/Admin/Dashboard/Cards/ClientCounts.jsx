import React from 'react'

const ClientCounts = () => {
  return (
    <>
    <div className="col-lg-6 col-xxl-3 d-flex">
        {/* Card */}
        <div className="card border-0 flex-fill w-100">
          <div className="card-body">
            <div className="row">
              <div className="col">
                {/* Title */}
                <h5 className="text-uppercase text-muted fw-semibold mb-2">
                  Clients
                </h5>
                {/* Subtitle */}
                <h2 className="mb-0">6,328</h2>
              </div>
              <div className="col-auto">
                {/* Icon */}
                <svg
                  viewBox="0 0 24 24"
                  height={30}
                  width={30}
                  className="text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.250 6.000 A2.250 2.250 0 1 0 6.750 6.000 A2.250 2.250 0 1 0 2.250 6.000 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4.5,9.75A3.75,3.75,0,0,0,.75,13.5v2.25h1.5l.75,6H6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.250 6.000 A2.250 2.250 0 1 0 21.750 6.000 A2.250 2.250 0 1 0 17.250 6.000 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M19.5,9.75a3.75,3.75,0,0,1,3.75,3.75v2.25h-1.5l-.75,6H18"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9.000 3.750 A3.000 3.000 0 1 0 15.000 3.750 A3.000 3.000 0 1 0 9.000 3.750 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.25,13.5a5.25,5.25,0,0,0-10.5,0v2.25H9l.75,7.5h4.5l.75-7.5h2.25Z"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>
            {/* / .row */}
          </div>
          <div className="card-footer">
            <div className="row justify-content-between">
              <div className="col-auto">
                {/* Label */}
                <p className="fs-6 text-muted text-uppercase mb-0">Today clients</p>
                {/* Comment */}
                <p className="fs-5 fw-bold mb-0">57</p>
              </div>
              <div className="col text-end text-truncate">
                {/* Label */}
                <p className="fs-6 text-muted text-uppercase mb-0">Monthly clients</p>
                {/* Comment */}
                <p className="fs-5 fw-bold mb-0">681</p>
              </div>
            </div>
            {/* / .row */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ClientCounts