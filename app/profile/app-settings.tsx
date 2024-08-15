import { View as _View, Text, ScrollView, FlatList } from 'react-native'
import { View } from '@/components/Themed';
import React from 'react'
import { useBottomSheet } from '@/components/modals/AppBottomSheet'
import { paths } from '@/utils/paths';
import ListTile from '@/components/ui/ListTile';
import {ThemeModal} from '@/components/modals/ThemeModal';
import { s } from '@/components/styles';
import { useAppTheme } from '@/hooks';

export default function AppSettingsScreen() {
  
    const {ref, openModal, closeModal} = useBottomSheet()

    
const items = [
  {
    title: "Theme",
    icon: "person",
    href: paths.profileSettings,
    onClick: openModal
  },
  {
    title: "App Settings",
    icon: "settings",
    href: paths.appSettings,
  },
];


const {bg} = useAppTheme()

  return (
    
    <>
    <ScrollView style={{backgroundColor: bg}}>
      <_View className='h-6' />
        <_View className="px-4">
      <View className="rounded-lg  bg-light dark:bg-black">
        <FlatList
          scrollEnabled={false}
          data={items}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListTile
              {...item}
              underline={items.indexOf(item) !== items.length - 1}
            />
          )}
        />
      </View>
    </_View>
    </ScrollView>
    <ThemeModal ref={ref} />
    </>
  )
}