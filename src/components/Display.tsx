import { useCalculator } from '../hooks/useCalculator';

export const Display = () => {
	const { expression } = useCalculator();
	return (
		<div className='text-3xl font-bold mb-4 ring-2 rounded-lg ring-gray-400 p-4 text-right min-h-[4rem]'>
			{expression}
		</div>
	);
};
