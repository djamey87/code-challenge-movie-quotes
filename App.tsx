import { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BottomDrawer, {
  BottomDrawerMethods,
} from "react-native-animated-bottom-drawer";

import styles from "./styles";

export default function App() {
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Button
        title="Add Quote"
        onPress={() => bottomDrawerRef.current?.open()}
      />
      <StatusBar style="auto" />

      <BottomDrawer ref={bottomDrawerRef}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.contentContainer}
        >
          <Text>Add your movie quote</Text>

          <TextInput
            style={{ ...styles.input, ...styles.marginTop12 }}
            numberOfLines={6}
            multiline={true}
            placeholder="Keep the change ya filthy animal!"
          ></TextInput>

          <View style={styles.marginTop12}>
            <Button title="Add" onPress={() => {}} />
          </View>
        </KeyboardAvoidingView>
      </BottomDrawer>
    </View>
  );
}
