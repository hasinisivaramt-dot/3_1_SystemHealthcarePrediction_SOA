import { apiClient } from './apiClient'

export const authService = {
  login: (credentials) => apiClient.post('/auth/login', credentials),
  register: (payload) => apiClient.post('/auth/register', payload),
  refresh: () => apiClient.post('/auth/refresh'),
  forgotPassword: (email) => apiClient.post('/auth/forgot-password', { email }),
}
