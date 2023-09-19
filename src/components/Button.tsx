import React from 'react';

type ButtonProps = {
	character: string;
	handleButtonClick: (value: string) => void;
	cols?: number;
	rows?: number;
	action?: boolean; // Nueva prop action
};

export const Button: React.FC<ButtonProps> = ({
	character,
	handleButtonClick,
	cols,
	rows,
	action = false, // Por defecto, action es false
}: ButtonProps) => {
	const colSpan = cols ? `col-span-${cols}` : '';
	const rowSpan = rows ? `row-span-${rows}` : '';

	// Determinar la clase de color según el valor de action y el modo oscuro
	const colorClass = action
		? 'bg-blue-500 text-white hover:bg-blue-600'
		: 'bg-gray-300 text-gray-800 dark:bg-gray-500 dark:text-white hover:bg-gray-400';

	return (
		<button
			className={`font-semibold py-3 rounded ${colSpan} ${rowSpan} focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 ${colorClass}`}
			onClick={() => handleButtonClick(character)}
		>
			{character}
		</button>
	);
};
