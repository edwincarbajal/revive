import React from 'react';
import { Card, CardItem, Thumbnail, Text, Right, Icon, Left } from 'native-base';
import images from "../DummyData/images";

const Item = (props) => {
    return (
        <Card>
            <CardItem>
                <Left><Thumbnail source={images[props.photo]} /></Left>
                <Left><Text>{props.name}</Text></Left>
                <Right>
                    <Icon name="arrow-forward" />
                    <Text>Edit</Text>
                </Right>
            </CardItem>
        </Card>
    )
}

export default Item;
