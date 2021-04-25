// MARK: React
import { StyleSheet } from "react-native";

// MARK: Resources
import colors from "../../resources/colors";
import dimensions from "../../resources/dimensions";

// MARK: Implementation
const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: colors.primary,
	},
	image: {
	  height: 200,
	  flex: 1
	},
	card: {
      width: 190		
	}
});

export default styles;
