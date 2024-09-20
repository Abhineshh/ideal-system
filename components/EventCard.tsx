import { View, Text, Image } from "react-native";
import React from "react";
import icons from "@/constants/icons";

export default function EventCard({ event }: { event: Object }) {
  console.log(event);
  return (
    <View className="m-4 p-4 bg-white rounded-lg">
      <View className="flex-row text-ellipsis">
        {/* <Image source={event.image && icons.reactback} className="w-3/4 h-28" /> */}
        <View className="gap-2">
          <Text>at {event.time}</Text>
          <Text>on {event.date}</Text>
          <Text>{event.mode} mode</Text>
          <Text>
            entrance is {`${event.isPaymentRequired ? "paid" : "free"}`}
          </Text>
        </View>
      </View>
      <Text className=" font-semibold text-lg className='text-lg ">
        {event.name}
      </Text>
      <Text>{event.description}</Text>
    </View>
  );
}
