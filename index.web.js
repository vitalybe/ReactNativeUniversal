import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FriendsList from './FriendsList';

const friends = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Miller',
    avatarUrl: 'https://placehold.it/100x100',
  },
  {
    id: 2,
    firstName: 'Kate',
    lastName: 'Smith',
    avatarUrl: 'https://placehold.it/100x100',
  },
  {
    id: 3,
    firstName: 'Kevin',
    lastName: 'Yang',
    avatarUrl: 'https://placehold.it/100x100',
  },
];

class ReactNativeWeb extends Component {
  render() {
    return <FriendsList friends={friends}/>;
  }
}

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);
AppRegistry.runApplication('ReactNativeWeb', {rootTag: document.getElementById('react-app')});
