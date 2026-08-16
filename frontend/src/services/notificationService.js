import { apiClient } from './apiClient'

export const notificationService = {
  list: (userId) => apiClient.get(`/notifications/${userId}`),
  markRead: (id) => apiClient.put(`/notifications/${id}/read`),
}
