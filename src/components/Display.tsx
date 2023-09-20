import { useState } from 'react';
import { useCalculator } from '../hooks/useCalculator';

export const Display = () => {
	const { expression, history } = useCalculator();
	const [showHistory, setShowHistory] = useState(false);

	const toggleHistory = () => {
		setShowHistory(!showHistory);
	};

	return (
		<div className='font-bold mb-4 ring-2 rounded-lg ring-gray-400 p-4 text-right min-h-[4rem] flex-col'>
			<div className='flex justify-end text-sm'>
				<button
					className='text-gray-400 hover:text-gray-600'
					onClick={toggleHistory}
				>
					{showHistory ? 'Hide' : 'History'}
				</button>
			</div>
			{showHistory && (
				<div className='text-right text-md'>
					{history.map((item, index) => (
						<div key={index}>
							{item.expression} = {item.result}
						</div>
					))}
					<hr />
				</div>
			)}
			<div className='text-3xl'>{expression}</div>
		</div>
	);
};
