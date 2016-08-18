import ReactNativeUA from 'react-native-ua';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


class ReactNativeUrbanAirshipSample extends Component {

  constructor(props) {
    super(props);
  }

  _enableActionURL() {
    ReactNativeUA.enable_action_url();
  }

  _disableActionURL () {
    ReactNativeUA.disable_action_url();
  }

  render() {

    ReactNativeUA.enable_notification();
    ReactNativeUA.enable_geolocation();
    ReactNativeUA.handle_background_notification();
    ReactNativeUA.add_tag("tag-urban-react-native");
    ReactNativeUA.setNamedUserId("named-user");

    // add handler to handle all incoming notifications
    ReactNativeUA.on_notification((notification) => {
        console.log('notification:',
                    notification.url, // if action url is disabled
                    notification.platform,
                    notification.event,
                    notification.alert,
                    notification.data);

        alert(notification.alert + " " + notification.url);
    });

    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._enableActionURL}>
          <Text>Enable URL Action</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._disableActionURL}>
          <Text>Disable URL Action</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('ReactNativeUrbanAirshipSample', () => ReactNativeUrbanAirshipSample);
