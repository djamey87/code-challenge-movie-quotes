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
// import DragList, { DragListRenderItemInfo } from "react-native-draglist";

// let mockDataStore = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];
type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.card}>
    <Text>{title}</Text>
  </View>
);

export default function App() {
  // const [data, setData] = useState(mockDataStore);
  const { quotes, addQuote } = useQuotes();
  const [text, setText] = useState("");

  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text>Movie Quotes</Text>
        <FlatList
          data={quotes}
          renderItem={({ item }) => <Item title={item.text} />}
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
