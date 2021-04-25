// MARK: React
import React from "react";

// MARK: Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// MARK: Stores
import RootStore from "../stores/_RootStoreProvider";

// MARK: Screens
import HomeScreen from "../screens/HomeScreen";

// MARK: Implementation
const Stack = createStackNavigator();

const App = () => (
	<RootStore>
		<NavigationContainer>
			<Stack.Navigator
				headerMode="none"
			>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	</RootStore>
);

export default App;
