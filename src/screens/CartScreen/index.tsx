// MARK: React
import React from "react";

// MARK: Components
import { FlatList, SafeAreaView } from 'react-native';
import { Container, Button, Icon, Text, Content, List, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import AppBar from "../../components/AppBar";
import CartItem from "../../components/CartItem";

// MARK: Styles
import styles from "./styles";

// MARK: Resources
import strings from "../../resources/strings";

const DATA = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  title: 'First Item',
	},
	{
	  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
	  title: 'Second Item',
	},
];

const _renderCartItem = () => (
	<CartItem 
		title="ahora"
		onDeleteTap={() => {}}
	/>
);

const Cart = () => {
	const navigation = useNavigation();
	return (
		<Container>
			<AppBar 
				title={strings.cartScreenTitle} 
				cartEnable={true}
				backButtonEnable={true}
				onBackTap={()=> navigation.goBack()}
			/>
			<Content>
				<ListItem>
              		<Text>2 Produtos Adicionados</Text>
           		</ListItem>   	
				<List>
					{
					  DATA.map((item) => {
						 return(
							_renderCartItem() 
						 ) 
					  })	
					}
				</List>		
			</Content>
		</Container>
	);
}; 

export default Cart;
