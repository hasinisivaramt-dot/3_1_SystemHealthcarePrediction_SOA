"""
Proxies /api/v1/hospitals requests to the hospital-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_hospitals():
    return {"message": "Proxy stub for hospitals — forwards to internal service"}
