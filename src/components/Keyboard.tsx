import { Button, ThemeButton } from '.';
import { useCalculator } from '../hooks/useCalculator';

export const Keyboard = () => {
	const {
		handleButton,
		backspaceExpression,
		clearExpression,
		evaluateExpression,
		clearHistory,
	} = useCalculator();

	const handleButtonClick = (value: string) => {
		handleButton(value);
	};

	const handleClearButtonClick = () => {
		clearExpression();
	};

	const handleBackspaceButtonClick = () => {
		backspaceExpression();
	};

	return (
		<div className='grid grid-cols-4 gap-2'>
			<Button character='AC' handleButtonClick={handleClearButtonClick} />
			<Button character='C' handleButtonClick={handleBackspaceButtonClick} />
			<ThemeButton />
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
			<Button character='ACH' handleButtonClick={() => clearHistory()} />
			<Button
				character='='
				handleButtonClick={() => evaluateExpression()}
				action
			/>
		</div>
	);
};
