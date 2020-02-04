import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

class NotRunning extends Component {
    render() {

        return (
            <View style={notRunningStyle.overlay} >
                <TouchableNativeFeedback style={notRunningStyle.button} onPress={this.props.pushed}>
                    <View style={notRunningStyle.button}>
                        <Text style={{ color: 'white', fontSize: 20 }} >RUN</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const notRunningStyle = StyleSheet.create({
    button: {
        backgroundColor: '#8bc34a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        color: '#000',
        zIndex: 2,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    overlay: {
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})

class Running extends Component {
    render() {
        return (
            <View style={runningStyle.overlay} >
                <View style={runningStyle.up}>
                    <Text>Nb KM</Text>
                    <Text>Timer</Text>
                </View>
                <View style={runningStyle.down}>
                    <TouchableNativeFeedback onPress={this.props.pushed}>
                        <View style={[runningStyle.button_pause, runningStyle.button]}>
                            <Icon name="pause" size={26} color="white" />
                        </View>
                    </TouchableNativeFeedback>

                    <TouchableNativeFeedback onPress={this.props.pushed}>
                        <View style={[runningStyle.button_stop, runningStyle.button]}>
                            <Icon name="square" size={26} color="white" />
                        </View>
                    </TouchableNativeFeedback>
                </View>

            </View>
        );
    }
}
const runningStyle = StyleSheet.create({
    overlay: {
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 40,
        paddingBottom: 35,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    up: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    down: {
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        alignItems:'center'
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button_pause: {
        backgroundColor: 'grey',
        width: 50,
        height: 50,
    },
    button_stop: {
        backgroundColor: 'red',
        width: 70,
        height: 70,
    }
})

export default class OverlayComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { isRunning: false };
        this.stopRun = this.stopRun.bind(this)
        this.displayRun = this.displayRun.bind(this)
    }

    stopRun() {
        this.setState({ isRunning: false });
        console.log("isRunning set to false");
    };

    displayRun() {
        this.setState({ isRunning: true });
        console.log("isRunning set to true");
    };

    render() {
        if (this.state.isRunning) {
            return (<Running pushed={this.stopRun} />)
        } else {
            return (<NotRunning pushed={this.displayRun} />)
        }
    }
}


