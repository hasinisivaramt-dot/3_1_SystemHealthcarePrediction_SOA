import { apiClient } from './apiClient'

export const appointmentService = {
  book: (payload) => apiClient.post('/appointments', payload),
  cancel: (id) => apiClient.delete(`/appointments/${id}`),
  reschedule: (id, payload) => apiClient.put(`/appointments/${id}/reschedule`, payload),
  list: (params) => apiClient.get('/appointments', { params }),
}
