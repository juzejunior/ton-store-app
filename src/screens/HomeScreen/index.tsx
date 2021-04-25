// MARK: React
import React from "react";

// MARK: Mobx
import { inject, observer } from "mobx-react";

// MARK: Components
import {
	FlatList,
	SafeAreaView,
	View
} from "react-native";

import AppBar from "../../components/AppBar";
import ProductItem from "../../components/ProductItem";

// MARK: Stores
import CountStore from "../../stores/CountStore";

// MARK: Styles
import styles from "./styles";

// MARK: Resources
import strings from "../../resources/strings";

import { Container } from 'native-base';


const DATA = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  title: 'First Item',
	},
	{
	  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
	  title: 'Second Item',
	},
	{
	  id: '58694a0f-3da1-471f-bd96-145571e29d72',
	  title: 'Third Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item1',
	  },
	  {
		id: '58694a0f-3da1-471f-bd96-145571e29d726',
		title: 'Third Item2',
	  },
	  {
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f634',
		title: 'Second Item3',
	  },
	  {
		id: '58694a0f-3da1-471f-bd96-145571e29d7267',
		title: 'Third Item5',
	  },  
];


const renderProductItem = () => (
	<View style={styles.productItem}>
		<ProductItem 
			title="ahora"
			price={300}
			onTap={() => {}}
		/>
	</View>
);

/*
*/
// MARK: Implementation
const Home = () => (
	<Container>
		<AppBar 
			title={strings.appName} 
			cartEnable={true}
			searchEnable={true}
		/>
		<SafeAreaView style={ styles.contentContainer }>
			<FlatList
			    style={{paddingTop: 20, paddingBottom: 20}}		
                data={DATA}
                renderItem={renderProductItem}
                numColumns={2}
				keyExtractor={item => item.id}
				showsVerticalScrollIndicator={false}
  				showsHorizontalScrollIndicator={false}
            /> 
		</SafeAreaView>	
	</Container>
);


export default Home;
