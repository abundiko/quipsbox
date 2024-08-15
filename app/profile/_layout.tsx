import React from 'react'
import { Stack } from 'expo-router'
import AppBar from '@/components/app/AppBar'

const screens = [
  {
    name: "app-settings",
    title: "App Settings",
    // headerShown: false,
  },
  {
    name: "profile-settings",
    title: "Profile Settings",
  },
]

export default function _layout() {
  return (
    <Stack >
        {screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            options={{
              title: screen.title,
              header: (props) => <AppBar {...props} />,
            }}
          />
        ))
      }
    </Stack>
  )
}