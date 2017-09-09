import React, {Component} from 'react';
import {Animated, Image, StyleSheet, TouchableOpacity,} from 'react-native';

const image = require('../images/Smiley.png');

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10,
    }
});


export default class Ball extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            <Animated.View style={[styles.ball, {transform: [{translateX: this.state.translateValue}]}]}>
                <TouchableOpacity onPress={() => this.animate()}>
                    <Image style={styles.image} source={image}/>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}