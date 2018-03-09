import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ToggleSwitch from 'toggle-switch-react-native';

export default class Setup extends Component {
    constructor(props){
        super(props)
        this.state = {
            Merlin: true,
            MerlinOpacity: 1,
            Mordred: true,
            MordredOpacity: .5, 
            Percival: true,
            PercivalOpacity: .5,
            Morgana: true,
            MorganaOpacity: .5,
            Assassin: true,
            AssassinOpacity: .5,
            Oberon: true,
            OberonOpacity: .5,
        }
        this.handleMerlin = this.handleMerlin.bind(this)
        this.handleAssassin = this.handleAssassin.bind(this)
        this.handlePercival = this.handlePercival.bind(this)
        this.handleMorgana = this.handleMorgana.bind(this)
        this.handleMordred = this.handleMordred.bind(this)
        this.handleOberon = this.handleOberon.bind(this)

    }

    handleMerlin(event){
        if (this.state.MerlinOpacity === .1) {
            this.setState({MerlinOpacity: 1})
            this.setState({Merlin: !this.state.Merlin})
        }
        else {
            this.setState({MerlinOpacity: .1})
            this.setState({Merlin: !this.state.Merlin})
        }
        
    }
    handleMordred(event){
        this.setState({Mordred: !this.state.Mordred})
        console.log(this.state.Merlin, this.state.MerlinOpacity)
    }
    handlePercival(event){
        this.setState({Percival: !this.state.Percival})
    }
    handleMorgana(event){
        this.setState({Morgana: !this.state.Percival})
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
                    <TouchableOpacity onPress={this.handleMerlin} style={[styles.blue, {opacity:this.state.MerlinOpacity}]} >
                        <Text>Merlin</Text>
                        <Text>Knows all evil EXPECT Mordred</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.red} onPress={this.handleMordred}>
                        <Text>Mordred</Text>
                        <Text>Hides from Merlin</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={style=styles.blue}>
                        <Text>Percival</Text>
                        <Text>Knows Merlin AND Morgana</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.red}>
                        <Text>Morgana</Text>
                        <Text>Appears as Merlin to Percival</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={style=styles.red}>
                        <Text>Assassin</Text>
                        <Text>Find Merlin to win</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.red}>
                        <Text>Oberon</Text>
                        <Text>Does not know who is evil</Text>
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
        backgroundColor: 'saddlebrown',
        alignItems: 'center',
        margin: .5
    },
    blue: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        margin: .5
    },
    readyButton: {
        flex:.3, 
        backgroundColor: '#ff6666', 
        alignItems: 'center',
        justifyContent: 'center'
    }
  });