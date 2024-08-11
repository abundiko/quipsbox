import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import AppBar from '@/components/app/AppBar'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='login'
        options={{
            header: (props)=><AppBar {...props} />
        }}
        ></Stack.Screen>
    </Stack>
  )
}