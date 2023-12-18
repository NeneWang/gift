import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DesiresScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Desires Screen</Text>
      <Button
        title="Go to Random"
        onPress={() => navigation.navigate('Random')}
      />
    </View>
  );
}
