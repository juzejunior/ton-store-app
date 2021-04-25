// MARK: React
import React from "react";

// MARK: Mobx
import { Provider } from "mobx-react";

// MARK: Stores
import { countStore } from "./CountStore";

// MARK: Implementation
const RootStoreProvider: React.FunctionComponent = ({ children }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Provider {...{ countStore }}>
		{children}
	</Provider>
);

export default RootStoreProvider;
