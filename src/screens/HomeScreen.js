import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

export default function HomeScreen({navigation}) {

  const goToPage = () =>{
    navigation.navigate('settings')

  }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button onPress={goToPage} title="Ir a ajustes"/>
    </SafeAreaView>
  )
}