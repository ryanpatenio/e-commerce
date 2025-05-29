import React from 'react'

const Earnings = () => {
  return (
    <div className="col-lg-6 col-xxl-3 d-flex">
        {/* Card */}
        <div className="card border-0 flex-fill w-100">
            <div className="card-body">
            <div className="row">
                <div className="col">
                {/* Title */}
                <h5 className="text-uppercase text-muted fw-semibold mb-2">
                    Earnings
                </h5>
                {/* Subtitle */}
                <h2 className="mb-0">$717,214</h2>
                </div>
                <div className="col-auto">
                {/* Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={30}
                    width={30}
                    className="text-primary"
                >
                    <defs>
                    <style
                        dangerouslySetInnerHTML={{
                        __html:
                            "\n                                                    .a {\n                                                        fill: none;\n                                                        stroke: currentColor;\n                                                        stroke-linecap: round;\n                                                        stroke-linejoin: round;\n                                                        stroke-width: 1.5px;\n                                                    }\n                                                "
                        }}
                    />
                    </defs>
                    <title>monitor-graph-line</title>
                    <polygon
                    className="a"
                    points="15 23.253 9 23.253 9.75 18.753 14.25 18.753 15 23.253"
                    />
                    <line className="a" x1="6.75" y1="23.253" x2="17.25" y2="23.253" />
                    <rect
                    className="a"
                    x="0.75"
                    y="0.753"
                    width="22.5"
                    height={18}
                    rx={3}
                    ry={3}
                    />
                    <path
                    className="a"
                    d="M18.75,5.253H16.717a1.342,1.342,0,0,0-.5,2.588l2.064.825a1.342,1.342,0,0,1-.5,2.587H15.75"
                    />
                    <line className="a" x1="17.25" y1="5.253" x2="17.25" y2="4.503" />
                    <line className="a" x1="17.25" y1="12.003" x2="17.25" y2="11.253" />
                    <path
                    className="a"
                    d="M.75,11.253,4.72,7.284a.749.749,0,0,1,1.06,0L7.72,9.223a.749.749,0,0,0,1.06,0l3.97-3.97"
                    />
                    <line className="a" x1="0.75" y1="15.753" x2="23.25" y2="15.753" />
                </svg>
                </div>
            </div>
            {/* / .row */}
            </div>
            <div className="card-footer">
            <div className="row justify-content-between">
                <div className="col-auto">
                {/* Label */}
                <p className="fs-6 text-muted text-uppercase mb-0">Today earnings</p>
                {/* Comment */}
                <p className="fs-5 fw-bold mb-0">£2,230</p>
                </div>
                <div className="col text-end text-truncate">
                {/* Label */}
                <p className="fs-6 text-muted text-uppercase mb-0">
                    Monthly earnings
                </p>
                {/* Comment */}
                <p className="fs-5 fw-bold mb-0">$158,990</p>
                </div>
            </div>
            {/* / .row */}
            </div>
        </div>
    </div>

  )
}

export default Earnings