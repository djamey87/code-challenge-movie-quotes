import { TextStyle, ViewStyle } from "react-native";

const contentContainer: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  alignItems: "center",
  margin: 12,
};

const input: TextStyle = {
  borderWidth: 1,
  borderColor: "#000",
  borderRadius: 3,
  paddingHorizontal: 12,
  paddingVertical: 6,
  width: "100%",
  minHeight: 100,
  textAlignVertical: "top",
};

const marginTop12: ViewStyle = {
  marginTop: 12,
};

export default {
  contentContainer,
  input,
  marginTop12,
};
