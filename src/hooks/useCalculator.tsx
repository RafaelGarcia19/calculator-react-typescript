import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

export const useCalculator = () => {
	const context = useContext(CalculatorContext);
	if (context === undefined) {
		throw new Error(
			'useCalculator debe ser utilizado dentro de un CalculatorProvider',
		);
	}

	return context;
};
