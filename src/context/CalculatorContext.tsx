import { createContext, useEffect, useState } from 'react';

type CalculatorContextType = {
	expression: string;
	setExpression: React.Dispatch<React.SetStateAction<string>>;
	evaluateExpression: () => void;
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

type Theme = 'light' | 'dark' | 'system';

export const CalculatorContext = createContext<
	CalculatorContextType | undefined
>(undefined);

export const CalculatorProvider: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [expression, setExpression] = useState<string>('');
	const [theme, setTheme] = useState<Theme>('system');

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

	useEffect(() => {
		switch (theme) {
			case 'light':
				document.querySelector('html')?.classList.remove('dark');
				console.log('light');

				break;
			case 'dark':
				document.querySelector('html')?.classList.add('dark');
				console.log('dark');
				break;
			case 'system':
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.querySelector('html')?.classList.add('dark');
					console.log('system dark');
					break;
				}
				document.querySelector('html')?.classList.remove('dark');
				console.log('system light');
				break;
		}
	}, [theme]);

	return (
		<CalculatorContext.Provider
			value={{ expression, setExpression, evaluateExpression, theme, setTheme }}
		>
			{children}
		</CalculatorContext.Provider>
	);
};
