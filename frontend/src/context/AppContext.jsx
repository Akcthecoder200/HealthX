import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'
import axios from 'axios'
import { doctors as sampleDoctors } from '../assets/assets_frontend/assets'

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '$'
  const backendUrl = import.meta.env.VITE_BACKEND_URL || ''

  const [doctors, setDoctors] = useState([])
  const [token, setToken] = useState(localStorage.getItem('userToken') ? localStorage.getItem('userToken') : false)
  const [userData, setUserData] = useState(false)

  // Clear admin/doctor tokens when on frontend to avoid conflicts
  useEffect(() => {
    // Only clear if we're in the frontend (not admin panel)
    if (!window.location.pathname.includes('/admin')) {
      localStorage.removeItem('aToken')
      localStorage.removeItem('dToken')
    }
  }, [])

  const getDoctorsData = useCallback(async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/doctor/list')
      if (data.success && data.doctors.length > 0) {
        setDoctors(data.doctors)
      } else {
        // Use sample doctors as fallback if no doctors in database
        setDoctors(sampleDoctors)
      }

    } catch (error) {
      console.log(error)
      // Use sample doctors as fallback on error
      setDoctors(sampleDoctors)
      toast.error('Using sample data - ' + error.message)
    }

  }, [backendUrl])

  const loadUserProfileData = useCallback(async () => {

    try {

      const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })

      if (data.success) {
        setUserData(data.userData)
      } else {
        toast.error(data.message)
        // Clear invalid token
        setToken(false)
        localStorage.removeItem('userToken')
      }

    } catch (error) {
      console.log(error)
      // Clear invalid token on JWT errors
      if (error.response?.status === 401 || error.message.includes('token')) {
        setToken(false)
        localStorage.removeItem('userToken')
        toast.error('Session expired. Please login again.')
      } else {
        toast.error(error.message)
      }
    }

  }, [backendUrl, token])

  const value = {
    doctors, getDoctorsData,
    currencySymbol,
    token, setToken,
    backendUrl,
    userData, setUserData,
    loadUserProfileData
  }

  useEffect(() => {
    getDoctorsData()
  }, [getDoctorsData])

  useEffect(() => {
    if (token) {
      loadUserProfileData()
    } else {
      setUserData(false)
    }
  }, [token, loadUserProfileData])

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )

}
AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContextProvider