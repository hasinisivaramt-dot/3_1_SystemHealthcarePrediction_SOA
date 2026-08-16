"""
queue-service
Owns its own MongoDB database (queue_service_db) and exposes
a REST API consumed only through the API Gateway.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Healix queue-service",
    description="Part of the Healix microservices platform.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok", "service": "queue-service"}


@app.get("/")
def root():
    return {"service": "queue-service", "message": "Healix queue service"}
