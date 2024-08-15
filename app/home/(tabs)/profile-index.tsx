import { View, Text } from '@/components/Themed'
import React from 'react'
import { ScrollView } from 'react-native'
import ProfileList from '@/components/profile/ProfileList'
import { useAppTheme } from '@/hooks'

export default function Profile() {
  const {bg} = useAppTheme();
  
  return (
    <ScrollView style={{backgroundColor: bg}}>
      <View className='h-6' />
      <ProfileList />

    </ScrollView>
  )
}