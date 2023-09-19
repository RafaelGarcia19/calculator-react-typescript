import { useContext } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

export const useCalculator = () => {
	const context = useContext(CalculatorContext);
	if (context === undefined) {
		throw new Error(
			'useCalculator debe ser utilizado dentro de un CalculatorProvider',
		);
	}

	const { setExpression, expression } = context;

	const evaluateExpression = () => {
		try {
			const result = eval(expression);
			if (typeof result === 'number') {
				setExpression(result.toString());
			} else {
				setExpression('Error');
			}
		} catch (error) {
			setExpression('Error');
		}
	};

	const clearExpression = () => {
		setExpression('');
	};

	const backspaceExpression = () => {
		setExpression((prev) => prev.slice(0, -1));
	};

	const handleButton = (value: string) => {
		const operators = ['/', '*', '-', '+'];
		const lastCharacter = expression.slice(-1);

		// Validación para el punto decimal
		if (value === '.') {
			// Utilizar expresión regular para verificar si ya existe un punto en el número actual
			if (!/\d+\.\d*$/.test(lastCharacter)) {
				setExpression((prev) => prev + value);
			}
		} else {
			// Validación para operadores
			if (operators.includes(lastCharacter) && operators.includes(value)) {
				return;
			}

			// Validación para evitar múltiples operadores seguidos
			if (operators.includes(lastCharacter) && value === lastCharacter) {
				return;
			}

			setExpression((prev) => {
				if (['Error', 'Infinity', 'NaN'].includes(prev)) {
					return value;
				}
				return prev + value;
			});
		}
	};

	return {
		expression,
		evaluateExpression,
		clearExpression,
		backspaceExpression,
		handleButton,
	};
};
