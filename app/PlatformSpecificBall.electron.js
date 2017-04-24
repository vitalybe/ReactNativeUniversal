import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Service from './service'

const image = require('../images/electron.png')

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
});

export default class PlatformSpecificBall extends Component {
  constructor(props) {
    super(props);
    this.service = new Service();
  }

  render() {

    return (
      <TouchableOpacity onPress={() => this.service.func()}>
        <Image style={styles.image} source={image} />
      </TouchableOpacity>
    );
  }
}