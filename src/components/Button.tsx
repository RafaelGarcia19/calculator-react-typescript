import React from 'react';

type ButtonProps = {
	character: string;
	handleButtonClick: (value: string) => void;
	cols?: number;
	rows?: number;
	action?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
	character,
	handleButtonClick,
	cols,
	rows,
	action = false,
}: ButtonProps) => {
	const colSpan = cols ? `col-span-${cols}` : '';
	const rowSpan = rows ? `row-span-${rows}` : '';

	const colorClass = action
		? 'bg-blue-500 text-white hover:bg-blue-600'
		: 'bg-gray-300 text-gray-800 dark:bg-gray-500 dark:text-white hover:bg-gray-400';

	const buttonClasses = `font-semibold py-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 ${colSpan} ${colorClass} ${rowSpan}`;

	return (
		<button
			className={buttonClasses}
			onClick={() => handleButtonClick(character)}
		>
			{character}
		</button>
	);
};
