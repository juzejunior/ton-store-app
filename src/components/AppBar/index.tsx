import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text, Badge } from 'native-base';
import styles from './styles';

interface IProps {
	title: String;
  backButtonEnable?: Boolean;
  cartEnable?: Boolean;
  cartItemCount?: number;
  onCartTap?: () => void;
  onBackTap?: () => void;
}

const AppBar = (
  { 
   title, 
   backButtonEnable = false,
   cartEnable = false,
   cartItemCount = 0,
   onCartTap,
   onBackTap 
  }: IProps) => (
  <>
     <Header style={styles.headerContainer}>
          <Left>
            {
              backButtonEnable && 
              <Button onPress={onBackTap} transparent>
                <Icon name='arrow-back' />
              </Button>
            }
          </Left>
          <Body>
            <Title>{ title }</Title>
          </Body>
          <Right>
          {
            cartEnable &&
            <Button onPress={onCartTap} badge vertical transparent>
              {
                cartItemCount > 0 && 
                <Badge style={ styles.cartBadge }>
                  <Text style={ styles.badgeText }>{cartItemCount.toString()}</Text>
                </Badge>
              }
              <Icon name="cart" />
            </Button>  
          }
          </Right>
        </Header>
  </>
);

export default AppBar;
