import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
import EventCard from "@/components/EventCard";
import { StatusBar } from "expo-status-bar";

interface event {
  name: string;
  description: string;
  time: string;
  date: string;
  mode: string;
  image: string;
  isPaymentRequired: boolean;
}

export default function register() {
  const [searchText, setSearchText] = useState<string>("");
  const [eventsList, setEventList] = useState<Array<event>>([
    {
      name: "Mathematics in Universe",
      description:
        "We will talk about mathematics in the universal scale at IISc Bangalore",
      time: "9am ",
      date: "26th september",
      mode: "offline",
      image: "",
      isPaymentRequired: false,
    },
  ]);
  const [refreshing, setrefreshing] = useState(false);

  const onRefresh = async () => {
    setrefreshing(true);

    setrefreshing(false);
  };

  const handleSearch = () => {
    console.log("Search pressed:", searchText);
  };

  return (
    <SafeAreaView className="h-full">
      <View className="mb-4 mt-4 px-4">
        <Search
          searchText={searchText}
          handleChangeText={setSearchText}
          onSearch={handleSearch}
        />
      </View>
      <FlatList
        data={eventsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                Alert.alert("you clicked", item.name);
              }}
            >
              <EventCard event={item} />
            </Pressable>
          );
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
