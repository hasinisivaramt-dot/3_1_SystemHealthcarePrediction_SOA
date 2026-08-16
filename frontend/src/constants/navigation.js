// Sidebar nav items per portal (icons are lucide-react component names,
// resolved in Sidebar.jsx).
export const PATIENT_NAV = [
  { label: 'Dashboard', path: '/patient', icon: 'LayoutDashboard' },
  { label: 'Analyze Symptoms', path: '/patient/analyze', icon: 'Stethoscope' },
  { label: 'AI Health Insights', path: '/patient/insights', icon: 'Sparkles' },
  { label: 'Find Doctors', path: '/patient/doctors', icon: 'Search' },
  { label: 'Appointments', path: '/patient/appointments', icon: 'CalendarCheck' },
  { label: 'Live Queue', path: '/patient/queue', icon: 'Users' },
  { label: 'Medical Records', path: '/patient/records', icon: 'FileText' },
  { label: 'Reports', path: '/patient/reports', icon: 'FileBarChart' },
  { label: 'Prescriptions', path: '/patient/prescriptions', icon: 'Pill' },
  { label: 'Health Timeline', path: '/patient/timeline', icon: 'History' },
  { label: 'Notifications', path: '/patient/notifications', icon: 'Bell' },
  { label: 'Profile', path: '/patient/profile', icon: 'User' },
]

export const DOCTOR_NAV = [
  { label: 'Dashboard', path: '/doctor', icon: 'LayoutDashboard' },
  { label: "Today's Appointments", path: '/doctor/appointments', icon: 'CalendarClock' },
  { label: 'Patient Queue', path: '/doctor/queue', icon: 'Users' },
  { label: 'Patients', path: '/doctor/patients', icon: 'UserSquare2' },
  { label: 'AI Patient Summary', path: '/doctor/ai-summary', icon: 'Sparkles' },
  { label: 'Medical History', path: '/doctor/history', icon: 'History' },
  { label: 'Reports', path: '/doctor/reports', icon: 'FileBarChart' },
  { label: 'Prescriptions', path: '/doctor/prescriptions', icon: 'Pill' },
  { label: 'Schedule', path: '/doctor/schedule', icon: 'CalendarDays' },
  { label: 'Analytics', path: '/doctor/analytics', icon: 'BarChart3' },
  { label: 'Profile', path: '/doctor/profile', icon: 'User' },
]

export const ADMIN_NAV = [
  { label: 'Dashboard', path: '/admin', icon: 'LayoutDashboard' },
  { label: 'Patients', path: '/admin/patients', icon: 'Users' },
  { label: 'Doctors', path: '/admin/doctors', icon: 'UserSquare2' },
  { label: 'Hospitals', path: '/admin/hospitals', icon: 'Building2' },
  { label: 'Specialties', path: '/admin/specialties', icon: 'Tags' },
  { label: 'Departments', path: '/admin/departments', icon: 'Layers' },
  { label: 'Appointments', path: '/admin/appointments', icon: 'CalendarCheck' },
  { label: 'Analytics', path: '/admin/analytics', icon: 'BarChart3' },
  { label: 'AI Models', path: '/admin/ai-models', icon: 'Sparkles' },
  { label: 'Model Monitoring', path: '/admin/model-monitoring', icon: 'Activity' },
  { label: 'Audit Logs', path: '/admin/audit-logs', icon: 'ScrollText' },
  { label: 'Security', path: '/admin/security', icon: 'ShieldCheck' },
  { label: 'Settings', path: '/admin/settings', icon: 'Settings' },
]
