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

import BaseView from '../base/BaseView'
import  CountModule from './CountModule';
import  CallbackModule from './CallbackModule';

export  default  class MyModules extends BaseView {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getModules() {

        CountModule.count("自定义modules：ray ", CountModule.TEST_COUNT_KEY);
    }

    getCallback() {
        CallbackModule.returnSomething(1, 2, (sub)=> {
            ToastAndroid.show("从native返回：1+2=" + sub, 1);
        });
    }

    getPromises() {

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <TouchableOpacity onPress={this.getModules} style={ styles.button }>
                    <Text  >自定义modules</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.getCallback} style={ styles.button }>
                    <Text >自定义callback</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ this.getPromises } style={ styles.button }>
                    <Text >Promises</Text>
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


