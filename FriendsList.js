import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  friend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    color: '#000',
  }
});

export default class FriendsList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds.cloneWithRows(props.friends),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.ds}
        style={styles.list}
        renderRow={(friend) =>
          <View style={styles.friend}>
            <Image style={styles.avatar} source={{ uri: friend.avatarUrl }} />
            <Text style={styles.name}>{friend.firstName} {friend.lastName}</Text>
          </View>
        } />
    );
  }
}