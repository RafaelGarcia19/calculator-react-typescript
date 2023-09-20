import { useContext, useEffect } from 'react';
import { evaluate } from 'mathjs';
import { CalculatorContext } from '../context/CalculatorContext';

export const useCalculator = () => {
	const context = useContext(CalculatorContext);
	if (context === undefined) {
		throw new Error(
			'useCalculator debe ser utilizado dentro de un CalculatorProvider',
		);
	}

	const { setExpression, expression } = context;

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			const key = event.key;
			const validKeys = /[0-9+\-*/.=]|Backspace|Delete|Enter|Escape/;
			if (key.match(validKeys)) {
				event.preventDefault();

				switch (key) {
					case '=':
					case 'Enter':
						evaluateExpression();
						break;
					case 'Escape':
						clearExpression();
						break;
					case 'Backspace':
					case 'Delete':
						backspaceExpression();
						break;
					default:
						handleButton(key);
						break;
				}
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [expression]);

	const evaluateExpression = () => {
		try {
			const result = evaluate(expression);
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

		if (value === '.') {
			if (!/\d+\.\d*$/.test(lastCharacter)) {
				setExpression((prev) => prev + value);
			}
			return;
		}

		if (operators.includes(lastCharacter) && operators.includes(value)) {
			setExpression((prev) => prev.slice(0, -1) + value);
			return;
		}

		if (operators.includes(lastCharacter) && value === lastCharacter) {
			return;
		}

		setExpression((prev) => {
			if (['Error', 'Infinity', 'NaN'].includes(prev)) {
				return value;
			}
			return prev + value;
		});
	};

	return {
		expression,
		evaluateExpression,
		clearExpression,
		backspaceExpression,
		handleButton,
	};
};
