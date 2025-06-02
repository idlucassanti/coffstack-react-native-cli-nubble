import React from 'react';
import { View } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {

  return (
    <View>
      <Text preset='headingLarge' style={{ color: 'red' }}>Hello World!</Text>
    </View>
  );
}

export default App;
