/**
 * React Native macOS App using App Opener
 * https://github.com/andrerfneves/react-native-macos-app-opener
 */
import React from 'react';
import { AppRegistry, StyleSheet, View, Button } from 'react-native-macos';
import AppOpener from 'react-native-macos-app-opener';

const macOSAppOpenerExample = React.createClass({
  render() {
    const appNames = [
      'Finder',
      'Safari',
      'System Preferences',
      'App Store',
    ];

    return (
      <View style={styles.container}>
        {appNames.map((appName, index) => (
          <Button
            onClick={() => {
              console.log(`${appName} was launched.`);
              AppOpener.openApp(appName);
            }}
            key={index}
            title={`Open ${appName}`}
            color='#841584'
            style={{ width: 300 }}
          />
        ))}
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('macOSAppOpenerExample', () => macOSAppOpenerExample);
