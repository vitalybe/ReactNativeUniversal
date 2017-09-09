import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import BallsList from './app/BallsList';

class ReactNativeWeb extends Component {
    render() {
        return <BallsList/>;
    }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', {rootTag: document.getElementById('react-app')});
