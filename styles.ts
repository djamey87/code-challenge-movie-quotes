import { TextStyle, ViewStyle } from "react-native";

const container: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
  padding: 12,
  flexDirection: "column",
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
  flex: 1,
  flexDirection: "row",
  justifyContent: "center",
  alignContent: "center",
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
  paddingVertical: 12,
  width: "100%",
  textAlignVertical: "top",
};

const header: ViewStyle = {
  alignItems: "center",
  paddingBottom: 12,
  borderBottomColor: "#000",
  borderBottomWidth: 2,
};

const flex: ViewStyle = {
  flex: 1,
};

const marginTop12: ViewStyle = {
  marginTop: 12,
};

const formTitle: TextStyle = {
  fontSize: 20,
  lineHeight: 24,
  fontWeight: "bold",
  letterSpacing: 0.25,
};

export default {
  card,
  container,
  contentContainer,
  flex,
  formTitle,
  header,
  input,
  listContainer,
  marginTop12,
};
