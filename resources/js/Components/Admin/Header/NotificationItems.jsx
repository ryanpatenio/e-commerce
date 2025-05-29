import React from 'react'

const NotificationItems = ({ name , time , title , message}) => {
  return (
    <>
        <div className="offcanvas-body p-0">
            <div className="list-group list-group-flush">
                <a href="javascript: void(0);" className="list-group-item list-group-item-action">
                    <div className="d-flex">
                        <div className="avatar avatar-circle avatar-xs me-2">
                            <img src="https://d33wubrfki0l68.cloudfront.net/5dfa4398a7f2beddbcfa617402e193f2f13aaa94/2ecb0/assets/images/profiles/profile-28.jpeg" alt="..." className="avatar-img" width="30" height="30"/>
                        </div>
                        <div className="d-flex flex-column flex-grow-1">
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Daniel</h5>
                                <small className="text-muted">10 minutes ago</small>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="mb-1">RE: Email pre-population from external source</p>
                                <small className="text-secondary">Not sure if we'll need any further instruction on how to utilise the encoded ID in links from the new email broadcast tool.</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </>
  )
}

export default NotificationItems