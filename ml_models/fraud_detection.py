"""
Stub for fraud detection model. Replace with real model training/loading.
"""
import numpy as np

def predict_fraud(features):
	# ...existing code...
	# features: list or array-like
	X = np.array(features).reshape(1, -1)
	# placeholder: random prediction
	prob = float(np.random.rand())
	return {"fraud_probability": round(prob, 4), "is_fraud": prob > 0.5}