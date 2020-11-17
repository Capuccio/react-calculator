import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import entry from "./reducers/entry";

const store = createStore(entry);

import App from "./App";

const rootNode = document.getElementById("root");
ReactDOM.render(
	<Provider store={store}>
		<App />,
	</Provider>,
	rootNode
);
