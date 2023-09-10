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
} from "react-native";
import BottomDrawer, {
  BottomDrawerMethods,
} from "react-native-animated-bottom-drawer";

import styles from "./styles";
import { useQuotes } from "./hooks/useQuotes";
// import DragList, { DragListRenderItemInfo } from "react-native-draglist"; // tried and failed this implementation with expo

type ItemProps = {
  title: string;
  renderButton: boolean;
  onUpPress: () => void;
};

const Item = ({ title, renderButton, onUpPress }: ItemProps) => (
  <View style={styles.card}>
    <Text>{title}</Text>
    {!renderButton ? null : <Button title="^" onPress={onUpPress} />}
  </View>
);

export default function App() {
  const { quotes, addQuote, updatePosition } = useQuotes();
  const [text, setText] = useState("");

  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text>Movie Quotes</Text>
        <FlatList
          data={quotes}
          renderItem={({ item: { text }, index }) => (
            <Item
              title={text}
              renderButton={index !== 0}
              onUpPress={() => updatePosition(index, index - 1)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <Button
          title="Add Quote"
          onPress={() => bottomDrawerRef.current?.open()}
        />
      </SafeAreaView>

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
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          ></TextInput>

          <View style={styles.marginTop12}>
            <Button
              title="Add"
              onPress={() => {
                addQuote(text);
                setText("");
                bottomDrawerRef.current?.close();
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </BottomDrawer>
    </View>
  );
}
