"""
Retraining pipeline: triggered by a drift/bias alert or a schedule.
Pulls fresh data via DVC, retrains, evaluates against the current
production model, and only promotes on improvement.
"""


def run_retraining_pipeline():
    raise NotImplementedError("Wire this to DVC + MLflow once data is available")
