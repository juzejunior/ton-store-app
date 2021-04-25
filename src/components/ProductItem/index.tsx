import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Content, Container, Text } from 'native-base';
import styles from './styles';

interface IProps {
  price: number;
  description: String;
  imageUrl?: String;
  onTap: Function,
}

const ProductItem = (
  { 
   description, 
   price,
   imageUrl,
   onTap
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
        </CardItem>
      </Card>
);

export default ProductItem;
