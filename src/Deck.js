import React, { Component } from 'react'
import { Animated, View, StyleSheet } from 'react-native'

class Deck extends Component {
    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0) // what is the current position of the animated object
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 } // where the animation is moving to
        }).start()
    }

    renderCards = () => {
        return this.props.data.map((item) => {
            return this.props.renderCard(item)
        })
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
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

export default Deck