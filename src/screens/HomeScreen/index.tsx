// MARK: React
import React, { useEffect } from "react";
import { connect } from 'react-redux';
// MARK: Components
import {
	FlatList,
	SafeAreaView,
	View,
	Alert,
	ActivityIndicator
} from "react-native";

import AppBar from "../../components/AppBar";
import ProductItem from "../../components/ProductItem";

import Toast from 'react-native-toast-message';

import { useNavigation } from '@react-navigation/native';

// MARK: Stores
import { Product } from '../../stores/ducks/products/types';
import * as ProductsActions from '../../stores/ducks/products/actions';
import * as CartActions from '../../stores/ducks/cart/actions';
import * as AppAnalyticsActions from '../../stores/ducks/appAnalytics/actions';
import { ApplicationState } from '../../stores';
import { bindActionCreators, Dispatch } from 'redux';

// MARK: Styles
import styles from "./styles";

// MARK: Resources
import strings from "../../resources/strings";

import { Container, Icon, Text } from 'native-base';
import colors from "../../resources/colors";

interface StateProps {
  products: Product[]
  loading: Boolean
  error: Boolean
  cartItems: Product[]
}

interface DispatchProps {
  loadRequest(): void
  addProduct(product: Product): void
  removeProduct(product: Product): void
  incrementAppAccessRequest() : void	
}

type Props = StateProps & DispatchProps


/*
*/
// MARK: Implementation
const Home = (props : Props) => {
   const { navigate } = useNavigation();

   const _renderProductItem = (product: Product) => (
		<View>
			<ProductItem 
				description={product.name}
				price={product.price}
				imageUrl={product.url}
				onAddTap={() => {
					props.addProduct(product);
					Toast.show({
						text1: strings.itemAddInCart,
						position: 'bottom',
						type: 'success'
				  });	
				}}
				onRemoveTap={() => confirmDeleteItem(product)}
				isInCart={props.cartItems.some(item => item.id === product.id)}
			/>
		</View>
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
   
   useEffect(() => {
	props.loadRequest();
	props.incrementAppAccessRequest();
   }, []);		

   return (
	<Container>
		<AppBar 
			title={strings.appName} 
			cartEnable={true}
			cartItemCount={props.cartItems.length}
			onCartTap={() => {
				if (props.cartItems.length > 0) {
					navigate('Cart');	
				} else {
					Toast.show({
						text1: strings.noItemsInCartTitle,
						text2: strings.noItemsInCartDescription,
						position: 'bottom',
						type: 'info'
				  });	
				}
			}}
		/>
		{
			props.loading &&
				<View style={styles.centeredContainer}>
				  <ActivityIndicator size="large" color={colors.primary} />		
				</View> 
		}
		{
			!props.loading && !props.error &&	   
				<SafeAreaView style={ styles.contentContainer }>
		   			<FlatList
			   			data={props.products}
			   			renderItem={renderItem => _renderProductItem(renderItem.item)}
			   			numColumns={2}
			   			keyExtractor={item => item.id}
			   			showsVerticalScrollIndicator={false}
			   			showsHorizontalScrollIndicator={false}
		   			/> 
	   			</SafeAreaView>   	
		}
		{
			!props.loading && props.error &&
				<View style={styles.centeredContainer}>
					<Icon name='warning' />
					<Text>{strings.problem}</Text>
				</View>	
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
	bindActionCreators(Object.assign({}, ProductsActions, CartActions, AppAnalyticsActions), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
