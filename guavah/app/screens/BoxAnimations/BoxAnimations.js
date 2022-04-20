import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);



export default class App extends React.Component {
  state = {
    w: 130,
    h: 300,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 50, h: this.state.h + 50});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} >
          <TouchableOpacity style = {styles.button} onPress={this._onPress}/>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 20
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    flex: 1,
    opacity: 0
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

