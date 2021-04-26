// MARK: React
import React from "react";
import { connect } from 'react-redux';

// MARK: Stores
import * as CartActions from '../../stores/ducks/cart/actions';
import { ApplicationState } from '../../stores';
import { bindActionCreators, Dispatch } from 'redux';
import { Product } from '../../stores/ducks/cart/types';

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

interface StateProps {
	cartItems: Product[]
}
  
interface DispatchProps {
  removeProduct(product: Product): void	
}
  
type Props = StateProps & DispatchProps

const Cart = (props : Props) => {
	const navigation = useNavigation();

	const _renderCartItem = (product: Product) => (
		<CartItem 
		    key={product.id}
			title="ahora"
			onDeleteTap={() => {
				props.removeProduct(product);	
			}}
		/>
	);

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
              		<Text>{props.cartItems.length === 1 ? strings.addedProductsSingle : `${strings.formatString(strings.addedProductsPlural, props.cartItems.length)}`}</Text>
           		</ListItem>   	
				<List>
					{
					  props.cartItems.map((item) => {
						 return(
							_renderCartItem(item) 
						 ) 
					  })	
					}
				</List>		
			</Content>
		</Container>
	);
}; 

const mapStateToProps = (state: ApplicationState) => ({
	cartItems: state.cart.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>  
	bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
