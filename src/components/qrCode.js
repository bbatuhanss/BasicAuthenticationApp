import React, { Component } from 'react';
import { AccessibilityInfo, View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';

class AccessibilityStatusExample extends Component {
  state = {
    reduceMotionEnabled: false,
    screenReaderEnabled: false,
  };

  componentDidMount() {
    AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      this._handleReduceMotionToggled
    );
    AccessibilityInfo.addEventListener(
      'screenReaderChanged',
      this._handleScreenReaderToggled
    );

    AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled => {
      this.setState({ reduceMotionEnabled });
    });
    AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled => {
      this.setState({ screenReaderEnabled });
    });
  }

  componentWillUnmount() {
    AccessibilityInfo.removeEventListener(
      'reduceMotionChanged',
      this._handleReduceMotionToggled
    );

    AccessibilityInfo.removeEventListener(
      'screenReaderChanged',
      this._handleScreenReaderToggled
    );
  }

  _handleReduceMotionToggled = reduceMotionEnabled => {
    this.setState({ reduceMotionEnabled });
  };

  _handleScreenReaderToggled = screenReaderEnabled => {
    this.setState({ screenReaderEnabled });
  };

  render() {
    return (
      <View style={this.styles.container}>
          <TouchableOpacity activeOpacity={0.5} onPress={() =>this.props.changePage('homePage')} style={this.styles.TouchableOpacityStyle} >
                    <Image source={require('./images/ok.png')}  style={this.styles.FloatingButtonStyle} />
        </TouchableOpacity>
        <Text style={this.styles.headerText}> QR Scan</Text>
        <Text style={this.styles.nulltext}>  </Text>
        <Text style={this.styles.status}>
          The reduce motion is{' '}
          {this.state.reduceMotionEnabled ? 'enabled' : 'disabled'}.
        </Text>
        <Text style={this.styles.status}>
          The screen reader is{' '}
          {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
        </Text>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    status: {
      margin: 30,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        left: 165,
        bottom: 600,
        fontSize:20,
        alignSelf:'flex-start',
        margin:10,
        color:'black',
        marginTop:5,
        fontWeight: 'bold',
      },
    nulltext:{
        borderBottomWidth:0.4,
        width:420,
        position: 'absolute',
        bottom: 600,
     },
    TouchableOpacityStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        left: 20,
        bottom: 605,
      },
      TouchableOpacityCrCodeStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        right:20,
        bottom: 605,
      
      },
      FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 30,
        height: 30  ,
      },
  });
}

export default AccessibilityStatusExample;