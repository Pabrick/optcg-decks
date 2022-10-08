import './App.scss';

import { Route, Router } from 'react-router-dom';
import Home from '../pages/home/home.page';

const App = () => (
	<Router>
		<Route path='/' element={<Home />} />
	</Router>
);

export default App;
