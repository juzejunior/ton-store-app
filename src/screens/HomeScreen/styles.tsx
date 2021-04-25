// MARK: React
import { StyleSheet } from "react-native";

// MARK: Resources
import colors from "../../resources/colors";
import dimensions from "../../resources/dimensions";

// MARK: Implementation
const styles = StyleSheet.create({
	scrollView: {
		height: "100%",
		width: "100%",
	},
	contentContainer: {
		width: "100%",
		marginTop: 0.2 * dimensions.window.height,
		justifyContent: "center",
		alignItems: "center",
	},
	counterText: {
		fontSize: dimensions.text.t1,
		color: colors.white,
	},
});

export default styles;
