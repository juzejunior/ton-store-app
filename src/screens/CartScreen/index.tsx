// MARK: React
import React from "react";

// MARK: Mobx
import { inject, observer } from "mobx-react";

// MARK: Components
import {
	Button,
	ScrollView,
	StatusBar,
	Text,
	View,
} from "react-native";

// MARK: Stores
import CountStore from "../../stores/CountStore";

// MARK: Styles
import styles from "./styles";

// MARK: Resources
import strings from "../../resources/strings";

// MARK: Icons
import StartAppLogo from "../../assets/startapp-logo.svg";

// MARK: Implementation
interface IProps {
	countStore: CountStore;
}

const Home = ({ countStore }: IProps) => (
	<>
		<StatusBar barStyle="light-content" />
		<ScrollView
			style={styles.scrollView}
			contentInsetAdjustmentBehavior="automatic"
		>
			<View style={styles.contentContainer}>
				<StartAppLogo width={300} height={300} />
				<Text style={styles.counterText}>
					{countStore.count}
				</Text>
				<Button
					title={strings.count}
					onPress={countStore.incrementCount}
				/>
			</View>
		</ScrollView>
	</>
);

export default inject("countStore")(observer(Home));
