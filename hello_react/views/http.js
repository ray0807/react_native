/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component}from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ToastAndroid,
    Alert,
    BackAndroid,
} from 'react-native';

import BaseView from './BaseView'

class HttpView extends BaseView {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getByFetch() {

        fetch('https://m.baidu.com')
            .then((response) => response.text())
            .then((responseText) => {
                ToastAndroid.show(responseText, ToastAndroid.SHORT);
                console.warn(new Date().getMilliseconds());
            })
            .catch((error) => {
                console.warn(error);
            }).done();
        console.warn('请求是异步的:' + new Date().getMilliseconds());
    }

    getByXMLHttpRequest() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                ToastAndroid.show('success' + request.responseText, ToastAndroid.SHORT);
            } else {
                console.warn('error');
            }
        };

        request.open('GET', 'https://m.baidu.com');
        request.send();
    }

    postSource() {
        fetch('https://m.baidu.com')
            .then((response) => response.text())
            .then((responseText) => {
                // Works on both iOS and Android
                Alert.alert(
                    '请求结果',
                    responseText.substring(0, 100),
                    [
                        {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
                        {text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel'},
                        {text: 'OK', onPress: () => console.warn('OK Pressed')},
                    ]
                )
            })
            .catch((error) => {
                console.warn(error);
            }).done();
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={this.getByFetch} style={ styles.button }>
                    <Text  >GET by fetch</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getByXMLHttpRequest} style={ styles.button }>
                    <Text >GET by XmlHttpRequest</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.postSource } style={ styles.button }>
                    <Text >POST</Text>
                </TouchableOpacity>
            </View>
        );
    }

}


var styles = StyleSheet.create({
    button: {
        width: 180,
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#e2e2e2',
        alignItems: 'center',
        margin: 10,
    }
});


module.exports = HttpView;
