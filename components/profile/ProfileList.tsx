import { FlatList, View as _View } from "react-native";
import {View} from '@/components/Themed'
import React from "react";
import { paths } from "@/utils/paths";
import { useRouter } from "expo-router";
import ListTile from "../ui/ListTile";

export default function ProfileList() {
  const { push } = useRouter();

  return (
    <_View className="px-4">
      <View className="rounded-lg ">
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
  );
}

const items = [
  {
    title: "Profile Settings",
    icon: "person",
    href: paths.profileSettings,
  },
  {
    title: "App Settings",
    icon: "settings",
    href: paths.appSettings,
  },
];
