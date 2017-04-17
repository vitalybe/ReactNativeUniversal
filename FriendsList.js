import React, {Component} from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Service from './app/service'

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
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      ds: ds.cloneWithRows(props.friends),
      translateValue: new Animated.Value(0),
    };
  }

  animate() {
    Animated.sequence([
      Animated.timing(this.state.translateValue, {
        toValue: 50,
        duration: 200,
      }),
      Animated.timing(this.state.translateValue, {
        toValue: -50,
        duration: 200,
      }),
      Animated.timing(this.state.translateValue, {
        toValue: 0,
        duration: 200,
      })
    ]).start();
  }

  render() {

    return (
      <ListView
        dataSource={this.state.ds}
        style={styles.list}
        renderRow={(friend) =>
          <Animated.View  style={[styles.friend, { transform: [{ translateX: this.state.translateValue }]}]}>
            <TouchableOpacity onPress={() => this.animate()}>
              <Text>Click me!</Text>
            </TouchableOpacity>
            <Image style={styles.avatar} source={{ uri: friend.avatarUrl }} />
            <Text style={styles.name}>{friend.firstName} {friend.lastName}</Text>
          </Animated.View>
        }/>
    );
  }
}