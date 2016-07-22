/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';  
import React ,{Component}from 'react';
import {
    AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Navigator,
} from 'react-native';

/** 
 * Sample React Native App 
 * https://github.com/facebook/react-native 
 */  

 var _navigator;

import HttpView from './views/http.js';
// import ShopView from './views/shop.android.js';
// import ViewPager from './views/viewpager.android.js';
// import UserInfoView from './views/userinfo.js';
// import NewsView from './views/news.js';

class hello_react extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  configureScenceAndroid(){
     return Navigator.SceneConfigs.FadeAndroid;
  }

  renderSceneAndroid(route, navigator){
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

    // if(route.id === 'shop'){
    //   return (
    //     <ShopView navigator={navigator} route={route}/>
    //   );
    // }
    // if(route.id === 'viewpager'){
    //   return (
    //     <ViewPager navigator={navigator} route={route}/>
    //   );
    // }
    // if(route.id === 'userinfo'){
    //   return (
    //     <UserInfoView navigator={navigator} route={route}/>
    //   );
    // }
    // if(route.id === 'news'){
    //   return (
    //     <NewsView navigator={navigator} route={route}/>
    //   );
    // }

  }

  render(){
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
}

var styles = StyleSheet.create({
  button:{
    height:56,
    margin:10,
    backgroundColor:'#cad6c5',
    justifyContent:'center',
    alignItems:'center',
  },
});


AppRegistry.registerComponent('hello_react', () => hello_react);
