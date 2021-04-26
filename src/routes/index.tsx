// MARK: React
import React from "react";

// MARK: Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// MARK: Stores
import { Provider } from 'react-redux';
import store from '../stores';

// MARK: Screens
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";

// MARK: Implementation
const Stack = createStackNavigator();

const App = () => (
	<Provider store={store}>
		<NavigationContainer>
			<Stack.Navigator
				headerMode="none"
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>
				<Stack.Screen
					name="Cart"
					component={CartScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</Provider>
);

export default App;
