"""
Healix API Gateway
Single entry point for the frontend. Handles routing, auth verification,
rate limiting and request validation before proxying to internal services.
Frontend must never call microservices directly (see architecture rule 1/2).
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import (
    auth,
    patients,
    doctors,
    hospitals,
    appointments,
    medical_records,
    ai,
    recommendations,
    queue,
    notifications,
    admin,
    audit,
)

app = FastAPI(title="Healix API Gateway", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(patients.router, prefix="/api/v1/patients", tags=["patients"])
app.include_router(doctors.router, prefix="/api/v1/doctors", tags=["doctors"])
app.include_router(hospitals.router, prefix="/api/v1/hospitals", tags=["hospitals"])
app.include_router(appointments.router, prefix="/api/v1/appointments", tags=["appointments"])
app.include_router(medical_records.router, prefix="/api/v1/medical-records", tags=["medical-records"])
app.include_router(ai.router, prefix="/api/v1/ai", tags=["ai"])
app.include_router(recommendations.router, prefix="/api/v1/recommendations", tags=["recommendations"])
app.include_router(queue.router, prefix="/api/v1/queue", tags=["queue"])
app.include_router(notifications.router, prefix="/api/v1/notifications", tags=["notifications"])
app.include_router(admin.router, prefix="/api/v1/admin", tags=["admin"])
app.include_router(audit.router, prefix="/api/v1/audit", tags=["audit"])


@app.get("/health")
def health():
    return {"status": "ok", "service": "api-gateway"}
