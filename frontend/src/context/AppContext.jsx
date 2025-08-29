import { createContext, useEffect, useState, useCallback } from "react";
import PropTypes from 'prop-types';
import { toast } from 'react-toastify'
import axios from 'axios'
import { doctors as sampleDoctors } from '../assets/assets_frontend/assets'

export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '$'
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [doctors, setDoctors] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
  const [userData, setUserData] = useState(false)

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
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
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