import { View, Text, Image } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view';

const dummyAds = [
    {
        uri: "https://images.unsplash.com/photo-1636690498207-d7b393423b9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2RufGVufDB8fDB8fHww",
        href: "https://www.google.com"
    },
    {
        uri: "https://plus.unsplash.com/premium_photo-1671466192309-287ab1e6d43a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZXMlMjBiYWxsfGVufDB8fDB8fHww",
        href: "https://www.google.com"
    },
    {
        uri: "https://images.unsplash.com/photo-1524015368236-bbf6f72545b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtZXMlMjBiYWxsfGVufDB8fDB8fHww",
        href: "https://www.google.com"
    },
]

export default function AdsView() {
  return (
    <View className='w-full h-60 rounded-xl shadow-lg bg-neutral-300'>
      <PagerView initialPage={0}>
        {
            dummyAds.map((ad, index) => (
                <View key={index} className=' rounded-lg overflow-hidden bg-red-300'>
                    <Image source={{ uri: ad.uri }} className='w-full h-full' />
                </View>
            ))
        }
      </PagerView>
    </View>
  )
}