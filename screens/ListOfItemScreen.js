import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Thumbnail } from 'native-base';
import MyItem from "../components/Item";


export default function ListOfItemScreen(props) {
    const items = [{photo: "../DummyData/img_5d5c5e467fe0f.jpg", item: "Item 1"}]
    return (
      <Container>
        <Header />
        <Content>
          {items.map((i) => {
            return <MyItem photo={i.photo} name={i.item} />
          })}
        </Content>
      </Container>
    );
}

ListOfItemScreen.navigationOptions = {
  title: 'List of Items',
};