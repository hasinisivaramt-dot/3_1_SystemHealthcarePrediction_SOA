"""
Proxies /api/v1/notifications requests to the notification-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_notifications():
    return {"message": "Proxy stub for notifications — forwards to internal service"}
