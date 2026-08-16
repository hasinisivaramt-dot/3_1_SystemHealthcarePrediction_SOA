import { apiClient } from './apiClient'

export const recommendationService = {
  recommendSpecialty: (payload) => apiClient.post('/recommendations/specialty', payload),
  recommendDoctors: (payload) => apiClient.post('/recommendations/doctors', payload),
  recommendSlots: (doctorId) => apiClient.get(`/recommendations/slots/${doctorId}`),
}
