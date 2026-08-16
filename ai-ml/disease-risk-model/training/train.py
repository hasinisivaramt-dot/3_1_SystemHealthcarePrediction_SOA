"""
Trains the primary disease-risk model (XGBoost) with Random Forest and
Logistic Regression as baselines. Never imported by a running service —
production inference only happens in services/ai-service via the model
registry (see mlops/mlflow/registry).
"""
