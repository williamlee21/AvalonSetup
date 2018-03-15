import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ToggleSwitch from 'toggle-switch-react-native';

export default class Setup extends Component {
    constructor(props){
        super(props)
        this.state = {
            Merlin: true,
            MerlinOpacity: 1,
            Mordred: true,
            MordredOpacity: 1, 
            Percival: true,
            PercivalOpacity: 1,
            Morgana: true,
            MorganaOpacity: 1,
            Assassin: true,
            AssassinOpacity: 1,
            Oberon: true,
            OberonOpacity: 1,
        }
        this.handleMerlin = this.handleMerlin.bind(this)
        this.handleAssassin = this.handleAssassin.bind(this)
        this.handlePercival = this.handlePercival.bind(this)
        this.handleMorgana = this.handleMorgana.bind(this)
        this.handleMordred = this.handleMordred.bind(this)
        this.handleOberon = this.handleOberon.bind(this)

    }

    handleMerlin(event){
        this.setState({Merlin: !this.state.Merlin})  
    }
    handleMordred(event){
        this.setState({Mordred: !this.state.Mordred})
    }
    handlePercival(event){
        this.setState({Percival: !this.state.Percival})
    }
    handleMorgana(event){
        this.setState({Morgana: !this.state.Morgana})
    }
     handleAssassin(event){
        this.setState({Assassin: !this.state.Assassin})
    }
    handleOberon(event){
        this.setState({Oberon: !this.state.Oberon})
    }



    render(){
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={{flex:1}} onPress={this.handleMerlin}  >
                        <View style={[styles.blue, this.state.Merlin ? styles.on : styles.off]}>
                            <Text style={[styles.characterName, {color: '#FDB768'}]}>Merlin</Text>
                            <Image source={require('../Assets/Merlin.png')}/>
                            <Text>Knows all evil EXPECT Mordred</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={this.handleMordred}>
                        <View style={[styles.red, this.state.Mordred ? styles.on : styles.off]}>
                            <Text style={styles.characterName}>Mordred</Text>
                            <Image source={require('../Assets/Mordred.png')}/>
                            <Text>Hides from Merlin</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity style={{flex:1}} onPress={this.handlePercival}>
                        <View style={[styles.blue, this.state.Percival ? styles.on : styles.off]}>
                            <Text style={[styles.characterName,{color: '#FDB768'}]}>Percival</Text>
                            <Image source={require('../Assets/Percival.png')}/>
                            <Text>Knows Merlin AND Morgana</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={this.handleMorgana}>
                        <View style={[styles.red, this.state.Morgana ? styles.on : styles.off]}>
                            <Text style={styles.characterName}>Morgana</Text>
                            <Image source={require('../Assets/Morgana.png')}/>
                            <Text>Appears as Merlin to Percival</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity style={{flex:1}} onPress={this.handleAssassin}>
                        <View style={[styles.red, this.state.Assassin ? styles.on : styles.off]}>
                            <Text style={styles.characterName}>Assassin</Text>
                            <Image source={require('../Assets/Assassin.png')}/>
                            <Text>Find Merlin to win</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1}} onPress={this.handleOberon}>
                        <View style={[styles.red, this.state.Oberon ? styles.on : styles.off]}>
                            <Text style={styles.characterName}>Oberon</Text>
                            <Image source={require('../Assets/Oberon.png')}/>
                            <Text>Does not know who is evil</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.readyButton} onPress={() => this.props.navigation.navigate('Narration', {setup: this.state})}>
                    <Text>Ready</Text>
                </TouchableOpacity>
            </View>
        )
    }

    
    // render(){
    //     return (
    //         <View>
    //             <Text>SETUP</Text>
    //             <ToggleSwitch
    //                 isOn={true}
    //                 onColor='green'
    //                 offColor='red'
    //                 label='Merlin'
    //                 labelStyle={{color: 'black', fontWeight: '900'}}
    //                 size='default'
    //                 onToggle={ (isOn) => {this.handleMerlin(isOn)}}
    //             />
                
    //             <ToggleSwitch
    //                 isOn={true}
    //                 onColor='green'
    //                 offColor='red'
    //                 label='Oberon'
    //                 labelStyle={{color: 'black', fontWeight: '900'}}
    //                 size='default'
    //                 onToggle={ (isOn) => {this.handleOberon(isOn)}}
    //             />
    //             <ToggleSwitch
    //                 isOn={true}
    //                 onColor='green'
    //                 offColor='red'
    //                 label='Mordred'
    //                 labelStyle={{color: 'black', fontWeight: '900'}}
    //                 size='default'
    //                 onToggle={ (isOn) => {this.handleMordred(isOn)}}
    //             />
    //             <ToggleSwitch
    //                 isOn={true}
    //                 onColor='green'
    //                 offColor='red'
    //                 label='Morgana'
    //                 labelStyle={{color: 'black', fontWeight: '900'}}
    //                 size='default'
    //                 onToggle={ (isOn) => {this.handleMorgana(isOn)}}
    //             />
    //             <ToggleSwitch
    //                 isOn={true}
    //                 onColor='green'
    //                 offColor='red'
    //                 label='Percival'
    //                 labelStyle={{color: 'black', fontWeight: '900'}}
    //                 size='default'
    //                 onToggle={ (isOn) => {this.handlePercival(isOn)}}
    //             />
               

    //             <Button
    //                 onPress={() => this.props.navigation.navigate('Narration', {setup: this.state})}
    //                 title="READY"
    //             />

    //         </View>
    //     )
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    red: {
        flex: 1,
        backgroundColor: '#944743',
        alignItems: 'center',
        margin: .5
    },
    blue: {
        flex: 1,
        backgroundColor: '#5E92F2',
        alignItems: 'center',
        margin: .5
    },
    characterName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'silver'
    },
    characterText: {
        fontSize: 12
    },
    readyButton: {
        flex:.3, 
        backgroundColor: '#ff6666', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    on: {
        opacity: 1
    },
    off: {
        opacity: .1
    }

  });