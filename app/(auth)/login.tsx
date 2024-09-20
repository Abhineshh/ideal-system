import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View>
      <Text>Page</Text>
      <Link href={"/event/93"}>go to envent 93</Link>
    </View>
  );
}
