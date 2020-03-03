import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class OverlayComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            isPaused: false,
            time: 0
        };
        this.stopRun = this.stopRun.bind(this);
        this.launchRun = this.launchRun.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseRun = this.pauseRun.bind(this);

    }

    // getFormattedTime(time) {
    //     this.currentTime = time;
    // };

    Running(pause, stop) {
        this.state.isPaused ? icon = "play" : icon = "pause";
        return (
            <View style={runningStyle.overlay} >
                <View style={runningStyle.up}>
                    <Text>Nb KM</Text>
                    <Text style={runningStyle.chrono} >
                        {this.msToTime(this.state.time)}
                    </Text>
                </View>
                <View style={runningStyle.down}>
                    <TouchableNativeFeedback onPress={pause}>
                        <View style={[runningStyle.button_pause, runningStyle.button]}>
                            <Icon name={icon} size={26} color="white" />
                        </View>
                    </TouchableNativeFeedback>

                    <View style={runningStyle.middle} ></View>

                    <TouchableNativeFeedback onPress={stop}>
                        <View style={[runningStyle.button_stop, runningStyle.button]}>
                            <Icon name="square" size={26} color="white" />
                        </View>
                    </TouchableNativeFeedback>

                </View>

            </View>
        );
    }

    startTimer() {
        this.timer = setInterval(() => this.setState({
            time: this.state.time + 1000
        }), 1000);
    }

    msToTime(s) {
        // Pad to 2 or 3 digits, default is 2
        var pad = (n, z = 2) => ('00' + n).slice(-z);
        return pad(s / 3.6e6 | 0) + ':' + pad((s % 3.6e6) / 6e4 | 0) + ':' + pad((s % 6e4) / 1000 | 0);
    }

    NotRunning(pushed) {
        return (
            <View style={notRunningStyle.overlay} >
                <TouchableNativeFeedback style={notRunningStyle.button} onPress={pushed}>
                    <View style={notRunningStyle.button}>
                        <Text style={{ color: 'white', fontSize: 20 }} >RUN</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

    stopRun() {
        this.setState({ isRunning: false, time: 0 });
        console.log("isRunning set to false");
    };

    pauseRun() {
        if (this.state.isPaused) {
            this.setState({ isPaused: false });
            this.startTimer();
        } else {
            this.setState({ isPaused: true });
            clearInterval(this.timer);
            console.log("pause")
        }

    }

    launchRun() {
        this.setState({ isRunning: true });
        this.startTimer();
        console.log("isRunning set to true");
    };

    render() {
        if (this.state.isRunning) {
            return (this.Running(this.pauseRun, this.stopRun))
        } else {
            return (this.NotRunning(this.launchRun))
        }
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
    middle: {
        width: 40,
    },
    down: {
        flexDirection: 'row',
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    chrono: {
        fontSize: 40,
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


