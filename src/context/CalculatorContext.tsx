import { createContext, useState } from 'react';

type CalculatorContextType = {
	expression: string;
	setExpression: React.Dispatch<React.SetStateAction<string>>;
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

	return (
		<CalculatorContext.Provider
			value={{ expression, setExpression, theme, setTheme }}
		>
			{children}
		</CalculatorContext.Provider>
	);
};
