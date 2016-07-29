/**
 * Sample React Native App
 * https://github.com/hanks-zyh
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
} =  React;

var _navigator;
var HttpView = require('./http/http.js');
var ShopView = require('./shop/shop.android.js');
var ViewPager = require('./viewpager.android.js');
var UserInfoView = require('./user/userinfo.js');
var NewsView = require('./news/news.js');

var AwesomeProject = React.createClass({

  getInitialState: function(){
    return {};
  },

  configureScenceAndroid: function(){
    return Navigator.SceneConfigs.FadeAndroid;
  },


  renderSceneAndroid: function(route, navigator){
    _navigator = navigator;
    if(route.id === 'main'){
      return (
        <View>
          <TouchableOpacity onPress={ () => _navigator.push({title:'Http',id:'http'}) }  style={ styles.button }>
            <Text>NetWork</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => _navigator.push({title:'Shop',id:'shop'})} style={ styles.button }>
            <Text>SHOP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => _navigator.push({title:'ViewPager',id:'viewpager'})} style={ styles.button }>
            <Text>ViewPager</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => _navigator.push({title:'UserInfoView',id:'userinfo'})} style={ styles.button }>
            <Text>Userinfo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => _navigator.push({title:'NewsView',id:'news'})} style={ styles.button }>
            <Text>News</Text>
          </TouchableOpacity>
        </View>
       );
    }

    if(route.id === 'http'){
      return (
        <HttpView navigator={navigator} route={route} />
       );
    }

    if(route.id === 'shop'){
      return (
        <ShopView navigator={navigator} route={route}/>
      );
    }
    if(route.id === 'viewpager'){
      return (
        <ViewPager navigator={navigator} route={route}/>
      );
    }
    if(route.id === 'userinfo'){
      return (
        <UserInfoView navigator={navigator} route={route}/>
      );
    }
    if(route.id === 'news'){
      return (
        <NewsView navigator={navigator} route={route}/>
      );
    }


  },
  render: function(){
    var renderScene = this.renderSceneAndroid;
    var configureScence = this.configureScenceAndroid;
    return (
      <Navigator
        debugOverlay={false}
        initialRoute={{ title: 'Main', id:'main'}}
        configureScence={{ configureScence }}
        renderScene={renderScene}
      />
    );
  }
});

var styles = StyleSheet.create({
  button:{
    height:56,
    margin:10,
    backgroundColor:'#cad6c5',
    justifyContent:'center',
    alignItems:'center',
  },
});

module.exports = AwesomeProject
