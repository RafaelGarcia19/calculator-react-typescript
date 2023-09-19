import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

export const useTheme = () => {
	const context = useContext(CalculatorContext);
	if (context === undefined) {
		throw new Error(
			'useTheme debe ser utilizado dentro de un CalculatorProvider',
		);
	}
	const { setTheme, theme } = context;

	const toggleTheme = () => {
		setTheme((prev) => {
			if (prev === 'light') return 'dark';
			if (prev === 'dark') return 'system';
			if (prev === 'system') return 'light';
			return prev;
		});
	};
	return { toggleTheme, theme };
};
