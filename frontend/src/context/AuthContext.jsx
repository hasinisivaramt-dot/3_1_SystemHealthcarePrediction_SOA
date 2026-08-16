import { createContext, useContext, useState } from 'react'

// Minimal auth context stub — wire up to auth-service via
// services/authService.js once the API Gateway is running.
const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null) // { id, role: 'patient' | 'doctor' | 'admin', name }

  const login = async (credentials) => {
    // const { data } = await authService.login(credentials)
    // setUser(data.user)
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
