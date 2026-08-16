"""
Proxies /api/v1/medical-records requests to the medical-record-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_medical_records():
    return {"message": "Proxy stub for medical-records — forwards to internal service"}
