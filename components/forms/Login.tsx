import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { s } from "../styles";

export default function LoginForm() {
  return (
    <View className="gap-2 p-4">
      <Text className="text-neutral-500">Email address:</Text>
      <TextInput
        className={`${s.input.className} mb-2`}
        placeholder="example@example.com"
      />
      <Text className="text-neutral-500">Password:</Text>
      <TextInput
        className={`${s.input.className} mb-2`}
        placeholder="enter password"
        secureTextEntry
      />
      <Pressable className={`${s.btn.secondaryClass}`}>
        <Text className="text-neutral-100">Login</Text>
      </Pressable>
    </View>
  );
}
