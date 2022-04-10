import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import VerticalRestaurantBox from '../../components/VerticalRestaurantBox';
import {useNavigation} from '@react-navigation/native';
import colors from '../../config/colors/colors';
import {useFonts} from 'expo-font';



const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

  const item = ["testName", 2, 20, null];

export default class App extends React.Component {
  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 80, h: this.state.h + 80})
  }

  

  render() {
    return (
      <View style={styles.container}>
        <View style={containerStyles.container}>
            <View style={containerStyles.topBox}>

            </View>
            <View style={containerStyles.headerContainer}>
                {/* <View style={containerStyles.headerTextContainer}> */}
                    <Text style={textStyle.text}>{`Which was better?`}</Text>
                    <Text style={textStyle.textSmall}>Tap One</Text>
                {/* </View> */}
            </View>

            <View style={containerStyles.profileImageContainer}>
                <Image style = {componentStyle.topImage} source = {require('../../assets/icon.png')}/>
            </View>
            <View style={[styles.box2, {width: this.state.w, height: this.state.h}]}>
            <TouchableOpacity onPress={this._onPress} style = {{opacity: 1, flex: 1}}/>
            </View>
            <View style={containerStyles.versusContainer}>
                {/* <Text style={textStyle.versusText}>Which was better?</Text>
                <Text style={textStyle.versusTextSmall}>This decision will impact their rank.</Text> */}
                <View style={containerStyles.versusRestaurantContainer}>
                    {/* <VerticalRestaurantBox restaurant={item} type={'LARGE'}/>
                    <VerticalRestaurantBox restaurant={item} type={'LARGE'}/> */}
                </View>
            </View>

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
  box2: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    opacity: 1,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const containerStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    topBox: {
        position: 'absolute',
        height: 400,
        width: 600,
        backgroundColor: colors.accent,
        transform: [{skewY: '-20deg'}, {translateX: -100}, {translateY: -225}], 
    },
    headerContainer: {
        // backgroundColor: colors.accent,
    },
    headerTextContainer: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImageContainer: {
        marginLeft: '6%',
        marginRight: '6%',
        marginBottom: '10%',
        alignItems: 'center',
    },
    versusContainer: {
        flex: 1,
        maxHeight: '100%',
        // marginTop: '45%',
    },

    versusRestaurantContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
        
})

    const componentStyle = StyleSheet.create({
        topImage: {
            height: 132,
            width: 132,
            borderRadius: 1000,
            marginTop: '0%',
        },
    })

    const textStyle = StyleSheet.create({
        text: {
            color: colors.background,
            // color: colors.accent,
            textAlign: 'center',
            textAlignVertical: 'bottom',
            fontSize: 30,
            fontFamily: 'GigaSansSemiBold',
            marginTop: '15%',
            marginBottom: '0%',

    
            // marginBottom: '10%',
    
            // ...Platform.select({
            //     android: {
            //         marginTop: '10%',
            //     },
            // })
        },

        textSmall: {
            color: colors.background,
            textAlign: 'center',
            fontSize: 18,
            marginBottom: '10%',
            fontFamily: 'GigaSansReg',
        },

        versusText: {
            color: colors.accent,
            textAlign: 'center',
            fontSize: 30,
            marginTop: '40%',
        },

        versusTextSmall: {
            color: colors.accent,
            // color: 'black',
            textAlign: 'center',
            fontSize: 16,
            marginTop: '0%',
        },
    });