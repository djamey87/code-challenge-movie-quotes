import { Text, Pressable, ViewStyle } from "react-native";
import { PressableProps } from "react-native/types";

import styles from "./styles";

type Props = PressableProps & {
  title?: string;
  styleOverride?: ViewStyle;
};

export const ThemedButton = ({
  title,
  children,
  styleOverride,
  ...rest
}: Props) => (
  <Pressable {...rest} style={{ ...styles.button, ...styleOverride }}>
    {title ? <Text style={styles.text}>{title}</Text> : children}
  </Pressable>
);
