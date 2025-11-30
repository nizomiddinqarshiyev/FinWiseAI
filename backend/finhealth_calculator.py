"""
Minimal finhealth calculator stubs.
"""
def calculate_budget(income: float, fixed_expenses: float, variable_expenses: float) -> dict:
	"""
	Calculate budget based on income and expenses.
	"""
	if income <= 0:
		return {"error": "income must be > 0"}
	disposable = income - fixed_expenses - variable_expenses
	return {
		"income": income,
		"fixed_expenses": fixed_expenses,
		"variable_expenses": variable_expenses,
		"disposable": disposable
	}

def savings_rate(income: float, savings: float) -> float:
	"""
	Calculate savings rate.
	"""
	if income <= 0:
		return 0.0
	return round((savings / income) * 100, 2)

def financial_health_score(income: float, expenses: float, savings: float) -> int:
	"""
	Calculate financial health score.
	"""
	# Simple heuristic: higher savings and lower expenses -> higher score (0-100)
	if income <= 0:
		return 0
	rate = savings_rate(income, savings)
	expense_ratio = min(1.0, expenses / income)
	score = max(0, min(100, int(rate * 0.6 + (1 - expense_ratio) * 40)))
	return score