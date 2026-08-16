"""
Proxies /api/v1/auth requests to the auth-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_auth():
    return {"message": "Proxy stub for auth — forwards to internal service"}
