import { Routes, Route } from 'react-router-dom'

import PublicLayout from './layouts/PublicLayout'
import PatientLayout from './layouts/PatientLayout'
import DoctorLayout from './layouts/DoctorLayout'
import AdminLayout from './layouts/AdminLayout'

import Landing from './pages/public/Landing'
import About from './pages/public/About'
import Services from './pages/public/Services'
import HowItWorksPage from './pages/public/HowItWorksPage'
import Contact from './pages/public/Contact'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import VerifyAccount from './pages/auth/VerifyAccount'

import PatientDashboard from './pages/patient/Dashboard'
import SymptomAnalyzer from './pages/patient/SymptomAnalyzer'
import RiskAssessment from './pages/patient/RiskAssessment'
import SpecialtyRecommendation from './pages/patient/SpecialtyRecommendation'
import DoctorRecommendation from './pages/patient/DoctorRecommendation'
import AppointmentBooking from './pages/patient/AppointmentBooking'
import AppointmentDetails from './pages/patient/AppointmentDetails'
import PatientLiveQueue from './pages/patient/LiveQueue'
import HealthTimeline from './pages/patient/HealthTimeline'
import MedicalRecords from './pages/patient/MedicalRecords'
import PatientReports from './pages/patient/Reports'
import PatientPrescriptions from './pages/patient/Prescriptions'
import Notifications from './pages/patient/Notifications'
import AIHealthAssistant from './pages/patient/AIHealthAssistant'
import PatientProfile from './pages/patient/Profile'

import DoctorDashboard from './pages/doctor/Dashboard'
import DoctorAppointments from './pages/doctor/Appointments'
import PatientQueue from './pages/doctor/PatientQueue'
import PatientProfileDoctor from './pages/doctor/PatientProfile'
import PatientHistory from './pages/doctor/PatientHistory'
import AISummary from './pages/doctor/AISummary'
import DoctorReports from './pages/doctor/Reports'
import DoctorPrescriptions from './pages/doctor/Prescriptions'
import Schedule from './pages/doctor/Schedule'
import DoctorAnalytics from './pages/doctor/Analytics'
import DoctorProfile from './pages/doctor/Profile'

import AdminDashboard from './pages/admin/Dashboard'
import AdminPatients from './pages/admin/Patients'
import AdminDoctors from './pages/admin/Doctors'
import Hospitals from './pages/admin/Hospitals'
import Specialties from './pages/admin/Specialties'
import Departments from './pages/admin/Departments'
import AdminAppointments from './pages/admin/Appointments'
import AdminAnalytics from './pages/admin/Analytics'
import AIModels from './pages/admin/AIModels'
import ModelMonitoring from './pages/admin/ModelMonitoring'
import AuditLogs from './pages/admin/AuditLogs'
import AdminSecurity from './pages/admin/Security'
import Settings from './pages/admin/Settings'

export default function App() {
  return (
    <Routes>
      {/* ---------- Public site ---------- */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ---------- Auth ---------- */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/verify-account" element={<VerifyAccount />} />

      {/* ---------- Patient Portal ---------- */}
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<PatientDashboard />} />
        <Route path="analyze" element={<SymptomAnalyzer />} />
        <Route path="insights" element={<RiskAssessment />} />
        <Route path="specialty" element={<SpecialtyRecommendation />} />
        <Route path="doctors" element={<DoctorRecommendation />} />
        <Route path="appointments" element={<AppointmentBooking />} />
        <Route path="appointments/:id" element={<AppointmentDetails />} />
        <Route path="queue" element={<PatientLiveQueue />} />
        <Route path="timeline" element={<HealthTimeline />} />
        <Route path="records" element={<MedicalRecords />} />
        <Route path="reports" element={<PatientReports />} />
        <Route path="prescriptions" element={<PatientPrescriptions />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="assistant" element={<AIHealthAssistant />} />
        <Route path="profile" element={<PatientProfile />} />
      </Route>

      {/* ---------- Doctor Portal ---------- */}
      <Route path="/doctor" element={<DoctorLayout />}>
        <Route index element={<DoctorDashboard />} />
        <Route path="appointments" element={<DoctorAppointments />} />
        <Route path="queue" element={<PatientQueue />} />
        <Route path="patients" element={<PatientProfileDoctor />} />
        <Route path="ai-summary" element={<AISummary />} />
        <Route path="history" element={<PatientHistory />} />
        <Route path="reports" element={<DoctorReports />} />
        <Route path="prescriptions" element={<DoctorPrescriptions />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="analytics" element={<DoctorAnalytics />} />
        <Route path="profile" element={<DoctorProfile />} />
      </Route>

      {/* ---------- Admin Portal ---------- */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="patients" element={<AdminPatients />} />
        <Route path="doctors" element={<AdminDoctors />} />
        <Route path="hospitals" element={<Hospitals />} />
        <Route path="specialties" element={<Specialties />} />
        <Route path="departments" element={<Departments />} />
        <Route path="appointments" element={<AdminAppointments />} />
        <Route path="analytics" element={<AdminAnalytics />} />
        <Route path="ai-models" element={<AIModels />} />
        <Route path="model-monitoring" element={<ModelMonitoring />} />
        <Route path="audit-logs" element={<AuditLogs />} />
        <Route path="security" element={<AdminSecurity />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}
