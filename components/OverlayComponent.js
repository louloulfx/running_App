import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, TouchableNativeFeedback } from 'react-native';

export default class OverlayComponent extends Component {
    render() {
        return (
            <View style={styles.overlay} >
                <TouchableNativeFeedback style={styles.button} onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 20 }} >RUN</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

