import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Speech from 'react-native-speech';
//var Speech = require('react-native-speech');

export default class Setup extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return (
            <View>
                <Text>Click this button below to speak</Text>
            </View>
        )
    }
}


// = () => (
//   <View style={styles.container}>
//     <Text>This is my Setup Component!</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//     container: { 
//         flex: 1, 
//         alignItems: 'center', 
//         backgroundColor: '#AAA',
//         justifyContent: 'center' 
//     }
// })

// export default Setup;
