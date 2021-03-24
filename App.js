import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

const App = () => {
  return (
    <View accessibilityLabel={'Home'} testID="Home">
      <Text>{'home'}</Text>
      <Button testID="click" title={'click'} accessibilityLabel='click' onPress={() => Alert.alert('Hello')} />
    </View>
  );
};

export default App;
