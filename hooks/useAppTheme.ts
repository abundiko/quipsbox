import { StatusBarStyle } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useMemo } from "react";

const light = {
  bg: "#fff",
  bg2: "#f9f9f9",
  text: "#222",
  textLight: "#555",
  primary: "#0070f3",
  statusBar: 'dark' as StatusBarStyle
};

const dark = {
  bg: "#000",
  bg2: "#111",
  text: "#eee",
  textLight: "#aaa",
  primary: "#0070f3",
  statusBar: 'light' as StatusBarStyle
};

export function useAppTheme() {
  const { colorScheme } = useColorScheme();
  const colors = useMemo(
    () => (colorScheme === "dark" ? dark : light),
    [colorScheme]
  );
  return colors;
}
