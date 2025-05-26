import React from 'react'

const Dashboard = () => {
  return (
     <>
        <div className="min-h-screen grid place-items-center ">
            <div className="w-full max-w-sm rounded overflow-hidden shadow-lg bg-white p-8">            
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Dashboard</div>
                <p className="text-gray-700 text-base">
                    This is a Tailwind CSS card that matches Bootstrap's styling.
                </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #tag
                </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard