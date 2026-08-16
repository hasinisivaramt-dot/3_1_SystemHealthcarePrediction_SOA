"""
Proxies /api/v1/doctors requests to the doctor-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_doctors():
    return {"message": "Proxy stub for doctors — forwards to internal service"}
