import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>Welcome to Home of Learning</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        marginLeft: 48,
      },
    red: {
        color: 'red',
        fontSize: 20,
      },
})

export default HomeScreen;