import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useState } from "react";
import FormField from "@/components/FormField";
import * as DocumentPicker from "expo-document-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

interface EventForm {
  title: string;
  description: string;
  thumbnail: any;
  time: string;
  date: string;
  isPaymentRequired: string;
  price: number;
}

export default function Page() {
  const [form, setform] = useState<EventForm>({
    title: "",
    description: "",
    thumbnail: null,
    time: "",
    date: "",
    isPaymentRequired: "",
    price: 0,
  });

  const openPicker = async (selectType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type: ["image/png", "image/jpg", "image/jpeg"],
    });

    if (!result.canceled) {
      if (selectType === "image") {
        setform({ ...form, thumbnail: result.assets[0] });
      }
      if (selectType === "video") {
        setform({ ...form, video: result.assets[0] });
      }
    }
    // else {
    //   setTimeout(() => {
    //     Alert.alert("Document Picked", JSON.stringify(result, null, 2));
    //   }, 100);
    // }
  };

  return (
    <SafeAreaView>
      <ScrollView className="px-4">
        <Text className="text-2xl font-semibold text-blue-600">
          Start a Event
        </Text>
        <FormField
          title="Event Title"
          value={form.title}
          placeholder="Give your Event a title..."
          handleChangeText={(e) => setform({ ...form, title: e })}
        />

        <View className="my-7 space-y-2">
          <Text className="text-lg">Upload Thumbnail Image</Text>
          <Pressable
            onPress={() => {
              openPicker("image");
            }}
          >
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode="cover"
                className="w-full h-64 rounded-lg"
              />
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-lg justify-center items-center border2 border-red-600 bg-white flex-row space-x-2">
                <Ionicons name="image" size={24} color="blue" />
                <Text className="text-lg font-pmedium">Choose a File</Text>
              </View>
            )}
          </Pressable>
        </View>
        <FormField
          title="Event Description"
          value={form.description}
          placeholder="Give your Event a description..."
          handleChangeText={(e) => setform({ ...form, description: e })}
          multiline={true}
        />
        <View className="my-2">
          <Text className="text-lg ">When is the Event?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
