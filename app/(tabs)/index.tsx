import { Text, View, TouchableOpacity } from "react-native";

import useTheme from "@/Hooks/useTheme";
export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle the Mode</Text>
      </TouchableOpacity>
    </View>
  );
}
