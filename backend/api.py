from flask import Flask, request, jsonify
from finhealth_calculator import calculate_budget, savings_rate, financial_health_score

app = Flask(__name__)

@app.route("/health", methods=["GET"])
def health():
	return jsonify({"status": "ok"})

@app.route("/api/calculate", methods=["POST"])
def calculate():
	data = request.get_json() or {}
	income = float(data.get("income", 0))
	fixed = float(data.get("fixed_expenses", 0))
	variable = float(data.get("variable_expenses", 0))
	savings = float(data.get("savings", 0))
	res = calculate_budget(income, fixed, variable)
	rate = savings_rate(income, savings)
	score = financial_health_score(income, fixed + variable, savings)
	return jsonify({
		"budget": res,
		"savings_rate": rate,
		"financial_health_score": score
	})

if __name__ == "__main__":
	app.run(host="0.0.0.0", port=5000, debug=True)