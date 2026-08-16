import { apiClient } from './apiClient'

export const patientService = {
  getProfile: (id) => apiClient.get(`/patients/${id}`),
  updateProfile: (id, payload) => apiClient.put(`/patients/${id}`, payload),
  getMedicalRecords: (id) => apiClient.get(`/medical-records/patient/${id}`),
}
