import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import Animation from 'lottie-react-native';
import { Animations } from '../animations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class ListOfAnimations extends Component {
  
  static navigationOptions = {
    title: 'List of animations',
  };
  render() {
    const { navigate } = this.props.navigation;
    return <List>
      {
        Object.keys(Animations).map((animation) => (
          <ListItem
            key={animation}
            title={animation}
            onPress={() => navigate('Animation', { animation })}
          />
        ))
      }
    </List>;
  }
}

class AnimationsScreen extends Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `${state.params.animation}`,
  };

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
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Animation
          style={{
            width: 400,
            height: 400,
          }}
          source={Animations[params.animation]}
          progress={this.state.progress}
        />
      </View>
    );
  }
}

export default class App extends Component {

  render() {
    const Navigator = StackNavigator({
      Home: { screen: ListOfAnimations },
      Animation: { screen: AnimationsScreen },
    });

    return (
      <View style={styles.container}>
        <Navigator/>
      </View>
    );
  }
}
