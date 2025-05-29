import React from 'react'

const CurrentBalance = () => {
  return (
    <div className="col-lg-6 col-xxl-3 d-flex">
        {/* Card */}
        <div className="card border-0 text-bg-primary flex-fill w-100">
            <div className="card-body">
                {/* Title */}
                <h4 className="text-uppercase fw-semibold mb-2">Current balance</h4>
                {/* Subtitle */}
                <h2 className="mb-0">$981,340</h2>
                {/* Chart */}
                <div className="chart-container h-70px">
                    <canvas id="currentBalanceChart" />
                </div>
            </div>
        </div>
    </div>

  )
}

export default CurrentBalance