import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom'

import Rules from "./pages/Rules.js"
import Pay from "./components/Pay/Pay.jsx"

const Home = () => {
	return (
		<div>
			<Link to="/rules">Rules</Link>
			<Link to="/pay">Pay</Link>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/rules" element={<Rules />}/>
				<Route path="/pay" element={<Pay />}></Route>
			</Routes>
		</Router>
	</React.StrictMode>
);

