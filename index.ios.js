import ReactNativeUA from 'react-native-ua';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


class ReactNativeUASampleApp extends Component {

  constructor(props) {
    super(props);

    ReactNativeUA.enable_notification();

    ReactNativeUA.add_tag("react-native-ua-ios");
    ReactNativeUA.setNamedUserId("wild123");

    ReactNativeUA.on_notification((notification) => {
      console.log(notification.platform,
                  notification.event,
                  notification.alert,
                  notification.data);

      alert(notification.alert);
    });

    ReactNativeUA.getNamedUserId((error, namedUserId) =>{
      console.log(error, namedUserId);
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ReactNativeUA iOS</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('ReactNativeUASampleApp', () => ReactNativeUASampleApp);
