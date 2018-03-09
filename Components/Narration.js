import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Narration extends Component {

    render(){
        const character = this.props.navigation.state.params.setup
        return (
            <View>
                <Text>Reading Script</Text>
                {Expo.Speech.speak('Everyone close your eyes and extend your hand into a fist in front of you', {rate:1.02})}
                {/* Oberon */}
                {!character.Oberon && Expo.Speech.speak('Minions of Mordred, open your eyes and look around so you know the agents of evil.', {rate:1.02})}
                {character.Oberon && Expo.Speech.speak('Minions of Mordred, except Oberon, open your eyes and look around so you know the agents of evil.', {rate:1.02})}
                {Expo.Speech.speak('5, 4, 3, 2, 1', {rate:0.5})}
                {Expo.Speech.speak('Minions of Mordred, close your eyes.', {rate:1.02})}
                {/* Merlin and Mordred */}
                {character.Merlin && !character.Mordred && Expo.Speech.speak(' Minions of Mordred, extend your thumb so Merlin will know of you.', {rate:1.02})}
                {character.Merlin && character.Mordred && Expo.Speech.speak(' Minions of Mordred, except Mordred himself,extend your thumb so Merlin will know of you.', {rate:1.02})}
                {character.Merlin && Expo.Speech.speak('5, 4, 3, 2, 1', {rate:0.5})}
                {character.Merlin && Expo.Speech.speak('Minions of Mordred, put your thumbs down. Merlin, close your eyes.', {rate:1.02})}
                {/* Merlin, Percival, and Morgana */}
                {character.Percival && Expo.Speech.speak('Merlin and Morgana, extend your thumbs so Percival will know of you. Percival, open your eyes so that you may know Merlin and Morgana.', {rate:1.02})}
                {character.Percival && Expo.Speech.speak('5, 4, 3, 2, 1', {rate:0.5})}
                {character.Percival && Expo.Speech.speak('Merlin and Morgana, put your thumbs down. Percival, close your eyes.', {rate:1.02})}
                {Expo.Speech.speak('All players should have their eyes closed and hands in a fist in front of them. Everyone, open your eyes', {rate:1.02})}

                <Button onPress={() => Expo.Speech.stop()} title='Stop reading' /> 
            </View>
        )
    }
}
