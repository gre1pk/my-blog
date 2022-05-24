import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom'

function RequireAuth({ children }) {
  const { isLogin } = useSelector((state) => state.userReducer)
  const location = useLocation()

  if (!isLogin) {
    return <Navigate to="/sign-in" state={{ from: location }} />
  }

  return children
}

export default RequireAuth
