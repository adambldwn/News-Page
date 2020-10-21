import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const Banner = (props) => {
    return(
       
            <Image
                source = {{uri : props.images}}
                style={styles.container}
            />
       
    )
}

export {Banner}


const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height / 4,
        margin: 5,
        borderRadius: 10
    }
})