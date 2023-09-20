import { createContext, useState } from 'react';

type CalculatorContextType = {
	expression: string;
	setExpression: React.Dispatch<React.SetStateAction<string>>;
	theme: Theme;
	setTheme: React.Dispatch<React.SetStateAction<Theme>>;
	history: Array<History>;
	setHistory: React.Dispatch<React.SetStateAction<Array<History>>>;
};

type Theme = 'light' | 'dark' | 'system';
type History = {
	expression: string;
	result: number;
};

export const CalculatorContext = createContext<
	CalculatorContextType | undefined
>(undefined);

export const CalculatorProvider: React.FC<React.PropsWithChildren<unknown>> = ({
	children,
}) => {
	const [expression, setExpression] = useState<string>('');
	const [theme, setTheme] = useState<Theme>('system');
	const [history, setHistory] = useState<Array<History>>([]);

	return (
		<CalculatorContext.Provider
			value={{
				expression,
				setExpression,
				theme,
				setTheme,
				history,
				setHistory,
			}}
		>
			{children}
		</CalculatorContext.Provider>
	);
};
