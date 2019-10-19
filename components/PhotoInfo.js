import React from 'react';
import { View, Text } from 'react-native';

const PhotoInfo = (props) => {
    return (
        <View>
            <Text>{props.name}</Text>
            <Text>{props.confident}</Text>
        </View>
    )
}
export default PhotoInfo;
