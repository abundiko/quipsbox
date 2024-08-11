import { View, Text, ScrollView } from "react-native";
import React from "react";
import LoginForm from "@/components/forms/Login";

export default function login() {
  return (
    <ScrollView className="flex-1">
      <View>
        <View className="gap-4 p-4">
          <Text className="text-4xl font-semibold">Welcome Back</Text>
          <Text className="text-sm text-neutral-500 leading-tight max-w-[80%]">
            login to your quipsbox account and start bantering on quips
            immediately
          </Text>
        </View>
        <LoginForm />
      </View>
    </ScrollView>
  );
}
