import React from 'react';
import NumberFormat from 'react-number-format';
import { Image } from 'react-native';
import { Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import styles from './styles';

interface IProps {
  price: number;
  description: String;
  imageUrl: String;
  isInCart?: Boolean;
  onAddTap: () => void,
  onRemoveTap: () => void,
}

const ProductItem = (
  { 
   description, 
   price,
   imageUrl,
   isInCart = false,
   onAddTap,
   onRemoveTap
  }: IProps) => (
      <Card>
        <CardItem style={styles.card} cardBody>
              <Image 
                style={styles.image}
                source={{uri: imageUrl }} 
              />
        </CardItem>
        <CardItem>
          <Text>
           { description }
          </Text>
        </CardItem>
        <CardItem>
            <NumberFormat value={price / 100} 
              displayType={'text'} 
              prefix={'R$'}
              fixedDecimalScale={true}
              decimalScale={2}
              decimalSeparator={","}
              thousandSeparator={"."}	 
              renderText={formattedValue => <Text style={styles.price}>{formattedValue}</Text>}
            />
          <Right>
            {
              !isInCart ?
              <Button onPress={onAddTap} transparent>
               <Icon name='add' />
              </Button>
              :
              <Button onPress={onRemoveTap} transparent>
                <Icon name='trash' style={styles.removeItem} />
              </Button>
            }
          </Right>
        </CardItem>
      </Card>
);

export default ProductItem;
