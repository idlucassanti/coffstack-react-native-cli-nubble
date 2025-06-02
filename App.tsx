import React from 'react';
import { View } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {

  return (
    <View>
      <Text style={{ color: 'red', fontSize: 32, fontWeight: 700 }}>Hello World!</Text>
    </View>
  );
}

export default App;
