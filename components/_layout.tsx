import Colors from '@/constants/Colors'
import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

const AppLayout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Slot />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  content: {
    flex: 1,
    padding: 16,
  },
})

export default AppLayout
