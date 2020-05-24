import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import { Stopwatch } from 'react-native-stopwatch-timer';

export default class OverlayComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRunning: false,
            isPaused: false,
            stopwatchStart: false,
            totalDuration: 90000,
            stopwatchReset: false,
        };
        this.stopRun = this.stopRun.bind(this);
        this.launchRun = this.launchRun.bind(this);
        this.pauseRun = this.pauseRun.bind(this);
        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);

    }

    toggleStopwatch() {
        this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
    }

    resetStopwatch() {
        this.setState({ stopwatchStart: false, stopwatchReset: true });
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    Running(pause, stop) {
        this.state.isPaused ? icon = "play" : icon = "pause";
        return (
            <View style={runningStyle.overlay} >
                <View style={runningStyle.up}>
                    <Text>Nb KM</Text>
                    <Stopwatch laps msecs start={this.state.stopwatchStart}
                        reset={this.state.stopwatchReset}
                        getTime={this.getFormattedTime} />
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
        this.setState({ isRunning: false, isPaused: false, stopwatchStart: false, stopwatchReset: true });
        
        console.log("isRunning set to false");
    };

    pauseRun() {
        this.setState({ isPaused: !this.state.isPaused, stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false })
    }

    launchRun() {
        this.setState({ isRunning: true, stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
        console.log("isRunning set to true");
    };

    render() {
        return this.state.isRunning ? this.Running(this.pauseRun, this.props.finish) : this.NotRunning(this.launchRun)
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
        paddingBottom: 60,
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


