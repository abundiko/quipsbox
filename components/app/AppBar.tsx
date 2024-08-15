import { View, Text, Pressable } from "react-native";
// import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StatusBar as sb } from "react-native";
import { useAppTheme } from '@/hooks';

export default function AppBar(props: any) {
  const {text, bg, statusBar} = useAppTheme();
  const n = useNavigation();
  return (
    <View style={{
      height: 80 + (sb.currentHeight ?? 12),
      paddingTop: (sb.currentHeight ?? 12),
      backgroundColor: 'red'
    }} className="flex-row justify-between items-center px-4 gap-4">
      <StatusBar style={statusBar}/>
      <Pressable className="p-2" onPress={()=>n.goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
      </Pressable>
      <Text style={{color:text}} className="flex-1 text-lg font-semibold">
        {props.options.title ?? ""}
      </Text>
    </View>
  );
}
