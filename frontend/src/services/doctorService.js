import { apiClient } from './apiClient'

export const doctorService = {
  list: (params) => apiClient.get('/doctors', { params }),
  getProfile: (id) => apiClient.get(`/doctors/${id}`),
  updateAvailability: (id, payload) => apiClient.put(`/doctors/${id}/availability`, payload),
}
