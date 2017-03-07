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

    ReactNativeUA.enable_geolocation(); // prompt user to enable geolocation

    ReactNativeUA.enable_action_url(); // enable url action

    ReactNativeUA.handle_background_notification(); // handle notifications when app is in background

    ReactNativeUA.add_tag('tag'); // set tag to the user

    ReactNativeUA.set_named_user_id('user_id'); // set named user id

    ReactNativeUA.set_quiet_time_enabled(true); // activate a quiet period

    ReactNativeUA.set_quiet_time({
      startHour: 22,
      startMinute: 0,
      endHour: 7,
      endMinute: 0
    }); // set the period to 22:00-07:00
  }

  componentWillMount() {

    let e;
    ReactNativeUA.on_notification((notification) => {
      console.log('notification:',
                  notification.url, // if action url is disabled
                  notification.platform,
                  notification.event,
                  notification.alert,
                  notification.data);

      alert(notification.alert);
    });

    // Check if user enabled notifications
    ReactNativeUA.are_notifications_enabled().then(enabled => {
      console.log('notifications enabled:', enabled);
      if (enabled) {
        ReactNativeUA.get_channel_id().then(channelId => {
          console.log('channel id:', channelId);
        });
      }
    });

    // Get channel id for device
  }

  render () {
    return (
      <View>
        <Text>ReactNativeUA</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeUASampleApp', () => ReactNativeUASampleApp);
