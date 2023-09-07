import { useEffect, useRef, useState } from "react";
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

interface Props {
  show: boolean;
}

export const AddFormDrawer = ({ show }: Props) => {
  const [open, setOpen] = useState(show);
  const bottomDrawerRef = useRef<BottomDrawerMethods>(null);

  // useEffect(() => {
  //   console.log("what", show, open);
  //   if (open !== show) {
  //     setOpen(show);
  //   }
  // }, [open, show]);

  return (
    <BottomDrawer ref={bottomDrawerRef} openOnMount={show}>
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
  );
};
