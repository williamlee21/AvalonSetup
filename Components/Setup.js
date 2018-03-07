import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ToggleSwitch from 'toggle-switch-react-native';

export default class Setup extends Component {
    constructor(props){
        super(props)
        this.state = {
            Merlin: true,
            Assassin: true,
            Percival: true,
            Morgana: true,
            Mordred: true,
            Oberon: true
        }
        this.handleMerlin = this.handleMerlin.bind(this)
        this.handleAssassin = this.handleAssassin.bind(this)
        this.handlePercival = this.handlePercival.bind(this)
        this.handleMorgana = this.handleMorgana.bind(this)
        this.handleMordred = this.handleMordred.bind(this)
        this.handleOberon = this.handleOberon.bind(this)

    }

    handleMerlin(event){
        this.setState({Merlin: event})
    }
    handleAssassin(event){
        this.setState({Assassin: event})
    }
    handlePercival(event){
        this.setState({Percival: event})
    }
    handleMorgana(event){
        this.setState({Morgana: event})
    }
    handleMordred(event){
        this.setState({Mordred: event})
    }
    handleOberon(event){
        this.setState({Oberon: event})
    }



    render(){
        return(
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.blue}>
                        <Text>Merlin</Text>
                    </View>
                    <View style={styles.red}>
                        <Text>Mordred</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={style=styles.blue}>
                        <Text>Percival</Text>
                    </View>
                    <View style={styles.red}>
                        <Text>Morgana</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={style=styles.red}>
                        <Text>Assassin</Text>
                    </View>
                    <View style={styles.red}>
                        <Text>Oberon</Text>
                    </View>
                </View>
                <View style={{flex:.3, backgroundColor: 'red'}}>
                    <Text>Ready</Text>
                </View>
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
        backgroundColor: 'saddlebrown'
    },
    blue: {
        flex: 1,
        backgroundColor: 'skyblue'
    }
  });