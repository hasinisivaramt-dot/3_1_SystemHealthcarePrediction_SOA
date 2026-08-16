"""
Proxies /api/v1/queue requests to the queue-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_queue():
    return {"message": "Proxy stub for queue — forwards to internal service"}
