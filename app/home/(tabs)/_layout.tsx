import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "@/hooks";

const tabs = [
  {
    name: "index",
    title: "Home",
    headerShown: false,
    icons: ["home", "home-outline"] as any[],
  },
  {
    name: "rooms",
    title: "Rooms",
    icons: ["grid", "grid-outline"] as any[],
  },
  {
    name: "notifications",
    title: "Notifications",
    icons: ["notifications", "notifications-outline"] as any[],
  },
  {
    name: "profile-index",
    title: "Profile",
    icons: ["person", "person-outline"] as any[],
  },
];

export default function _layout() {
  const { text, textLight, bg } = useAppTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: { ...styles.tabBarStyle, backgroundColor: bg },
        tabBarShowLabel: false,
      }}
    >
      {tabs.map((tab) => {
        return (
          <Tabs.Screen
          
            key={tab.name}
            name={tab.name}
            options={{
              headerShown: tab.headerShown,
              title: tab.title,
              tabBarIcon: ({ focused }) => (
                <View
                  style={{ backgroundColor: bg }}
                  className="items-center justify-center h-full mb-4"
                >
                  <Ionicons
                    name={focused ? tab.icons[0] : tab.icons[1]}
                    size={28}
                    color={focused ? text : textLight}
                  />
                  <Text
                    style={{
                      color: focused ? text : textLight,
                    }}
                    className={`text-sm text-center`}
                  >
                    {tab.title}
                  </Text>
                </View>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    elevation: 0,
    borderRadius: 16,
    height: 80,
    shadowColor: "#00000033",
    shadowRadius: 10,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00000011",
  },
});
