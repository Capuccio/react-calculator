import React from "react";
import "./App.sass";

import Entry from "./components/Entry";
import Buttons from "./components/Buttons";

const App = () => {
	return (
		<div className="background">
			<div className="container">
				<Entry />
				<Buttons />
			</div>
		</div>
	);
};

export default App;
