import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom'

import Rules from "./pages/Rules.js"

const Home = () => {
	return (
		<div>
			<Link to="/rules">Rules</Link>
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
			</Routes>
		</Router>
	</React.StrictMode>
);

