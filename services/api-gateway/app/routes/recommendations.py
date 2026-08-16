"""
Proxies /api/v1/recommendations requests to the recommendation-service.
Replace the stub below with httpx calls to the internal service URL
(e.g. via app/service_registry) once services are running.
"""
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_recommendations():
    return {"message": "Proxy stub for recommendations — forwards to internal service"}
