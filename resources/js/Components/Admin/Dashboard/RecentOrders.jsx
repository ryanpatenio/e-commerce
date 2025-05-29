import React from 'react'

const RecentOrders = () => {
  return (
    <>
      <div className="col-xxl-3 d-flex">
         {/* Card */}
        <div className="card border-0 flex-fill w-100">
          <div className="card-header border-0 border-0 card-header-space-between">
            {/* Title */}
            <h2 className="card-header-title h4 text-uppercase">Recent orders</h2>
            {/* Link */}
            <a href="javascript: void(0);" className="small fw-bold">
              View all
            </a>
          </div>
          {/* Table */}
          <div className="table-responsive">
            <table className="table table-sm table-borderless align-middle mb-0">
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th className="text-end">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/790b7dd581a3ac4fd0410afad0fb12c6e93c9e7a/b0657/assets/images/profiles/profile-07.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="fw-bold d-block">Lester William</span>
                        <span className="fs-6 text-muted">24 minutes ago</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="fw-bold">$99</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/5e2b51ec857b6e9866574263391803f159c8081e/29577/assets/images/profiles/profile-02.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="fw-bold d-block">Gabriella Fletcher</span>
                        <span className="fs-6 text-muted">3 hours ago</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="fw-bold">$59</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/4b8c918c73e2c72876e4bd4ba8c89401bae69d14/5923c/assets/images/profiles/profile-03.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="fw-bold d-block">Marcia Banks</span>
                        <span className="fs-6 text-muted">9 hours ago</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="fw-bold">$499</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/eec1f115f0af81936bbe3a4f4a4d043cd3c0e7e4/34439/assets/images/profiles/profile-09.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="fw-bold d-block">Irina Garcia</span>
                        <span className="fs-6 text-muted">17 hours ago</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="fw-bold">$149</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-circle avatar-xs me-2">
                        <img
                          src="https://d33wubrfki0l68.cloudfront.net/102e41d9e1988e0849ecfe402b1d46f4efd3574b/8dc2e/assets/images/profiles/profile-12.jpeg"
                          alt="..."
                          className="avatar-img"
                          width={30}
                          height={30}
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <span className="fw-bold d-block">Javier Griffin</span>
                        <span className="fs-6 text-muted">1 day ago</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-end">
                    <div className="fw-bold">$125</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* / .table-responsive */}
        </div>
    </div>

    </>
  )
}

export default RecentOrders