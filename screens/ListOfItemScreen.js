import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right, Thumbnail } from 'native-base';
import { ScrollView } from 'react-native';
import MyItem from "../components/Item";


export default function ListOfItemScreen(props) {
    const items = [
        {photo: "img1", item: "Item 1"},
        {photo: "img2", item: "Item 2"},
        {photo: "img3", item: "Item 3"}]
    return (
      <Container>
        <Header />
        <ScrollView>
          {items.map((i) => {
              //let photo = require(i.photo);
            return <MyItem photo={i.photo} name={i.item} key={i.photo} />
          })}

        </ScrollView>
      </Container>
    );
}

ListOfItemScreen.navigationOptions = {
  title: 'List of Items',
};