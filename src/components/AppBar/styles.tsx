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
	cartBadge: {
	  position: 'absolute',
	  zIndex: 1,
	  height: 16,
	  width: 16,
	  marginLeft: 12,
	  paddingRight: 0,
	  paddingLeft: 0
	},
	badgeText: {
	  fontSize: dimensions.text.t7
	}
});

export default styles;
