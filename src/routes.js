import React from 'react';
import {createAppContainer} from 'react-navigation';
import { Image } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const Routes = createAppContainer(
  createStackNavigator({
    Feed
  },{
    headerLayoutPreset: 'left',
    defaultNavigationOptions: {
	headerTitle: <Image source={logo}  />,
	headerStyle: {
	 backgroundColor: '#f5f5f5',
	},
    },
  }
)
);

export default Routes;
