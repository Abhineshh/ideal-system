import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TabIcon = ({
  icon,
  name,
  focused,
}: {
  icon: string;
  name: any;
  focused: boolean;
}) => {
  return (
    <View className="items-center h-20">
      <Ionicons
        name={`${icon}`}
        color={`${focused ? "blue" : "red"}`}
        size={24}
      />
      <Text className={`${focused ? "font-bold" : "font-normal"} text-lg`}>
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: 30,
          margin: 5,
          borderRadius: 10,
        },
        tabBarBadgeStyle: {
          borderWidth: 2,
          borderColor: "red",
        },
        // swipeEnabled: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => {
            return <TabIcon icon={"home"} name="Home" focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "My Events",
          tabBarIcon: ({ color, focused }) => {
            return (
              <TabIcon icon={"calendar"} name="Events" focused={focused} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ color, focused }) => {
            return <TabIcon icon={"add"} name="Create" focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color, focused }) => {
            return <TabIcon icon={"bookmark"} name="Saved" focused={focused} />;
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => {
            return <TabIcon icon={"person"} name="Profile" focused={focused} />;
          },
        }}
      />
    </Tabs>
  );
}
