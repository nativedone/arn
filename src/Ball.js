import React, { Component } from 'react'
import { Animated, View, StyleSheet } from 'react-native'

class Ball extends Component {
    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0) // what is the current position of the animated object
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 } // where the animation is moving to
        }).start()
    }

    render() {
        return (
            // which element we will animate
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball} />
            </Animated.View>

        )
    }
}

const styles = StyleSheet.create({
    ball: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
    }
})

export default Ball