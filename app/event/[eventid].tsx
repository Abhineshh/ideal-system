import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams, usePathname } from "expo-router";

export default function Page() {
  const { pathname } = useLocalSearchParams();
  return (
    <View>
      <Text>Page{pathname}</Text>
    </View>
  );
}
