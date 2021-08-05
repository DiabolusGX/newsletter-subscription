import { useState } from 'react';

import Form from './components/Form';
import Buttons from './components/Buttons';
import Subscriptions from './components/Subscriptions';

function App() {
	const [form, setForm] = useState(true);

	const onNewClick = () => setForm(true);
	const onListClick = () => setForm(false);

	return (
		<div className="flex w-full min-h-screen justify-center items-center">
			<div className="flex justify-between items-center flex-row bg-cyan-700 w-full max-w-6xl p-16 rounded-xl shadow-lg text-white">
				<Buttons onNewClick={onNewClick} onListClick={onListClick} />
				{form ? <Form /> : <Subscriptions />}
			</div>
		</div>
	);
}

export default App;
