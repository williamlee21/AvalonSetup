import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
  <View>
    <Text style={styles.container}>AVALON</Text>
    <Text>You will be asked a couple questions to help set up your game</Text>
    <Text>Once when you have that set up, this app will narrate the game for you</Text>
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