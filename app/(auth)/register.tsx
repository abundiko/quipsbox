import { View, Text, ScrollView } from "react-native";
// import React from "react";
import RegisterForm from "@/components/forms/Register";

export default function login() {
  return (
    <ScrollView className="flex-1">
      <View>
        <View className="gap-y-4 p-4">
          <Text className="text-4xl font-semibold">Join QuipsBox</Text>
          <Text className="text-sm text-neutral-500 leading-tight max-w-[80%]">
            join other crazy people and start bantering on quips
          </Text>
        </View>
        <RegisterForm />
      </View>
    </ScrollView>
  );
}
