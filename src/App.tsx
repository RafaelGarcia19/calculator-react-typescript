import { Button } from './components';

const handleButtonClick = (value: string) => {
	console.log(value);
};

const App: React.FC = () => {
	return (
		<div className='min-h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-800'>
			<div className='bg-white p-4 rounded-lg shadow-xl container lg:max-w-[80%] dark:bg-gray-700 dark:text-white'>
				<div className='text-3xl font-bold mb-4 ring-2 rounded-lg ring-gray-400 p-4 text-right min-h-[4rem]'>
					Display
				</div>
				<div className='grid grid-cols-4 gap-2'>
					<Button character='AC' handleButtonClick={handleButtonClick} />
					<Button character='C' handleButtonClick={handleButtonClick} />
					<Button character='H' handleButtonClick={handleButtonClick} />
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
					<Button
						character='='
						handleButtonClick={handleButtonClick}
						cols={2}
						action
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
