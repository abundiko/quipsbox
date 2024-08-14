import { Stack } from "expo-router";
import AppBar from "@/components/app/AppBar";

export default function _layout() {
  return (
    <Stack>
      
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* {
        ['index'].map((name) => (
          <Stack.Screen
            key={name}
            name={name}
            options={{
              headerShown: false,
            }}
          />
        ))
      } */}
    </Stack>
  );
}
