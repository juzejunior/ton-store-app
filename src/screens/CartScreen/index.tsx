// MARK: React
import React from "react";
import { Alert } from 'react-native';
import { connect } from 'react-redux';

// MARK: Stores
import * as CartActions from '../../stores/ducks/cart/actions';
import { ApplicationState } from '../../stores';
import { bindActionCreators, Dispatch } from 'redux';
import { Product } from '../../stores/ducks/cart/types';

// MARK: Components
import { Container, Text, Content, List, ListItem } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import AppBar from "../../components/AppBar";
import CartItem from "../../components/CartItem";

// MARK: Styles
import styles from "./styles";

// MARK: Resources
import strings from "../../resources/strings";

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
			title={product.name}
			price={product.price}
			imageUrl={product.url}
			onDeleteTap={() => {
				confirmDeleteItem(product);	
			}}
		/>
	);

	const confirmDeleteItem = (product: Product) =>
    Alert.alert(
      strings.confirmDeleteItemInCart,
      '',
      [
        {
          text: strings.no,
          style: "cancel"
        },
        { text: strings.yes, onPress: () => props.removeProduct(product) }
      ]
    );

	return (
		<Container>
			<AppBar 
				title={strings.cartScreenTitle} 
				cartEnable={true}
				backButtonEnable={true}
				cartItemCount={props.cartItems.length}
				onBackTap={()=> navigation.goBack()}
			/>
			<Content>
				<ListItem>
              		<Text>
						  {props.cartItems.length === 1 ? 
						  	strings.addedProductsSingle : 
							`${strings.formatString(strings.addedProductsPlural, props.cartItems.length)}`}
					</Text>
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
