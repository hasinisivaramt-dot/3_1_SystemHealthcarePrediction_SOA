"""
Proxies /api/v1/appointments requests to the appointment-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_appointments():
    return {"message": "Proxy stub for appointments — forwards to internal service"}
