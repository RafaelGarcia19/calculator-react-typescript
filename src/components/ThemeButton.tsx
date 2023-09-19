import { useTheme } from '../hooks';
import { MdComputer, MdSunny, MdNightlightRound } from 'react-icons/md';

export const ThemeButton = () => {
	const { theme, toggleTheme } = useTheme();

	const icon =
		theme === 'light' ? (
			<MdSunny />
		) : theme === 'dark' ? (
			<MdNightlightRound />
		) : (
			<MdComputer />
		);
	return (
		<button
			className='flex items-center justify-center font-semibold py-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 bg-gray-300 text-gray-800 dark:bg-gray-500 dark:text-white hover:bg-gray-400'
			onClick={() => toggleTheme()}
		>
			<span className='inline-flex items-center justify-center'>{icon}</span>
		</button>
	);
};
