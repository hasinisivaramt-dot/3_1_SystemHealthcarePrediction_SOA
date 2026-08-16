"""
patient-service
Owns its own MongoDB database (patient_service_db) and exposes
a REST API consumed only through the API Gateway.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Healix patient-service",
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
    return {"status": "ok", "service": "patient-service"}


@app.get("/")
def root():
    return {"service": "patient-service", "message": "Healix patient service"}
