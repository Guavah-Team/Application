import React, {Component} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import BoxAnimations from '../BoxAnimations';

export default class MoveX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(0),
      endValue: '95%',
      duration: 500,
    };
  }

  componentDidMount() {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
      
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.square,{transform: [{translateX: this.state.startValue,},],},]}
        >
            <BoxAnimations/>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    
  },
});