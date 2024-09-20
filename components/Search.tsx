import { View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Search({
  searchText,
  handleChangeText,
  onSearch,
}: {
  searchText: string;
  handleChangeText: (e: any) => void;
  onSearch: () => void;
}) {
  return (
    <View className="flex-row w-full bg-white rounded-lg focus:border-2 focus:border-red-600">
      <View className="flex-1 ">
        <TextInput
          placeholder="Search for events"
          value={searchText}
          onChangeText={handleChangeText}
          className="text-lg py-3 pl-3"
        />
      </View>
      <Pressable
        onPress={onSearch}
        className=" h-[54px] w-14  justify-center items-center"
      >
        <Ionicons name="search" size={24} color={"red"} />
      </Pressable>
    </View>
  );
}
