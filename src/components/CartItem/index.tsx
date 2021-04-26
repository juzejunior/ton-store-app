import React from 'react';
import { Button, Icon, Text, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import styles from './styles';

interface IProps {
	title: String;
  description?: String;
  imageUrl?: String;
  onDeleteTap: () => void;
}

const CartItem = (
  { 
   title, 
   description,
   imageUrl,
   onDeleteTap 
  }: IProps) => (
  <>
     <ListItem avatar>
				<Left>
          <Thumbnail source={{ uri: 'https://media.gazetadopovo.com.br/bomgourmet/2018/09/picole-de-iogurte-e-framboesa-uniao-403c4410.png' }} />
        </Left>
        <Body>
          <Text>Sorvete X - R$ 9,99</Text>
          <Text note>descricao do produto</Text>
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
