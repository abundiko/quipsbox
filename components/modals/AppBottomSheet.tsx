import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet';

export function useBottomSheet(){
    
    const ref = useRef<BottomSheetModal>(null);
    function openModal() {
        ref.current?.present();
    }

    function closeModal() {
        ref.current?.dismiss();
    }

    return { ref, openModal, closeModal }
}

export default function AppBottomSheet() {
  return (
    <View>
      <Text>AppBottomSheet</Text>
    </View>
  )
}