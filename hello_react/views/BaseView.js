'use strict';

import React ,{Component}from 'react';

import {
  BackAndroid,Navigator,
} from 'react-native';

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', function() {
  if(_navigator == null){
    return false;
  }
  if(_navigator.getCurrentRoutes().length === 1){
    return false;
  }
  _navigator.pop();
  return true;
});

class BaseView extends Component{
	constructor(props) {
	  	super(props);
	  	_navigator=this.props.navigator;
		  this.state = {};
		    console.warn("BaseView");
		}
};

module.exports = BaseView;
