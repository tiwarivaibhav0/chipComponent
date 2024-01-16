import React from "react";
import Chip from "./components/Chip";
import "./App.css";
import Nav from "./components/Navbar";
const App: React.FC = () => {
	return (
		<>
			<Nav userName="Vaibhav Tiwari" />
			<div className="App">
				<Chip />
			</div>
		</>
	);
};

export default App;
