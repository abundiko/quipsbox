import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TopBar from '@/components/home/TopBar'
import { StatusBar } from "expo-status-bar";
import AdsView from '@/components/app/AdsView';

export default function HomeScreen() {
  return (
    <View className='flex-1'>
      <StatusBar style="dark" />
      <TopBar />
      <View className='flex-1'>
        <ScrollView>
          <View className='gap-y-4 px-4 mt-6'>
            <AdsView />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}