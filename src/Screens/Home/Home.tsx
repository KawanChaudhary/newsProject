import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Home: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>index</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});
