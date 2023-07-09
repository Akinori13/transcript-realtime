import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>リアルタイム議事録</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 64,
    marginTop: 32,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
  },
});

export default Header;
