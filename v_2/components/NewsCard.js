import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';


const NewsCard = ({news}) => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: news.imageUrl}}
                style={styles.image}
            />
            <Text style={styles.title}>{news.title}</Text>
            <Text>{news.description}</Text>
        </View>
    )
}

export { NewsCard };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:5,
        margin:2,
        borderWidth: 1,
        borderRadius: 5,
    },
    title: {
        fontWeight: 'bold'
    },
    image: {
        height: Dimensions.get('window').height * 0.3,
        borderRadius: 5,
        resizeMode: 'contain'
    }
})