import { View, Text } from '@/components/Themed'
import React from 'react'
import { StatusBar as sb } from "react-native";
import { Link } from 'expo-router';
import { paths } from '@/utils/paths';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';

export default function TopBar() {
  return (
    <View style={{
      height: 60 + (sb.currentHeight ?? 12),
      paddingTop: (sb.currentHeight ?? 12)
    }} className='flex-row px-4 border-b border-neutral-200 items-center justify-between'>
        <Link href={paths.profile}>
            <View className='h-10 w-10 rounded-full items-center justify-center border border-neutral-200 bg-neutral-300'>
                <FontAwesome name='user' size={20} />
            </View>
        </Link>
      <Text className='w-fit text-lg font-bold text-center'>QuipsBox</Text>
        <Link href={paths.notifications}>
            <View className='h-10 w-10 rounded-full items-center justify-center border border-neutral-200 bg-neutral-300'>
                <FontAwesome name='bell' size={20} />
            </View>
        </Link>
    </View>
  )
}