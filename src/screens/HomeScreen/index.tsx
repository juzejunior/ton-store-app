// MARK: React
import React, { useEffect } from "react";
import { connect } from 'react-redux';
// MARK: Components
import {
	FlatList,
	SafeAreaView,
	View
} from "react-native";

import AppBar from "../../components/AppBar";
import ProductItem from "../../components/ProductItem";

import { useNavigation } from '@react-navigation/native';

// MARK: Stores
import { Product } from '../../stores/ducks/products/types';
import * as ProductsActions from '../../stores/ducks/products/actions';
import * as CartActions from '../../stores/ducks/cart/actions';
import { ApplicationState } from '../../stores';
import { bindActionCreators, Dispatch } from 'redux';

// MARK: Styles
import styles from "./styles";

// MARK: Resources
import strings from "../../resources/strings";

import { Container } from 'native-base';

interface StateProps {
  products: Product[]
  loading: Boolean
  cartItems: Product[]
}

interface DispatchProps {
  loadRequest(): void
  addProduct(product: Product): void
  removeProduct(product: Product): void	
}

type Props = StateProps & DispatchProps


/*
*/
// MARK: Implementation
const Home = (props : Props) => {
   const { navigate } = useNavigation();

   const _renderProductItem = (product: Product) => (
		<View style={styles.productItem}>
			<ProductItem 
				description="ahora"
				price={300}
				onAddTap={() => props.addProduct(product)}
				onRemoveTap={() => props.removeProduct(product)}
				isInCart={props.cartItems.some(item => item.id === product.id)}
			/>
		</View>
   );
   
   useEffect(() => {
	props.loadRequest();
   }, []);		

   return (
	<Container>
		<AppBar 
			title={strings.appName} 
			cartEnable={true}
			cartItemCount={props.cartItems.length}
			onCartTap={() => {
				navigate('Cart');
			}}
		/>
		{
		   !props.loading && props.products.length > 0 &&
		   	<SafeAreaView style={ styles.contentContainer }>
		   		<FlatList
			   		style={{paddingTop: 20, paddingBottom: 20}}		
			   		data={props.products}
			   		renderItem={renderItem => _renderProductItem(renderItem.item)}
			   		numColumns={2}
			   		keyExtractor={item => item.id}
			   		showsVerticalScrollIndicator={false}
			   		showsHorizontalScrollIndicator={false}
		   		/> 
	   		</SafeAreaView>	
		}
	</Container>
   );
};

const mapStateToProps = (state: ApplicationState) => ({
	products: state.products.data,
	loading: state.products.loading,
	error: state.products.error,
	cartItems: state.cart.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>  
bindActionCreators(Object.assign({}, ProductsActions, CartActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
