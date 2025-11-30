import React, { useState } from "react";

function HealthForm() {
	const [form, setForm] = useState({income: "", fixed_expenses: "", variable_expenses: "", savings: ""});
	const [result, setResult] = useState(null);

	const submit = async (e) => {
		e.preventDefault();
		const res = await fetch("/api/calculate", {
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(form)
		});
		const data = await res.json();
		setResult(data);
	};

	return (
		<div>
			<form onSubmit={submit}>
				<input placeholder="Income" value={form.income} onChange={e=>setForm({...form, income:e.target.value})} />
				<input placeholder="Fixed expenses" value={form.fixed_expenses} onChange={e=>setForm({...form, fixed_expenses:e.target.value})} />
				<input placeholder="Variable expenses" value={form.variable_expenses} onChange={e=>setForm({...form, variable_expenses:e.target.value})} />
				<input placeholder="Savings" value={form.savings} onChange={e=>setForm({...form, savings:e.target.value})} />
				<button type="submit">Calculate</button>
			</form>
			{result && <pre>{JSON.stringify(result, null, 2)}</pre>}
		</div>
	);
}

export default HealthForm;