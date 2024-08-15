import {
  View,
  Text,
  StyleSheet,
  useColorScheme as _sysTheme,
  FlatList,
} from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React, { forwardRef } from "react";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import ListTile from "../ui/ListTile";

export const ThemeModal = forwardRef<any>((props, ref) => {
  const sysTheme = _sysTheme();
  const { colorScheme, setColorScheme } = useColorScheme();

  const items = [
    {
      title: "Dark",
      icon: "moon",
    },
    {
      title: "Light",
      icon: "sunny",
    },
  ];

  return (
      <BottomSheetModal
        ref={ref}
        backdropComponent={CustomBackdrop}
        snapPoints={["40%", "42%"]}
      >
        <BottomSheetView
        style={{height: 400}} className="flex-1 p-6 justify-center items-center">
          <View className="flex-1 p-4">
            <Text className="text-2xl font-semibold mb-4">Change Theme</Text>
            <View className="rounded-lg border border-neutral-200 bg-light">
              <FlatList
                scrollEnabled={false}
                data={items}
                className=""
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => (
                  <ListTile
                    {...item}
                    underline={items.indexOf(item) !== items.length - 1}
                    onClick={() => {
                      setColorScheme(
                        item.title.toLowerCase() === "dark"
                         ? "dark"
                          : "light"
                      );
                    }}
                  />
                )}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
  );
});

import { useMemo } from "react";
import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const CustomBackdrop = ({ animatedIndex, style }: BottomSheetBackdropProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [1, 1],
      [1, 1],
      Extrapolate.CLAMP
    ),
  }));

  // styles
  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "#00000066",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View style={containerStyle} />;
};
