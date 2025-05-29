import React from 'react'

const TopProducts = () => {
  return (
      <div className="col-xxl-9 d-flex">
        {/* Card */}
        <div
          className="card border-0 flex-fill w-100"
          data-list='{"valueNames": ["name", "price", "quantity", "amount", {"name": "sales", "attr": "data-sales"}], "page": 5}'
          id="topSellingProducts"
        >
          <div className="card-header border-0 card-header-space-between">
            {/* Title */}
            <h2 className="card-header-title h4 text-uppercase">
              Top selling products
            </h2>
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
          {/* Table */}
          <div className="table-responsive">
            <table className="table align-middle table-edge table-nowrap mb-0">
              <thead className="thead-light">
                <tr>
                  <th>
                    <a
                      href="javascript: void(0);"
                      className="text-muted list-sort"
                      data-sort="name"
                    >
                      Name
                    </a>
                  </th>
                  <th className="text-end">
                    <a
                      href="javascript: void(0);"
                      className="text-muted list-sort"
                      data-sort="price"
                    >
                      Price
                    </a>
                  </th>
                  <th className="text-end">
                    <a
                      href="javascript: void(0);"
                      className="text-muted list-sort"
                      data-sort="quantity"
                    >
                      Quantity
                    </a>
                  </th>
                  <th className="text-end">
                    <a
                      href="javascript: void(0);"
                      className="text-muted list-sort"
                      data-sort="amount"
                    >
                      Amount
                    </a>
                  </th>
                  <th className="text-end pe-7 min-w-200px">
                    <a
                      href="javascript: void(0);"
                      className="text-muted list-sort"
                      data-sort="sales"
                    >
                      Sales
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody className="list">
                <tr>
                  <td className="name fw-bold">iPad Air</td>
                  <td className="price text-end">$599</td>
                  <td className="quantity text-end">135</td>
                  <td className="amount text-end">$80,865</td>
                  <td className="sales" data-sales={81}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress d-flex flex-grow-1">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "81%" }}
                          aria-valuenow={81}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="ms-3 text-muted">81%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="name fw-bold">iPhone SE</td>
                  <td className="price text-end">$499</td>
                  <td className="quantity text-end">127</td>
                  <td className="amount text-end">$63,373</td>
                  <td className="sales" data-sales={25}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress w-100">
                        <div
                          className="progress-bar bg-dark"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="ms-3 text-muted">25%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="name fw-bold">Nexus 3</td>
                  <td className="price text-end">$349</td>
                  <td className="quantity text-end">98</td>
                  <td className="amount text-end">$34,202</td>
                  <td className="sales" data-sales={41}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress w-100">
                        <div
                          className="progress-bar bg-dark"
                          role="progressbar"
                          style={{ width: "41%" }}
                          aria-valuenow={41}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="ms-3 text-muted">41%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="name fw-bold">Apple watch series-6</td>
                  <td className="price text-end">$599</td>
                  <td className="quantity text-end">214</td>
                  <td className="amount text-end">$128,186</td>
                  <td className="sales" data-sales={62}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress w-100">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "62%" }}
                          aria-valuenow={62}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="ms-3 text-muted">62%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="name fw-bold">Apple TV 4K</td>
                  <td className="price text-end">$1200</td>
                  <td className="quantity text-end">51</td>
                  <td className="amount text-end">$61,200</td>
                  <td className="sales" data-sales={36}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="progress w-100">
                        <div
                          className="progress-bar bg-dark"
                          role="progressbar"
                          style={{ width: "36%" }}
                          aria-valuenow={36}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <span className="ms-3 text-muted">36%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* / .table-responsive */}
        </div>
      </div>


  )
}

export default TopProducts