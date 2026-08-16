# Healix — Smart Healthcare Appointment & Disease-Risk Prediction System

AI-Powered. Patient-Focused.

Healix connects the full healthcare journey — symptoms → clinical NLP →
disease-risk prediction → explainable AI → specialty/doctor recommendation →
smart appointment scheduling → consultation → medical records → follow-up —
across three portals (Patient, Doctor, Admin) on a microservices backend.

> Healix provides AI-assisted health insights and does not replace
> professional medical advice or clinical diagnosis.

## What's built right now

**Phase 1 (per the build plan) is complete and running:** the full landing
page and design system, built as a real React app, plus the project
architecture for every later phase — frontend routing, API Gateway routing,
13 FastAPI microservice skeletons, the AI/ML and MLOps layout, Docker /
Kubernetes / monitoring / security / messaging scaffolding, and CI workflows.

Everything past the landing page (patient/doctor/admin pages, service
business logic, trained models) is scaffolded as clearly-labelled
placeholders, ready to be filled in phase by phase — see section 50 of the
original spec.

## Quick start (frontend only)

    cd frontend
    npm install
    npm run dev
    # → http://localhost:5173

## Quick start (full stack, via Docker)

    cp .env.example .env
    docker compose up --build
    # frontend  → http://localhost:5173
    # gateway   → http://localhost:8000
    # RabbitMQ mgmt → http://localhost:15672

## Repository layout

    frontend/            React + Vite + Tailwind CSS + Framer Motion + Recharts + Lucide + Axios
    services/             13 FastAPI microservices (own their own MongoDB db each)
    ai-ml/                 Model training code — disease-risk, clinical NLP, specialty
                            recommendation, doctor ranking, waiting-time, summarization, SHAP
    mlops/                 DVC, MLflow, model monitoring, retraining
    infrastructure/        Docker Compose, Kubernetes manifests, Minikube notes, ingress
    monitoring/             Prometheus, Grafana, Alertmanager
    security/               SonarQube, OWASP ZAP, Trivy configs, RBAC policy
    messaging/              RabbitMQ event definitions and JSON schemas
    database/               Per-service MongoDB/Redis ownership notes
    tests/                  unit / integration / api / security / performance / ml
    docs/                   architecture, api, database, microservices, ai-ml, mlops, security, deployment
    .github/workflows/      frontend-ci, service-ci, security-scan, docker-build, ml-training, deployment

## Frontend structure

    frontend/src/
      components/{common,navbar,footer,buttons,cards,charts,ai,forms,modals,loaders}
      layouts/          PublicLayout, PatientLayout, DoctorLayout, AdminLayout
      pages/
        public/          Landing (+ sections/), About, Services, HowItWorksPage, Contact
        auth/            Login, Register, ForgotPassword, VerifyAccount
        patient/         15 pages (Dashboard, SymptomAnalyzer, ... Profile)
        doctor/          11 pages (Dashboard, Appointments, ... Profile)
        admin/           13 pages (Dashboard, Patients, ... Settings)
      services/          apiClient.js + one file per domain (authService, patientService, ...)
      context/           AuthContext
      constants/         routes.js, navigation.js (sidebar items per portal)

The landing page's signature moment — the "AI you can understand" panel
(`components/ai/ExplainableAIPanel.jsx`) — pairs an animated confidence ring
with a SHAP-style contribution chart, echoed in miniature as a hero floating
card.

## Architecture rules this project follows

Frontend → API Gateway only, never a microservice directly. Each service
owns its own MongoDB database. AI inference lives only in `ai-service`,
loaded from the MLflow model registry, never trained in-process. Async
domain events (AppointmentCreated, ModelDriftDetected, etc.) go over
RabbitMQ; everything else is REST through the gateway. See `docs/architecture`
and the inline comments in `services/api-gateway` for the enforced routing.

## Next steps

Follow the phased plan: Auth + API Gateway wiring → Patient/Doctor/Admin
portal logic → Appointment + Queue services → AI Service (Clinical NLP,
disease-risk, SHAP) → Recommendation Service → Notifications/RabbitMQ →
DVC/MLflow → Kubernetes/Minikube → Prometheus/Grafana →
SonarQube/OWASP ZAP/Trivy → cloud deployment.
