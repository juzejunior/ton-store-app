// MARK: React
import { StyleSheet } from "react-native";

// MARK: Resources
import colors from "../../resources/colors";
import dimensions from "../../resources/dimensions";

// MARK: Implementation
const styles = StyleSheet.create({
	contentContainer: {
		display: 'flex',
		alignItems: 'center',
		height: "100%",
		paddingBottom: 80
	},
	centeredContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"	
	},
});

export default styles;
