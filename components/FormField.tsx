import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface formfields {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (e: any) => void;
  otherStyles: string;
}

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: formfields) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles} my-2`}>
      <Text className="text-lg ">{title}</Text>

      <View className="w-full h-16 px-4 bg-white  rounded-lg focus:border-2 focus:border-red-600 flex flex-row items-center">
        <TextInput
          className="text-lg flex-1"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <Ionicons name="eye" size={24} color="red" />
            ) : (
              <Ionicons name="eye-off" size={24} color="red" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
