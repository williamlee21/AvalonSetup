import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>WHAT IS THE PURPOSE OF THIS APP?</Text>
    <Text>You will be asked a couple questions to help set up your game</Text>
    <Text>Once when you have that set up, this app will narrate the game for you</Text>
    <Text>PS. YOU HAVE TO GET YOUR OWN CARDS AND BOARD!!</Text>
    <Button
      onPress={() => navigation.navigate('Setup')}
      title="Setup"
    />
  </View>
);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});

export default Home;