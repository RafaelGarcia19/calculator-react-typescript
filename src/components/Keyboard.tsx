import { Button } from '.';
import { useCalculator } from '../hooks/useCalculator';
import { useTheme } from '../hooks/useTheme';

export const Keyboard = () => {
	const { expression, setExpression, evaluateExpression } = useCalculator();
	const { theme, toggleTheme } = useTheme();

	const handleButtonClick = (value: string) => {
		if (value === '=') {
			return evaluateExpression();
		}

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

	const handleClearButtonClick = () => {
		setExpression('');
	};

	const handleBackspaceButtonClick = () => {
		setExpression((prev) => prev.slice(0, -1));
	};

	return (
		<div className='grid grid-cols-4 gap-2'>
			<Button character='AC' handleButtonClick={handleClearButtonClick} />
			<Button character='C' handleButtonClick={handleBackspaceButtonClick} />
			<Button character={theme} handleButtonClick={() => toggleTheme()} />
			<Button character='/' handleButtonClick={handleButtonClick} />
			<Button character='7' handleButtonClick={handleButtonClick} />
			<Button character='8' handleButtonClick={handleButtonClick} />
			<Button character='9' handleButtonClick={handleButtonClick} />
			<Button character='*' handleButtonClick={handleButtonClick} />
			<Button character='4' handleButtonClick={handleButtonClick} />
			<Button character='5' handleButtonClick={handleButtonClick} />
			<Button character='6' handleButtonClick={handleButtonClick} />
			<Button character='+' handleButtonClick={handleButtonClick} />
			<Button character='1' handleButtonClick={handleButtonClick} />
			<Button character='2' handleButtonClick={handleButtonClick} />
			<Button character='3' handleButtonClick={handleButtonClick} />
			<Button character='-' handleButtonClick={handleButtonClick} />
			<Button character='0' handleButtonClick={handleButtonClick} />
			<Button character='.' handleButtonClick={handleButtonClick} />
			<Button character='H' handleButtonClick={handleButtonClick} />
			<Button
				character='='
				handleButtonClick={() => evaluateExpression()}
				action
			/>
		</div>
	);
};
