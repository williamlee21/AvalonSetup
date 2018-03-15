import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Home = ({ navigation }) => (
    // <ImageBackground source={require('../Assets/background.jpg')} style={styles.container}>
    //   {/* <Text>You will be asked a couple questions to help set up your game</Text>
    //   <Text>Once when you have that set up, this app will narrate the game for you</Text> */}

        
    //   <Button
    //       onPress={() => navigation.navigate('Setup')}
    //       title="Setup"
    //     /> 
    //   </ImageBackground>
      <TouchableHighlight onPress={() => navigation.navigate('Setup')}>
    
      <Image
        //style={styles.container}
        // style={{width: 50, height: 50}}
        //style={{flex:1, height: undefined, width: undefined}}
        style={{
          alignSelf: 'center',    
          width: '100%',
          height: '70%',
          overflow: 'hidden',
          alignItems: 'center',
          position: 'relative'
        }}
        source={require('../Assets/background.jpg')}
      />
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    }
});

export default Home;