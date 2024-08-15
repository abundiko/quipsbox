import { Stack } from "expo-router";
import AppBar from "@/components/app/AppBar";

export default function _layout() {
  return (
    <Stack>
      {
        ['index', 'login', 'register'].map((name) => (
          <Stack.Screen
            key={name}
            name={name}
            options={{
              header: (props) => <AppBar {...props} />,
            }}
          />
        ))
      }
    </Stack>
  );
}
