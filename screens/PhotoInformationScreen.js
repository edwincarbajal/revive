import React from 'react';
import { Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body, Right, Title, Icon } from 'native-base';
import { ExpoLinksView } from '@expo/samples';
import PhotoInfo from '../components/PhotoInfo';
const data = require("../DummyData/imgmetadata");

export default function PhotoInformationScreen() {
    return (
        <Container>
            <Content>
                <Card>
                    <CardItem cardBody>
                        <Image source={require('../DummyData/img_5d5c5e467fe0f.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon name="cross" type="Entypo"/>
                                <Text>Retake</Text>
                            </Button>
                        </Left>
                        <Left>
                            <Button transparent>
                                <Icon name="camera" />
                                <Text>Add more</Text>
                            </Button>
                        </Left>
                        <Left>
                            <Button transparent>
                                <Icon name="check" type="Entypo"/>
                                <Text>Next </Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>

                <FlatList
                    keyExtractor={(item, index) => item.topicality.toString()}
                    data={data.labelAnnotations}
                    renderItem={itemData => (<PhotoInfo name={itemData.item.description} confident={itemData.item.score} />)}
                />


            </Content>
        </Container>
    );
}

PhotoInformationScreen.navigationOptions = {
    title: 'Photo Information',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});