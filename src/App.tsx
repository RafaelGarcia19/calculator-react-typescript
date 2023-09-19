import { Display, Keyboard } from './components';
import { CalculatorProvider } from './context/CalculatorContext';

const App: React.FC = () => {
	return (
		<CalculatorProvider>
			<div className='min-h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800'>
				<div className='bg-white p-4 rounded-lg shadow-xl container lg:max-w-[80%] dark:bg-gray-700 dark:text-white'>
					<Display />
					<Keyboard />
				</div>
			</div>
		</CalculatorProvider>
	);
};

export default App;
