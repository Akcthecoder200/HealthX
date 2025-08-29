import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const PortalAccess = () => {
  return (
    <div className='my-16 md:my-20'>
      <div className='text-center mb-10'>
        <h1 className='text-3xl font-medium'>Healthcare Professional Access</h1>
        <p className='mt-4 text-gray-600'>Access specialized portals for healthcare management</p>
      </div>

      <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
        
        {/* Admin Portal Card */}
        <div className='bg-white border border-blue-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 w-full md:w-80'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
              <img className='w-6' src={assets.verified_icon} alt="" />
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>Admin Portal</h3>
              <p className='text-gray-600 text-sm'>System Administration</p>
            </div>
          </div>
          <p className='text-gray-600 mb-6'>Manage doctors, appointments, and system settings. Complete administrative control.</p>
          <a 
            href="http://localhost:5174" 
            target="_blank" 
            rel="noopener noreferrer"
            className='w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center block'
          >
            Access Admin Portal
          </a>
          <p className='text-xs text-gray-500 mt-3 text-center'>Default: admin@prescripto.com / 123456</p>
        </div>

        {/* Doctor Portal Card */}
        <div className='bg-white border border-green-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 w-full md:w-80'>
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
              <img className='w-6' src={assets.appointment_img} alt="" />
            </div>
            <div>
              <h3 className='text-xl font-semibold text-gray-800'>Doctor Portal</h3>
              <p className='text-gray-600 text-sm'>Healthcare Provider</p>
            </div>
          </div>
          <p className='text-gray-600 mb-6'>Manage your appointments, view patient information, and update your availability.</p>
          <a 
            href="http://localhost:5174" 
            target="_blank" 
            rel="noopener noreferrer"
            className='w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 text-center block'
          >
            Access Doctor Portal
          </a>
          <p className='text-xs text-gray-500 mt-3 text-center'>Login with your doctor credentials</p>
        </div>

      </div>
    </div>
  )
}

export default PortalAccess
