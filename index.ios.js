/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import BallsList from './app/BallsList';

export default class ReactNativeUniversal extends Component {
    render() {
        return <BallsList/>;
    }
}

AppRegistry.registerComponent('ReactNativeUniversal', () => ReactNativeUniversal);
