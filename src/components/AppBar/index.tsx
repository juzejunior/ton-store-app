import React from 'react';
import { Header, Left, Body, Right, Button, Icon, Title, Text, Badge } from 'native-base';
import styles from './styles';

interface IProps {
	title: String;
  backButtonEnable?: Boolean;
  searchEnable?: Boolean;
  cartEnable?: Boolean;
}

const AppBar = (
  { 
   title, 
   backButtonEnable = false,
   searchEnable = false,
   cartEnable = false 
  }: IProps) => (
  <>
     <Header style={styles.headerContainer}>
          <Left>
            {
              backButtonEnable && 
              <Button transparent>
                <Icon name='arrow-back' />
              </Button>
            }
          </Left>
          <Body>
            <Title>{ title }</Title>
          </Body>
          <Right>
          {
            /*searchEnable && 
            <Button transparent>
              <Icon name='search' />
            </Button>*/
          }
          {
            cartEnable &&
            <Button badge vertical transparent>
              <Badge style={ styles.cartBadge }>
                <Text style={ styles.badgeText }>20</Text>
              </Badge>
              <Icon name="cart" />
            </Button>  
          }
          </Right>
        </Header>
  </>
);

export default AppBar;
