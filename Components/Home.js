import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <ImageBackground source={require('../Assets/background.jpg')} style={styles.container}>
    <Text>WHAT IS THE PURPOSE OF THIS APP?</Text>
    <Text>You will be asked a couple questions to help set up your game</Text>
    <Text>Once when you have that set up, this app will narrate the game for you</Text>
    <Button
      onPress={() => navigation.navigate('Setup')}
      title="Setup"
    />
  </ImageBackground>
);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});

export default Home;