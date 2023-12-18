import React from 'react';
import { View, Text, Button } from 'react-native';

export default function JournalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Journal Screen</Text>
      <Button
        title="Go to Desires"
        onPress={() => navigation.navigate('Desires')}
      />
    </View>
  );
}
