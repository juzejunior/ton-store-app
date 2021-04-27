// MARK: React
import { Text, TextInput } from "react-native";

// MARK: Navigation
import Routes from "./routes";
import "react-native-gesture-handler";

// MARK: Implamentation
// Disable font autoscale
try {
	(Text as any).defaultProps = (Text as any).defaultProps || {};
	(Text as any).defaultProps.allowFontScaling = false;

	(TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
	(TextInput as any).defaultProps.allowFontScaling = false;
} catch (e) {
	// eslint-disable-next-line no-console
	console.error(e);
}

export default Routes;
