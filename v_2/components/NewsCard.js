import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>
            <Image source={{uri: news.imageUrl}} style={styles.image}/>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
        </View>
    )
}

export {NewsCard};

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth: 1,
        borderColor:'#eceff1',
        padding:7,
        margin:5,
        borderRadius:5
    },
    title:{
        fontWeight:'bold',
        fontSize:17,
    },
    image:{
        height: Dimensions.get('window').height * 0.25,
        borderRadius:5,
        resizeMode:'contain'
    }
})