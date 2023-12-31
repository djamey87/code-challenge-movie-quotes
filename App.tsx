import { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import BottomDrawer, {
  BottomDrawerMethods,
} from "react-native-animated-bottom-drawer";

import styles from "./styles";
import { useQuotes } from "./hooks/useQuotes";
import { ThemedButton } from "./components/ThemedButton";
// import DragList, { DragListRenderItemInfo } from "react-native-draglist"; // tried and failed this implementation with expo

type ItemProps = {
  title: string;
  origin: string;
  renderButton: boolean;
  onUpPress: () => void;
};

const Item = ({ title, origin, renderButton, onUpPress }: ItemProps) => (
  <View style={styles.card}>
    <View style={{ flex: 1 }}>
      <Text>"{title}"</Text>
      <Text>- {origin}</Text>
    </View>
    {!renderButton ? null : (
      <View style={{ marginLeft: 2 }}>
        <ThemedButton
          title="^"
          onPress={onUpPress}
          styleOverride={{ paddingHorizontal: 12 }}
        />
      </View>
    )}
  </View>
);

export default function App() {
  const { quotes, addQuote, updatePosition } = useQuotes();
  const [text, setText] = useState("");
  const [origin, setOrigin] = useState("");

  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image source={require("./assets/logo.png")} />
        </View>
        <FlatList
          data={quotes}
          renderItem={({ item: { text, origin }, index }) => (
            <Item
              title={text}
              origin={origin}
              renderButton={index !== 0}
              onUpPress={() => updatePosition(index, index - 1)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <ThemedButton
          title="Add Quote"
          onPress={() => bottomDrawerRef.current?.open()}
        />
      </SafeAreaView>

      <StatusBar style="auto" />

      <BottomDrawer ref={bottomDrawerRef}>
        <KeyboardAvoidingView style={styles.contentContainer}>
          <Text style={styles.formTitle}>Add your movie quote</Text>

          <TextInput
            style={{ ...styles.input, ...styles.marginTop12, minHeight: 100 }}
            numberOfLines={6}
            multiline={true}
            placeholder="Keep the change ya filthy animal!"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          ></TextInput>
          <TextInput
            style={{ ...styles.input, ...styles.marginTop12 }}
            numberOfLines={1}
            placeholder="Home alone"
            onChangeText={(newText) => setOrigin(newText)}
            defaultValue={origin}
          ></TextInput>

          <View style={styles.marginTop12}>
            <ThemedButton
              title="Add"
              onPress={() => {
                addQuote(text, origin);
                setText("");
                setOrigin("");
                bottomDrawerRef.current?.close();
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </BottomDrawer>
    </View>
  );
}
