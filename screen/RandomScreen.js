import React from 'react';
import { View, Text, Button } from 'react-native';

export default function RandomScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Random Screen</Text>
      <Button
        title="Go back to Journal"
        onPress={() => navigation.navigate('Journal')}
      />
    </View>
  );
}
