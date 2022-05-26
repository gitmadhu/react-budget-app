import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value) || 
			filteredExpense.id.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<table class="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Expense</th>
					<th scope="col">Date </th>
					<th scope="col">Amount</th>
					</tr>
				</thead>
				<tbody>
						{filteredExpenses.map((expense) => (
							<ExpenseItem
								id={expense.id}
								name={expense.name}
								cost={expense.cost}
								date={expense.date}
							/>
						))}
				</tbody>
			</table>	
			
		</>
	);
};

export default ExpenseList;
