import React from 'react';
import { Card, CardItem, Thumbnail, Text, Right, Icon } from 'native-base';

const Item = (props) => {
    let photo = props.photo
    let photo_test = require(photo);
    return (
        <Card>
            <CardItem>
                <Thumbnail source={() => require(photo)} />
                <Text>{props.name}</Text>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </CardItem>
        </Card>
    )
}

export default Item;
