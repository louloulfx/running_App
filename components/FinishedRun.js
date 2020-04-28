import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class FinishedRun extends Component {

    render() {
        return (
            <View style={FinishStyle.container}>
                <View style={FinishStyle.head}>
                    <Text style={FinishStyle.chrono}>00:00:00</Text>
                    <Text style={FinishStyle.date}>Monday, 12 March</Text>
                    <Text style={FinishStyle.distance}>13,3km</Text>
                </View>

                <View style={FinishStyle.minimenu}>
                <Icon style={FinishStyle.icon} name="share-alt" size={50} color="white" />
                <Icon style={FinishStyle.icon} name="undo" onPress={this.props.back} size={50} color="white" />
                </View>

            </View>
        )

    }
}

const FinishStyle = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#2196F3'
    },
    head: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chrono: {
        fontSize:70,
        color:'white'
    },
    distance: {
        fontSize:30,
        textDecorationStyle:'double',
        color:'white'
    },
    date: {
        fontSize:20,
        color:'white'
    },
    minimenu: {
        display: 'flex',
        flexDirection:'row',
        width:150,
        justifyContent:'space-between'
    }
})

