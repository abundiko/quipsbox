
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '@/components/app/AppBar'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import { s } from '@/components/styles'

export default function index() {
  return (
    <View className='flex-1 bg-green-200'>
      <StatusBar  barStyle={"dark-content"} />
      <ImageBackground className='flex-1' source={require('../assets/images/bg.jpg')}>
      <LinearGradient 
      colors={["#fff", "transparent", "#ffffffaa", "#fff", "#fff"]}
      className='flex-1'
      >
      <View className='flex-1 justify-end py-10 px-4 gap-4'>
        <View className='gap-2'>
          <Text className='text-4xl font-semibold'>Where people of like and opposing passion colide</Text>
          <Text className='text-sm text-neutral-500 leading-tight'>welcome to Quipsbox, here we do all kinds of stuff. from this to that and the other we got u covered</Text>
        </View>
        <View className='flex-row gap-4'>
        <Link className={`${s.btn.primaryClass} flex-1`} href={"login"}>Login</Link>
        <Link className={`${s.btn.secondaryClass} flex-1`} href={"/register"}>Sign Up</Link>
        </View>
      </View>

      </LinearGradient>
      </ImageBackground>
      {/* <AppBar /> */}
      
    </View>
  )
}

const styles = StyleSheet.create({})