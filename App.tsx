import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomDrawer, {
  BottomDrawerMethods,
} from "react-native-animated-bottom-drawer";

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
        <View style={styles.contentContainer}>
          <Text>Awesome!</Text>
          {/* Add form here */}
        </View>
      </BottomDrawer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
