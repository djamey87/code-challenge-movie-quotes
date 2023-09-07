import { TextStyle, ViewStyle } from "react-native";

const container: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
  padding: 12,
  // alignItems: "center",
  // justifyContent: "center",
  // backgroundColor: "#f00",
};

const listContainer: ViewStyle = {
  backgroundColor: "#f00",
};

const card: ViewStyle = {
  paddingVertical: 12,
  paddingHorizontal: 12,
  borderRadius: 3,
  borderWidth: 1,
  marginVertical: 12,
};

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
  minHeight: 100, // Adjust the height as needed
  textAlignVertical: "top",
};

const flex: ViewStyle = {
  flex: 1,
};

const marginTop12: ViewStyle = {
  marginTop: 12,
};

export default {
  card,
  container,
  contentContainer,
  flex,
  input,
  listContainer,
  marginTop12,
};
