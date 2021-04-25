// MARK: React
import { Dimensions } from "react-native";

const windowSize = Dimensions.get("window");

const dimensions = {
	window: {
		height: windowSize.height,
		width: windowSize.width,
	},
	text: {
		t1: 45,
		t2: 32,
		t3: 26,
		t4: 18,
		t5: 14,
		t6: 12,
		t7: 8,
		t8: 4
	},
};

export default dimensions;
