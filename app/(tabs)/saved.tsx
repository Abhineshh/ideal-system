import {
  View,
  FlatList,
  Text,
  Pressable,
  ScrollView,
  RefreshControl,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
import EventCard from "@/components/EventCard";

interface event {
  name: string;
  description: string;
  time: string;
  date: string;
  mode: string;
  image: string;
  isPaymentRequired: boolean;
}

export default function Page() {
  const [searchText, setSearchText] = useState<string>("");
  const [categories, setCategories] = useState<Array<string>>([
    "All",
    "Science",
    "Engineering",
    "Mathematics",
  ]);
  const [currentCategory, setCurrentCategory] = useState<number>();
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
        ListHeaderComponent={() => {
          return (
            <ScrollView horizontal className=" gap-3 mx-2 py-4">
              {categories.map((category, index) => {
                return (
                  <Pressable
                    onPress={() => {
                      setCurrentCategory(index);
                    }}
                    className={`${
                      index == currentCategory ? "bg-blue-600" : "bg-white"
                    } py-2 px-4 rounded-lg`}
                  >
                    <Text
                      className={`${
                        index == currentCategory && "text-white"
                      } text-lg`}
                    >
                      {category}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
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
