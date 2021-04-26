import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Text, Icon, Right, Button } from 'native-base';
import styles from './styles';

interface IProps {
  price: number;
  description: String;
  imageUrl?: String;
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
                source={{uri: 'https://media.gazetadopovo.com.br/bomgourmet/2018/09/picole-de-iogurte-e-framboesa-uniao-403c4410.png'}} 
              />
        </CardItem>
        <CardItem>
          <Text>
            Picolé na faixa
          </Text>
        </CardItem>
        <CardItem>
          <Text>
            Picolé na faixa
          </Text>
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
