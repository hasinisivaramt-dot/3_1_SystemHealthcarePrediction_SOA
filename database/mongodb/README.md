# MongoDB — database-per-service
Each service owns one logical database: auth_db, patient_db, doctor_db,
hospital_db, appointment_db, medical_record_db, ai_db, recommendation_db,
notification_db, audit_db. No service queries another service's
collections directly — cross-service reads go through that service's API.
