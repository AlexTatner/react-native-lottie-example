import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
} from 'react-native';
import Animation from 'lottie-react-native';
import {Animations} from '../animations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animation
          style={{
            width: 400,
            height: 400,
          }}
          source={Animations.LottieLogo2}
          progress={this.state.progress}
        />
      </View>
    );
  }
}
