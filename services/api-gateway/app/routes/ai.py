"""
Proxies /api/v1/ai requests to the ai-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_ai():
    return {"message": "Proxy stub for ai — forwards to internal service"}
