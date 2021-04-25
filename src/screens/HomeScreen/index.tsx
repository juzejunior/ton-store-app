// MARK: React
import React from "react";

// MARK: Mobx
import { inject, observer } from "mobx-react";

// MARK: Components
import {
	ScrollView,
	Text,
} from "react-native";

import AppBar from "../../components/AppBar";

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
		<AppBar 
			title={strings.appName} 
			cartEnable={true}
			searchEnable={true}
		/>
		<ScrollView
			style={styles.scrollView}
			contentInsetAdjustmentBehavior="automatic"
		>	
		  <Text>Aqui vai os itens da loja</Text>	
		</ScrollView>
	</>
);

export default inject("countStore")(observer(Home));
