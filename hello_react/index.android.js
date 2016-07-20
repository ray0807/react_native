/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';  
import React, { Component } from 'react';
import {
AppRegistry,  
  StyleSheet,  
  ToastAndroid,  
  Text,  
  View,  
  TouchableWithoutFeedback,  
  TouchableHighlight,  
  TouchableNativeFeedback,  
  Image, 
} from 'react-native';

/** 
 * Sample React Native App 
 * https://github.com/facebook/react-native 
 */  


  
var hello_react = React.createClass({  
  
  getInitialState: function()  
  {  
  
    ToastAndroid.show('哈哈哈哈哈', ToastAndroid.SHORT);  
    return null;  
  },  
  
  textOnclick:function()  
  {  
    ToastAndroid.show('点击了', ToastAndroid.SHORT);  
  },  
  
  imageOnclick:function()  
  {  
    ToastAndroid.show('图片被点击了', ToastAndroid.SHORT);  
  },  
  
  buttonOnclick:function()  
  {  
    ToastAndroid.show('Button被点击了', ToastAndroid.SHORT);  
  },  
  
  //绘制视图  
  render: function() {  
    return (  
      <View style={styles.container}>  
        <TouchableWithoutFeedback  
          onPress={() => this.textOnclick()}>  
          <View>  
            <Text style={styles.welcome}>  
              Welcome  
            </Text>  
          </View>  
        </TouchableWithoutFeedback>  
  
        <TouchableWithoutFeedback  
          onPress={() => this.imageOnclick()}>  
          <Image source={{uri: 'http://c1.mifile.cn/f/i/15/item/buyphone/mi5-yin.jpg'}} style={styles.imageStyle}>  
          </Image>  
        </TouchableWithoutFeedback>  
        <TouchableHighlight  
          style={{marginTop:20}}  
          //按下后背景透明度变化  
          activeOpacity={0.7}  
          //按下后背景颜色  
          underlayColor={'red'}  
          onPress={()=>ToastAndroid.show('文本被点击了', ToastAndroid.SHORT)}>  
         
          <Text  
              style={{fontSize:23, color:'blue', backgroundColor:'white'}}  
              >  
              这是一个文本(测试TouchableHighlight)  
          </Text>  
        </TouchableHighlight>  
  
        <TouchableNativeFeedback  
          background={TouchableNativeFeedback.SelectableBackground()}  
           onPress={() => ToastAndroid.show('文本被点击了1', ToastAndroid.SHORT)}>  
          <View  
            style={{marginTop:10}}>  
            <Text  
                style={{fontSize:23, color:'blue', backgroundColor:'white'}}  
                >  
                TouchableNativeFeedback  
            </Text>  
          </View>  
        </TouchableNativeFeedback>  
      </View>  
    );  
  },  
});  
  
  
var styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#ff3000',  
    // flexDirection: 'column',  
  },  
  welcome: {  
    // flex: 1,  
    width:200,  
    //字体大小  
    fontSize: 20,  
    textAlign: 'center',  
    // margin: 10,  
  },  
  instructions: {  
    textAlign: 'center',  
    color: '#333333',  
    marginBottom: 5,  
  },  
  
  imageStyle:{  
    width: 200,  
    height: 200,  
  }  
}); 


AppRegistry.registerComponent('hello_react', () => hello_react);
