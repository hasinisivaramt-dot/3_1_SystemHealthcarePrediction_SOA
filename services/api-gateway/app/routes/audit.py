"""
Proxies /api/v1/audit requests to the audit-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_audit():
    return {"message": "Proxy stub for audit — forwards to internal service"}
