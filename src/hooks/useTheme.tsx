import { useContext, useEffect } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';

export const useTheme = () => {
	const context = useContext(CalculatorContext);
	if (context === undefined) {
		throw new Error(
			'useTheme debe ser utilizado dentro de un CalculatorProvider',
		);
	}
	const { setTheme, theme } = context;

	useEffect(() => {
		switch (theme) {
			case 'light':
				document.querySelector('html')?.classList.remove('dark');
				break;
			case 'dark':
				document.querySelector('html')?.classList.add('dark');
				break;
			case 'system':
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					document.querySelector('html')?.classList.add('dark');
					break;
				}
				document.querySelector('html')?.classList.remove('dark');
				break;
		}
	}, [theme]);

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
