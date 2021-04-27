import React from 'react';
import NumberFormat from 'react-number-format';
import { Button, Icon, Text, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import styles from './styles';

interface IProps {
	title: String;
  price: number;
  description?: String;
  imageUrl: String;
  onDeleteTap: () => void;
}

const CartItem = (
  {  
   title,
   imageUrl,
   price,
   onDeleteTap 
  }: IProps) => (
  <>
     <ListItem avatar>
				<Left>
          <Thumbnail source={{ uri: imageUrl }} />
        </Left>
        <Body>
          <Text>{title}</Text>
          <NumberFormat value={price / 100} 
              displayType={'text'} 
              prefix={'R$'}
              fixedDecimalScale={true}
              decimalScale={2}
              decimalSeparator={","}
              thousandSeparator={"."}	 
              renderText={formattedValue => <Text style={styles.price}>{formattedValue}</Text>}
            />
        </Body>
        <Right>
				  <Button onPress={onDeleteTap} transparent>
            <Icon name='trash' style={styles.trashIcon} />
          </Button>
        </Right>
     </ListItem>
  </>
);

export default CartItem;
