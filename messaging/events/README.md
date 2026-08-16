# Domain Events
UserRegistered, DoctorApproved, AppointmentCreated, AppointmentCancelled,
AppointmentCompleted, PredictionGenerated, ReportUploaded,
PrescriptionCreated, QueueUpdated, ModelDriftDetected.

Published to RabbitMQ by the owning service, consumed by any service that
needs to react (e.g. notification-service listens to AppointmentCreated).
