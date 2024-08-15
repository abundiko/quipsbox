import {Text} from '@/components/Themed'
import { Pressable, PressableProps } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useAppTheme } from '@/hooks'

type ListTileProps = PressableProps & {
    title: string
    icon: string
    href?: string
    underline?: boolean
    onClick?: () => void
    
}

export default function ListTile({className, ...item}: ListTileProps) {
    const {text, textLight} = useAppTheme();
    
  return (
    <Pressable
        onPress={item.onClick ? item.onClick : item.href ? () => router.push(item.href!) : undefined}
             className={`px-4 py-4 flex-row gap-4 items-center relative 
            ${item.underline ? 'border-b border-b-neutral-300 dark:border-b-neutral-600' : ''}
            ${className}
        `}>
            <Ionicons name={item.icon as any} size={20} color={text} />
            <Text className='text-lg flex-1'>{item.title}</Text>
            <Ionicons name="chevron-forward" color={textLight} />
        </Pressable>
  )
}