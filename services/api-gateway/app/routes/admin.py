"""
Proxies /api/v1/admin requests to the admin-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_admin():
    return {"message": "Proxy stub for admin — forwards to internal service"}
