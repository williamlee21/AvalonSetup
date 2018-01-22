import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Narration extends Component {

    render(){
        const character = this.props.navigation.state.params.setup
        return (
            <View>
                <Text>Reading Script</Text>
                {Expo.Speech.speak('Everyone close your eyes and extend your hand into a fist in front of you', {rate:.9})}
                {/* Oberon */}
                {!character.Oberon && Expo.Speech.speak('Minions of Mordred, open your eyes and look around so you know the agents of evil.', {rate:.9})}
                {character.Oberon && Expo.Speech.speak('Minions of Mordred, except Oberon, open your eyes and look around so you know the agents of evil.', {rate:.9})}
                {character.Oberon && Expo.Speech.speak('5, 4, 3, 2, 1', {rate:0.2})}
                {Expo.Speech.speak('Minions of Mordred, close your eyes.', {rate:.9})}
                {/* Merlin and Mordred */}
                {character.Merlin && !character.Mordred && Expo.Speech.speak(' Minions of Mordred, extend your thumb so Merlin will know of you.', {rate:.9})}
                {character.Merlin && character.Mordred && Expo.Speech.speak(' Minions of Mordred, except Mordred himself,extend your thumb so Merlin will know of you.', {rate:.9})}
                {character.Merlin && Expo.Speech.speak('5, 4, 3, 2, 1', {rate:0.2})}
                {character.Merlin && Expo.Speech.speak('Minions of Mordred, put your thumbs down. Merlin, close your eyes.', {rate:.9})}
                {/* Merlin, Percival, and Morgana */}
                {character.Percival && Expo.Speech.speak('Merlin and Morgana, extend your thumbs so Percival will know of you. Percival, open your eyes so that you may know Merlin and Morgana.', {rate:.9})}
                {character.Percival && Expo.Speech.speak('5, 4, 3, 2, 1', {rate:0.2})}
                {character.Percival && Expo.Speech.speak('Merlin and Morgana, put your thumbs down. Percival, close your eyes.', {rate:.9})}
                {Expo.Speech.speak('All players should have their eyes closed and hands in a fist in front of them. Everyone, open your eyes', {rate:.9})}

                <Button onPress={() => Expo.Speech.stop()} title='Stop reading' /> 
            </View>
        )
    }
}
