import axios from 'axios'

// Every request goes through the API Gateway — never directly to a
// microservice (architecture rule 1/2).
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('healix_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
