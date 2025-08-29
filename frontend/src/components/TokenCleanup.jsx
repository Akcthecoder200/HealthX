import { useEffect } from 'react'

const TokenCleanup = () => {
  useEffect(() => {
    // Clear admin/doctor tokens when accessing frontend
    // This prevents JWT conflicts between admin panel and user frontend
    const currentPath = window.location.pathname
    
    if (!currentPath.includes('/admin')) {
      // Only clear if we're not in admin panel
      const aToken = localStorage.getItem('aToken')
      const dToken = localStorage.getItem('dToken')
      
      if (aToken || dToken) {
        localStorage.removeItem('aToken')
        localStorage.removeItem('dToken')
        console.log('Admin/Doctor tokens cleared from frontend')
      }
    }
  }, [])

  return null // This component doesn't render anything
}

export default TokenCleanup
