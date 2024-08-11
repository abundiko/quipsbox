import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AppBar(props: any) {
  const n = useNavigation();
  return (
    <View className=" h-20 bg-red-200 flex-row justify-between items-center px-4 gap-4">
      <StatusBar style="dark" />
      <Pressable onPress={()=>n.goBack()}>
        <Feather name="chevron-left" size={24} color="black" />
      </Pressable>
      <Text className="flex-1 text-lg font-semibold">
        {props.options.title ?? ""}
      </Text>
    </View>
  );
}
