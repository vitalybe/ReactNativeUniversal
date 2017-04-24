import React, { Component } from 'react';
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import PlatformSpecificBall from './PlatformSpecificBall'

const smileyImage = require('../images/Smiley.png')

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  list: {
    width: 200,
  },
  title: {
    margin: 20,
  },
  listContainer: {
    alignItems: 'center'
  }, 
  ball: {
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

export default class BallsList extends Component {


  constructor(props) {
    super(props);

    this.balls = [1, 2, 3].map(i => ({ id: i, avatarUrl: smileyImage }))

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds.cloneWithRows(this.balls),
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
      <View style={styles.main}>
        <Text style={styles.title}>Common components (click us)</Text>
        <ListView
          dataSource={this.state.ds}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          renderRow={(ball) =>
            <Animated.View style={[styles.ball, { transform: [{ translateX: this.state.translateValue }] }]}>
              <TouchableOpacity onPress={() => this.animate()}>
                <Image style={styles.avatar} source={ball.avatarUrl} />
              </TouchableOpacity>
            </Animated.View>
          } />
        <Text style={styles.title}>Platform specific components (click us)</Text>
        <PlatformSpecificBall />
          
      </View>
    );
  }
}