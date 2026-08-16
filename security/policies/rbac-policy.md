# RBAC Policy
Roles: patient, doctor, admin, ml_engineer.
Each role is scoped to its own API Gateway routes; enforced via JWT claims
checked in the gateway's authentication middleware.
