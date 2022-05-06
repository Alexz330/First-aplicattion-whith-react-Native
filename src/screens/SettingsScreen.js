import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

export default function SettingsScreen({navigation}) {

  const goToPage = (pageName) =>{
    navigation.navigate(pageName);
  }

  return (
    <SafeAreaView>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Text>SettingsScreen</Text>
      <Button onPress={() => goToPage('Home')} title="Ir a Home"/>
    </SafeAreaView>
  )
}