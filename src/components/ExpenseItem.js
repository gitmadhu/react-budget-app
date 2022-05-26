import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<tr>
			<td>
				{props.id} 
			</td>
			<td>
				{props.name} 
			</td>
			<td>
				{props.date}
			</td>	
			<td>
				<div>
					<span class='badge badge-primary badge-pill mr-3'>£{props.cost}</span>
					<TiDelete size='1.5em' onClick={handleDeleteExpense} />
				</div>	
			</td>	
		</tr>
	);
};

export default ExpenseItem;
