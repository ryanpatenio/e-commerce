import React from 'react'

const OrderStatus = () => {
  return (
    <>
          <div className="col-xxl-6 d-flex">
            {/* Card */}
            <div className="card border-0 flex-fill w-100">
              <div className="card-header border-0 card-header-space-between">
                {/* Title */}
                <h2 className="card-header-title h4 text-uppercase">Order status</h2>
                {/* Dropdown */}
                <div className="dropdown">
                  <a
                    href="javascript: void(0);"
                    className="dropdown-toggle no-arrow text-secondary"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height={14}
                      width={14}
                    >
                      <g>
                        <circle
                          cx={12}
                          cy="3.25"
                          r="3.25"
                          style={{ fill: "currentColor" }}
                        />
                        <circle
                          cx={12}
                          cy={12}
                          r="3.25"
                          style={{ fill: "currentColor" }}
                        />
                        <circle
                          cx={12}
                          cy="20.75"
                          r="3.25"
                          style={{ fill: "currentColor" }}
                        />
                      </g>
                    </svg>
                  </a>
                  <div className="dropdown-menu">
                    <a href="javascript: void(0);" className="dropdown-item">
                      Action
                    </a>
                    <a href="javascript: void(0);" className="dropdown-item">
                      Another action
                    </a>
                    <a href="javascript: void(0);" className="dropdown-item">
                      Something else here
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="row justify-content-around">
                  <div className="col-lg-6 col-xl-4 mb-7 mb-lg-0">
                    {/* Chart */}
                    <div className="chart-container flex-grow-1">
                      <canvas id="orderStatusChart" />
                      {/* Labels */}
                      <div className="position-absolute top-50 start-50 translate-middle text-center">
                        <p className="fs-5 mb-0 text-muted lh-sm">ordered products</p>
                        <h3 className="display-2 fw-bold mb-0">329</h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xl-5">
                    <div className="row h-100 align-items-center">
                      <div className="col">
                        <div className="row justify-content-between">
                          <div className="col-auto col-lg">
                            {/* Label */}
                            <p className="fs-4 d-flex align-items-center fw-semibold mb-0">
                              <span className="legend-circle bg-primary" />
                              Delivered
                            </p>
                          </div>
                          <div className="col-auto col-lg">
                            {/* Comment */}
                            <p className="fs-4 text-muted">29%</p>
                          </div>
                        </div>
                        {/* / .row */}
                        <div className="row justify-content-between">
                          <div className="col-auto col-lg">
                            {/* Label */}
                            <p className="fs-4 d-flex align-items-center fw-semibold mb-0">
                              <span className="legend-circle bg-dark" />
                              In progress
                            </p>
                          </div>
                          <div className="col-auto col-lg">
                            {/* Comment */}
                            <p className="fs-4 text-muted">45%</p>
                          </div>
                        </div>
                        {/* / .row */}
                        <div className="row justify-content-between">
                          <div className="col-auto col-lg">
                            {/* Label */}
                            <p className="fs-4 d-flex align-items-center fw-semibold mb-0">
                              <span className="legend-circle bg-gray-400" />
                              To-do
                            </p>
                          </div>
                          <div className="col-auto col-lg">
                            {/* Comment */}
                            <p className="fs-4 text-muted">26%</p>
                          </div>
                        </div>
                        {/* / .row */}
                      </div>
                    </div>
                    {/* / .row */}
                  </div>
                </div>
                {/* / .row */}
              </div>
            </div>
          </div>        

    </>
  )
}

export default OrderStatus