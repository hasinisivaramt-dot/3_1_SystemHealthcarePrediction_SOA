import { apiClient } from './apiClient'

export const aiService = {
  analyzeSymptoms: (payload) => apiClient.post('/ai/analyze-symptoms', payload),
  getRiskAssessment: (id) => apiClient.get(`/ai/risk-assessment/${id}`),
  getExplainability: (id) => apiClient.get(`/ai/explainability/${id}`),
}
