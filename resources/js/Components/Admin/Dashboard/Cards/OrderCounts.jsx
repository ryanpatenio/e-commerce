import React from 'react'

const OrderCounts = () => {
  return (
    <div className="col-lg-6 col-xxl-3 d-flex">
        {/* Card */}
        <div className="card border-0 flex-fill w-100">
            <div className="card-body">
            <div className="row">
                <div className="col">
                {/* Title */}
                <h5 className="text-uppercase text-muted fw-semibold mb-2">Orders</h5>
                {/* Subtitle */}
                <h2 className="mb-0">15,386</h2>
                </div>
                <div className="col-auto">
                {/* Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    height={30}
                    width={30}
                    className="text-primary"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M6 19.1249H15.921C16.2753 19.125 16.6182 18.9996 16.889 18.7709C17.1597 18.5423 17.3407 18.2253 17.4 17.8759L20.037 2.37593C20.0965 2.02678 20.2776 1.70994 20.5483 1.48153C20.819 1.25311 21.1618 1.12785 21.516 1.12793H22.5"
                    />
                    <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M7.875 22.125C7.66789 22.125 7.5 21.9571 7.5 21.75C7.5 21.5429 7.66789 21.375 7.875 21.375"
                    />
                    <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M7.875 22.125C8.08211 22.125 8.25 21.9571 8.25 21.75C8.25 21.5429 8.08211 21.375 7.875 21.375"
                    />
                    <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M15.375 22.125C15.1679 22.125 15 21.9571 15 21.75C15 21.5429 15.1679 21.375 15.375 21.375"
                    />
                    <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M15.375 22.125C15.5821 22.125 15.75 21.9571 15.75 21.75C15.75 21.5429 15.5821 21.375 15.375 21.375"
                    />
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.9529 14.6251H5.88193C5.21301 14.625 4.5633 14.4014 4.03605 13.9897C3.5088 13.5781 3.13425 13.002 2.97193 12.3531L1.52193 6.55309C1.49426 6.44248 1.49218 6.32702 1.51583 6.21548C1.53949 6.10394 1.58827 5.99927 1.65846 5.90941C1.72864 5.81955 1.81839 5.74688 1.92089 5.69692C2.02338 5.64696 2.13591 5.62103 2.24993 5.62109H19.4839"
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
                <p className="fs-6 text-muted text-uppercase mb-0">Today orders</p>
                {/* Comment */}
                <p className="fs-5 fw-bold mb-0">121</p>
                </div>
                <div className="col text-end text-truncate">
                {/* Label */}
                <p className="fs-6 text-muted text-uppercase mb-0">Monthly orders</p>
                {/* Comment */}
                <p className="fs-5 fw-bold mb-0">1,944</p>
                </div>
            </div>
            {/* / .row */}
            </div>
        </div>
    </div>

  )
}

export default OrderCounts