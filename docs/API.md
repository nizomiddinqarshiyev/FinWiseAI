# API

GET /health
- returns {"status":"ok"}

POST /api/calculate
- body: { income, fixed_expenses, variable_expenses, savings }
- returns: { budget: {...}, savings_rate: number, financial_health_score: number }
