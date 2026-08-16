"""
Proxies /api/v1/patients requests to the patient-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_patients():
    return {"message": "Proxy stub for patients — forwards to internal service"}
